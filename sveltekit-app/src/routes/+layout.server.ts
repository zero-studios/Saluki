import type { MetaTagsProps } from 'svelte-meta-tags';

export const load: LayoutServerLoad = ({ url }) => {
	const baseMetaTags = Object.freeze({
		title: 'Zero',
		titleTemplate: '%s | Saluki',
		description: 'Svelte Meta Tags is a Svelte component for managing meta tags and SEO in your Svelte applications.',
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
		  type: 'website',
		  url: new URL(url.pathname, url.origin).href,
		  locale: 'en_IE',
		  title: 'Open Graph Title',
		  description: 'Open Graph Description',
		  siteName: 'SiteName',
		  images: [
			{
			  url: 'https://www.example.ie/og-image.jpg',
			  alt: 'Og Image Alt',
			  width: 800,
			  height: 600,
			  secureUrl: 'https://www.example.ie/og-image.jpg',
			  type: 'image/jpeg'
			}
		  ]
		}
	  }) satisfies MetaTagsProps;
	return { baseMetaTags };
};
