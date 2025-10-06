import type { MetaTagsProps } from 'svelte-meta-tags';
import { settingsQuery } from '$lib/sanity/queries';
import type { Settings } from '$lib/sanity/types';
import { urlFor } from '$lib/sanity/image';


export const load: LayoutServerLoad = async (event) => {

	const { loadQuery } = event.locals;
	const { slug } = event.params;

	const params = { slug };

	const { data } = await loadQuery<Settings>(settingsQuery, params);
	
	const baseMetaTags = Object.freeze({
		title: data.meta_title || 'Saluki',
		titleTemplate: `%s | ${data.meta_title}`,
		description: data.meta_description,
		canonical: new URL(event.url.pathname, event.url.origin).href,
		openGraph: {
		  type: 'website',
		  url: new URL(event.url.pathname, event.url.origin).href,
		  locale: 'en_IE',
		  title: data.meta_title,
		  description: data.meta_description,
		  siteName: data.meta_title,
		  images: [
			{
			  url: data.og_image ? urlFor(data.og_image).url() : "",
			  alt: 'Og Image Alt',
			  width: 800,
			  height: 600,
			  type: 'image/jpeg'
			}
		  ]
		}
	  }) satisfies MetaTagsProps;
	return { 
		baseMetaTags, 
		favicon: data.site_favicon ? urlFor(data.site_favicon).url() : "", 
		site_scripts: data.site_scripts,
		settings: data
	};
};
