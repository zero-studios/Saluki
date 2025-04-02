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
		// Main Site info
		defineField({
			name: "info",
			title: "Website Information",
			group: "main",

			type: "object",
			options: {
				collapsible: true,
				collapsed: false
			},
			fields: [
				defineField({
					name: "siteTitle",
					title: "Site Title",
					type: "string",
				}),
				defineField({
					name: "siteDescription",
					title: "Site Description",
					type: "string",
					validation: (Rule) => Rule.max(160)
				}),
				defineField({
					name: "siteFavicon",
					title: "Site Favicon",
					type: "image"
				}),
			]
		}),


		// Analytics
		defineField({
			name: "analytics",
			title: "Analytics",
			group: "main",

			type: "object",
			icon: ChartUpwardIcon,
			options: {
				collapsible: true,
				collapsed: true
			},
			fields: [
				defineField({
					name: "gaID",
					title: "GA Measurement ID",
					type: "string",
				}),
				defineField({
					name: "fbID",
					title: "Facebook Pixel ID",
					type: "string",
				}),
				defineField({
					name: "siteScripts",
					description: "Place any sitewide scripts or pixels here",
					title: "Site Scripts / Pixels",
					type: "text",
				})
			]
		})
	]
});