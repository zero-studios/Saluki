import type { PageServerLoad, EntryGenerator } from './$types';
import { pageQuery, pagesQuery } from '$lib/sanity/queries';
import type { Page } from '$lib/sanity/types';
import { serverClient } from '$lib/server/sanity/client';
import { USE_PRERENDER } from '$env/static/private';

export const prerender = USE_PRERENDER==="1" ? true : false;

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const { slug } = event.params;

	const params = { slug };

	const pageData = await loadQuery<Page>(pageQuery, params);
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
		prerender
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
