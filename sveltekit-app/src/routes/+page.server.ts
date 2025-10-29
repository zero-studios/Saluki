import type { PageServerLoad } from './$types';
import { homeQuery } from '$lib/sanity/queries';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { urlFor } from '$lib/sanity/image';
import type { Page } from '$lib/sanity/types';
import { USE_PRERENDER } from '$env/static/private';

export const prerender = USE_PRERENDER==="1" ? true : false;

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const { slug } = event.params;

	const params = { slug };

	const initialData = await loadQuery<Page>(homeQuery, params);

	const pageMetaTags = Object.freeze({
		title: initialData?.data.meta_title || ':)',
		description: initialData?.data.meta_description,
		openGraph: {
		  type: 'website',
		  url: new URL(event.url.pathname, event.url.origin).href,
		  title: initialData?.data.meta_title,
		  locale: 'en_IE',
		  description: initialData?.data.meta_description,
		  siteName: initialData?.data.meta_title,
		  images: [
			{
			  url: initialData?.data.og_image ? urlFor(initialData?.data.og_image).url() : "",
			  alt: initialData?.data.og_image_alt,
			  width: 800,
			  height: 600,
			  type: 'image/jpeg'
			}
		  ],
		}
	}) satisfies MetaTagsProps;

	if (!initialData) {
		return {
			status: 404,
			error: new Error('Page not found'),
		};
	}
	return {
		query: homeQuery,
		options: {
			initial: initialData,
		},
		pageMetaTags,

		// pageData,
		// params,
		// prerender,
	};
};
