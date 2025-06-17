import { defineField, defineType } from "sanity";
import { ChartUpwardIcon, CogIcon } from "@sanity/icons";

export default defineType({
	name: "settings",
	title: "Settings",
	type: "document",
	icon: CogIcon,
	groups: [
		{
			name: "main",
			title: "Main Content",
			default: true
		},
	],
	fields: [
		defineField({
			name: "meta_title",
			title: "Site Title",
			type: "string",
		}),
		defineField({
			name: "meta_description",
			title: "Site Description",
			type: "string",
			validation: (Rule) => Rule.max(160)
		}),
		defineField({
			name: "site_favicon",
			title: "Site Favicon",
			type: "image"
		}),
		defineField({
			name: "og_image",
			title: "Open Graph Image",
			type: "image"
		}),
		defineField({
			name: "site_scripts",
			description: "Place any sitewide scripts or pixels here",
			title: "Site Scripts / Pixels",
			type: "text",
		}),
	]
});