import type { PageServerLoad, EntryGenerator } from './$types';
import { pageQuery, pagesQuery } from '$lib/sanity/queries';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { urlFor } from '$lib/sanity/image';
import type { Page } from '$lib/sanity/types';
import { serverClient } from '$lib/server/sanity/client';
import { USE_PRERENDER } from '$env/static/private';

export const prerender = USE_PRERENDER==="1" ? true : false;

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const { slug } = event.params;

	const params = { slug };

	const pageData = await loadQuery<Page>(pageQuery, params);

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
		pageQuery,
		pageData,
		params,
		prerender,
		pageMetaTags,
	};
};

export const entries: EntryGenerator = async () => {
	let page_entries = [];

	try {
		page_entries = await serverClient.fetch(pagesQuery);
	} catch (error) {
		console.error(error);
	}

	const page_routes = page_entries.map((page) => ({
		slug: page.slug.current
	}));

	return page_routes;
};
