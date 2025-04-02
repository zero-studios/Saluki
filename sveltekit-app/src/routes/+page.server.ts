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

	const pageData = await loadQuery<Page>(homeQuery, params);

	const pageMetaTags = Object.freeze({
		title: pageData?.data.meta_title || ':)',
		description: pageData?.data.meta_description,
		openGraph: {
		  type: 'website',
		  url: new URL(event.url.pathname, event.url.origin).href,
		  title: pageData?.data.meta_title,
		  locale: 'en_IE',
		  description: pageData?.data.meta_description,
		  siteName: pageData?.data.meta_title,
		  images: [
			{
			  url: pageData.data.og_image ? urlFor(pageData.data.og_image).url() : "",
			  alt: pageData?.data.og_image_alt,
			  width: 800,
			  height: 600,
			  type: 'image/jpeg'
			}
		  ],
		}
	}) satisfies MetaTagsProps;

	if (!pageData) {
		return {
			status: 404,
			error: new Error('Page not found'),
		};
	}
	return {
		pageData,
		params,
		prerender,
		pageMetaTags,
	};
};
