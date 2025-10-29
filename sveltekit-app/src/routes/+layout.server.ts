import type { MetaTagsProps } from 'svelte-meta-tags';
import type { LayoutServerLoad } from './$types';
import { settingsQuery } from '$lib/sanity/queries';
import type { Settings } from '$lib/sanity/types';
import { urlFor } from '$lib/sanity/image';
import { PUBLIC_PREVIEW } from '$env/static/public';

const is_ssg = PUBLIC_PREVIEW === 'FALSE';
export const prerender = is_ssg;

export const load: LayoutServerLoad = async (event) => {
	const { loadQuery } = event.locals;
	const { preview } = event.locals;

	const initialData = await loadQuery<Settings>(settingsQuery);

	const baseMetaTags = Object.freeze({
		title: initialData?.data.meta_title || 'Saluki',
		titleTemplate: `%s | ${initialData?.data.meta_title}`,
		description: initialData?.data.meta_description,
		canonical: new URL(event.url.pathname, event.url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(event.url.pathname, event.url.origin).href,
			locale: 'en_IE',
			title: initialData?.data.meta_title,
			description: initialData?.data.meta_description,
			siteName: initialData?.data.meta_title,
			images: [
				{
					url: initialData?.data.og_image ? urlFor(initialData?.data.og_image).url() : '',
					alt: 'Og Image Alt',
					width: 800,
					height: 600,
					type: 'image/jpeg'
				}
			]
		}
	}) satisfies MetaTagsProps;
	return {
		preview,

		query:settingsQuery,
		options: {
			initial: initialData,
		},
		baseMetaTags,
		favicon: initialData?.data.site_favicon ? urlFor(initialData?.data.site_favicon).url() : '',
		site_scripts: initialData?.data.site_scripts
	};
};