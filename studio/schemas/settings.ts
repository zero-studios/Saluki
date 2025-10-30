import { defineField, defineType } from "sanity";
import { ChartUpwardIcon, CogIcon } from "@sanity/icons";
import { SliderInput } from "../lib/components/SliderInput";
import { ButtonGroupInput } from "../lib/components/ButtonGroupInput";

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
		{
			name: "typography",
			title: "Typography",
		}
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
	// Typography Settings
	defineField({
		name: "h1_fontSize",
		title: "H1 Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 48,
		options: { min: 24, max: 96, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h1_fontSizeMobile",
		title: "H1 Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 32,
		options: { min: 16, max: 64, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h1_lineHeight",
		title: "H1 Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.2,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h1_lineHeightMobile",
		title: "H1 Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.1,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h1_letterSpacing",
		title: "H1 Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: -0.02,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h1_letterSpacingMobile",
		title: "H1 Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: -0.01,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h1_textTransform",
		title: "H1 Text Transform",
		type: "string",
		group: "typography",
		initialValue: "none",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "h2_fontSize",
		title: "H2 Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 36,
		options: { min: 18, max: 72, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h2_fontSizeMobile",
		title: "H2 Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 28,
		options: { min: 14, max: 56, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h2_lineHeight",
		title: "H2 Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.3,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h2_lineHeightMobile",
		title: "H2 Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.2,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h2_letterSpacing",
		title: "H2 Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: -0.01,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h2_letterSpacingMobile",
		title: "H2 Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h2_textTransform",
		title: "H2 Text Transform",
		type: "string",
		group: "typography",
		initialValue: "none",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "h3_fontSize",
		title: "H3 Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 28,
		options: { min: 14, max: 56, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h3_fontSizeMobile",
		title: "H3 Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 24,
		options: { min: 12, max: 48, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h3_lineHeight",
		title: "H3 Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.3,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h3_lineHeightMobile",
		title: "H3 Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.2,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h3_letterSpacing",
		title: "H3 Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h3_letterSpacingMobile",
		title: "H3 Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h3_textTransform",
		title: "H3 Text Transform",
		type: "string",
		group: "typography",
		initialValue: "none",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "h4_fontSize",
		title: "H4 Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 24,
		options: { min: 12, max: 48, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h4_fontSizeMobile",
		title: "H4 Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 20,
		options: { min: 10, max: 40, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h4_lineHeight",
		title: "H4 Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.4,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h4_lineHeightMobile",
		title: "H4 Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.3,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h4_letterSpacing",
		title: "H4 Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h4_letterSpacingMobile",
		title: "H4 Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h4_textTransform",
		title: "H4 Text Transform",
		type: "string",
		group: "typography",
		initialValue: "none",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "h5_fontSize",
		title: "H5 Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 20,
		options: { min: 10, max: 40, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h5_fontSizeMobile",
		title: "H5 Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 18,
		options: { min: 9, max: 36, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h5_lineHeight",
		title: "H5 Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.4,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h5_lineHeightMobile",
		title: "H5 Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.3,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h5_letterSpacing",
		title: "H5 Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h5_letterSpacingMobile",
		title: "H5 Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h5_textTransform",
		title: "H5 Text Transform",
		type: "string",
		group: "typography",
		initialValue: "none",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "h6_fontSize",
		title: "H6 Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 18,
		options: { min: 9, max: 36, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h6_fontSizeMobile",
		title: "H6 Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 16,
		options: { min: 8, max: 32, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h6_lineHeight",
		title: "H6 Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.4,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h6_lineHeightMobile",
		title: "H6 Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.3,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h6_letterSpacing",
		title: "H6 Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h6_letterSpacingMobile",
		title: "H6 Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "h6_textTransform",
		title: "H6 Text Transform",
		type: "string",
		group: "typography",
		initialValue: "none",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "paragraph_fontSize",
		title: "Paragraph Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 16,
		options: { min: 8, max: 32, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_fontSizeMobile",
		title: "Paragraph Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 14,
		options: { min: 7, max: 28, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_lineHeight",
		title: "Paragraph Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.6,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_lineHeightMobile",
		title: "Paragraph Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.5,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_letterSpacing",
		title: "Paragraph Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_letterSpacingMobile",
		title: "Paragraph Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_textTransform",
		title: "Paragraph Text Transform",
		type: "string",
		group: "typography",
		initialValue: "none",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "paragraph_2_fontSize",
		title: "Paragraph 2 Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 18,
		options: { min: 9, max: 36, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_2_fontSizeMobile",
		title: "Paragraph 2 Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 16,
		options: { min: 8, max: 32, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_2_lineHeight",
		title: "Paragraph 2 Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.6,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_2_lineHeightMobile",
		title: "Paragraph 2 Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.5,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_2_letterSpacing",
		title: "Paragraph 2 Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_2_letterSpacingMobile",
		title: "Paragraph 2 Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_2_textTransform",
		title: "Paragraph 2 Text Transform",
		type: "string",
		group: "typography",
		initialValue: "none",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "paragraph_3_fontSize",
		title: "Paragraph 3 Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 20,
		options: { min: 10, max: 40, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_3_fontSizeMobile",
		title: "Paragraph 3 Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 18,
		options: { min: 9, max: 36, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_3_lineHeight",
		title: "Paragraph 3 Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.6,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_3_lineHeightMobile",
		title: "Paragraph 3 Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.5,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_3_letterSpacing",
		title: "Paragraph 3 Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_3_letterSpacingMobile",
		title: "Paragraph 3 Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "paragraph_3_textTransform",
		title: "Paragraph 3 Text Transform",
		type: "string",
		group: "typography",
		initialValue: "none",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "eyebrow_fontSize",
		title: "Eyebrow Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 14,
		options: { min: 7, max: 28, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_fontSizeMobile",
		title: "Eyebrow Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 12,
		options: { min: 6, max: 24, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_lineHeight",
		title: "Eyebrow Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.4,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_lineHeightMobile",
		title: "Eyebrow Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.3,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_letterSpacing",
		title: "Eyebrow Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: 0.1,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_letterSpacingMobile",
		title: "Eyebrow Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0.05,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_textTransform",
		title: "Eyebrow Text Transform",
		type: "string",
		group: "typography",
		initialValue: "uppercase",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	defineField({
		name: "eyebrow_2_fontSize",
		title: "Eyebrow 2 Font Size (px)",
		type: "number",
		group: "typography",
		initialValue: 16,
		options: { min: 8, max: 32, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_2_fontSizeMobile",
		title: "Eyebrow 2 Font Size Mobile (px)",
		type: "number",
		group: "typography",
		initialValue: 14,
		options: { min: 7, max: 28, step: 1, unit: 'px' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_2_lineHeight",
		title: "Eyebrow 2 Line Height",
		type: "number",
		group: "typography",
		initialValue: 1.4,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_2_lineHeightMobile",
		title: "Eyebrow 2 Line Height Mobile",
		type: "number",
		group: "typography",
		initialValue: 1.3,
		options: { min: 1.0, max: 2.0, step: 0.05, unit: '' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_2_letterSpacing",
		title: "Eyebrow 2 Letter Spacing",
		type: "number",
		group: "typography",
		initialValue: 0.05,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_2_letterSpacingMobile",
		title: "Eyebrow 2 Letter Spacing Mobile",
		type: "number",
		group: "typography",
		initialValue: 0.02,
		options: { min: -0.1, max: 0.2, step: 0.01, unit: 'em' },
		components: { input: SliderInput }
	}),
	defineField({
		name: "eyebrow_2_textTransform",
		title: "Eyebrow 2 Text Transform",
		type: "string",
		group: "typography",
		initialValue: "uppercase",
		options: {
			list: [
				{title: "None", value: "none"},
				{title: "Uppercase", value: "uppercase"},
				{title: "Lowercase", value: "lowercase"},
				{title: "Capitalize", value: "capitalize"},
			],
		},
		components: { input: ButtonGroupInput }
	}),
	]
});