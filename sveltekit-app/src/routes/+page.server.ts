import type { PageServerLoad } from './$types';
import { homeQuery } from '$lib/sanity/queries';
import type { Page } from '$lib/sanity/types';
import { USE_PRERENDER } from '$env/static/private';

export const prerender = USE_PRERENDER==="1" ? true : false;

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const { slug } = event.params;

	const params = { slug };

	const pageData = await loadQuery<Page>(homeQuery, params);
	if (!pageData) {
		return {
			status: 404,
			error: new Error('Page not found'),
		};
	}
	return {
		pageData,
		params,
		prerender
	};
};
