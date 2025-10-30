import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug, SanityReference } from '@sanity/types';

export interface HslaColor {
	_type: 'hslaColor';
	h: number;
	s: number;
	l: number;
	a: number;
}

export interface HsvaColor {
	_type: 'hsvaColor';
	h: number;
	s: number;
	v: number;
	a: number;
}

export interface RgbaColor {
	_type: 'rgbaColor';
	r: number;
	g: number;
	b: number;
	a: number;
}

export interface Color {
	_type: 'color';
	hex: string;
	alpha: number;
	hsl: HslaColor;
	hsv: HsvaColor;
	rgb: RgbaColor;
}

interface PagebuilderModule {
	_type: string;
	_createdAt: string;
	_key: string;
	title: string;
}

export interface ExampleModule extends PagebuilderModule {
	_type: 'Example';
    heading: string;
    body: PortableTextBlock[];
    image: ImageAsset;
    video: SanityReference;
    alt: string;
    color: Color;
}

export interface Page {
    _type: 'page';
    _createdAt: string;
    title: string;
    slug: Slug;
    modules: (ExampleModule)[];
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string[];
    og_image?: ImageAsset;
}

export interface Settings {
    _type: 'settings';
    _createdAt: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string[];
    site_favicon?: ImageAsset;
	og_image?: ImageAsset;
	gaID?: string;
	fbID?: string;
	site_scripts?: string;
	// Typography settings
	h1_fontSize?: number;
	h1_fontSizeMobile?: number;
	h1_lineHeight?: number;
	h1_lineHeightMobile?: number;
	h1_letterSpacing?: number;
	h1_letterSpacingMobile?: number;
	h1_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	h2_fontSize?: number;
	h2_fontSizeMobile?: number;
	h2_lineHeight?: number;
	h2_lineHeightMobile?: number;
	h2_letterSpacing?: number;
	h2_letterSpacingMobile?: number;
	h2_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	h3_fontSize?: number;
	h3_fontSizeMobile?: number;
	h3_lineHeight?: number;
	h3_lineHeightMobile?: number;
	h3_letterSpacing?: number;
	h3_letterSpacingMobile?: number;
	h3_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	h4_fontSize?: number;
	h4_fontSizeMobile?: number;
	h4_lineHeight?: number;
	h4_lineHeightMobile?: number;
	h4_letterSpacing?: number;
	h4_letterSpacingMobile?: number;
	h4_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	h5_fontSize?: number;
	h5_fontSizeMobile?: number;
	h5_lineHeight?: number;
	h5_lineHeightMobile?: number;
	h5_letterSpacing?: number;
	h5_letterSpacingMobile?: number;
	h5_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	h6_fontSize?: number;
	h6_fontSizeMobile?: number;
	h6_lineHeight?: number;
	h6_lineHeightMobile?: number;
	h6_letterSpacing?: number;
	h6_letterSpacingMobile?: number;
	h6_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	paragraph_fontSize?: number;
	paragraph_fontSizeMobile?: number;
	paragraph_lineHeight?: number;
	paragraph_lineHeightMobile?: number;
	paragraph_letterSpacing?: number;
	paragraph_letterSpacingMobile?: number;
	paragraph_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	paragraph_2_fontSize?: number;
	paragraph_2_fontSizeMobile?: number;
	paragraph_2_lineHeight?: number;
	paragraph_2_lineHeightMobile?: number;
	paragraph_2_letterSpacing?: number;
	paragraph_2_letterSpacingMobile?: number;
	paragraph_2_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	paragraph_3_fontSize?: number;
	paragraph_3_fontSizeMobile?: number;
	paragraph_3_lineHeight?: number;
	paragraph_3_lineHeightMobile?: number;
	paragraph_3_letterSpacing?: number;
	paragraph_3_letterSpacingMobile?: number;
	paragraph_3_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	eyebrow_fontSize?: number;
	eyebrow_fontSizeMobile?: number;
	eyebrow_lineHeight?: number;
	eyebrow_lineHeightMobile?: number;
	eyebrow_letterSpacing?: number;
	eyebrow_letterSpacingMobile?: number;
	eyebrow_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	eyebrow_2_fontSize?: number;
	eyebrow_2_fontSizeMobile?: number;
	eyebrow_2_lineHeight?: number;
	eyebrow_2_lineHeightMobile?: number;
	eyebrow_2_letterSpacing?: number;
	eyebrow_2_letterSpacingMobile?: number;
	eyebrow_2_textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
}

// Pagebuilder: Section and Blocks

export type ContentDirection = 'row' | 'column'
export type FlexAlignment = 'flex-start' | 'center' | 'flex-end' | 'space-between'

export interface TextBlock {
    _type: 'textBlock'
    _key: string
    text: PortableTextBlock[]
    // Shared layout settings
    shareLayoutSettings?: boolean
    visibility?: 'visible-all' | 'hidden--desktop' | 'hidden--mobile'
    // Layout - Mobile (base)
    width?: 'fit-content' | '100%' | 'custom'
    custom_width?: number
    maxWidth?: 'narrow' | 'normal' | 'none'
    alignment?: 'left' | 'center' | 'right'
    // Layout - Desktop
    width_desktop?: 'fit-content' | '100%' | 'custom'
    custom_width_desktop?: number
    maxWidth_desktop?: 'narrow' | 'normal' | 'none'
    alignment_desktop?: 'left' | 'center' | 'right'
    // Typography
    typePreset?: 'rte' | 'paragraph' | 'paragraph_2' | 'paragraph_3' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'custom'
    font?: string
    fontSize?: string
    fontSizeMobile?: string
    lineHeight?: 'tight' | 'normal' | 'loose'
    letterSpacing?: 'tight' | 'normal' | 'loose'
    textTransform?: 'none' | 'uppercase'
    textWrap?: 'pretty' | 'balance' | 'nowrap'
    color?: string
    // Background
    background?: boolean
    backgroundColor?: Color
    // Corner radius - Mobile
    cornerRadius?: number
    // Corner radius - Desktop
    cornerRadius_desktop?: number
    // Padding - Mobile
    paddingBlockStart?: number
    paddingBlockEnd?: number
    paddingInlineStart?: number
    paddingInlineEnd?: number
    // Padding - Desktop
    paddingBlockStart_desktop?: number
    paddingBlockEnd_desktop?: number
    paddingInlineStart_desktop?: number
    paddingInlineEnd_desktop?: number
}

export interface ImageBlock {
    _type: 'imageBlock'
    _key: string
    image?: ImageAsset
    alt?: string
    backgroundColor?: Color
    // Content settings
    shareContentSettings?: boolean
    aspectRatio?: string
    aspectRatio_desktop?: string
    objectFit?: 'cover' | 'contain' | 'fill' | 'none'
    objectFit_desktop?: 'cover' | 'contain' | 'fill' | 'none'
    // Shared layout settings
    shareLayoutSettings?: boolean
    visibility?: 'visible-all' | 'hidden--desktop' | 'hidden--mobile'
    // Layout - Mobile (base)
    width?: 'fit-content' | '100%' | 'custom'
    custom_width?: number
    maxWidth?: 'narrow' | 'normal' | 'none'
    alignment?: 'left' | 'center' | 'right'
    // Layout - Desktop
    width_desktop?: 'fit-content' | '100%' | 'custom'
    custom_width_desktop?: number
    maxWidth_desktop?: 'narrow' | 'normal' | 'none'
    alignment_desktop?: 'left' | 'center' | 'right'
    // Corner radius - Mobile
    cornerRadius?: number
    // Corner radius - Desktop
    cornerRadius_desktop?: number
    // Padding - Mobile
    paddingBlockStart?: number
    paddingBlockEnd?: number
    paddingInlineStart?: number
    paddingInlineEnd?: number
    // Padding - Desktop
    paddingBlockStart_desktop?: number
    paddingBlockEnd_desktop?: number
    paddingInlineStart_desktop?: number
    paddingInlineEnd_desktop?: number
}

export interface GroupBlock {
    _type: 'groupBlock'
    _key: string
    title?: string
    blocks?: (TextBlock | ImageBlock | GroupBlock)[]
    // Content settings
    shareContentSettings?: boolean
    visibility?: 'visible-all' | 'hidden--desktop' | 'hidden--mobile'
    // Content Direction
    contentDirection?: 'row' | 'column'
    contentDirection_desktop?: 'row' | 'column'
    // Content Alignment
    contentAlignment?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    contentAlignment_desktop?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    // Cross-axis Alignment
    contentAlignmentCrossAxis?: 'start' | 'center' | 'end'
    contentAlignmentCrossAxis_desktop?: 'start' | 'center' | 'end'
    // Gap
    gap?: number
    gap_desktop?: number
    // Background Media
    backgroundMedia?: 'none' | 'image' | 'video'
    backgroundMedia_desktop?: 'none' | 'image' | 'video'
    // Video - Mobile
    video?: any
    videoPosition?: 'cover' | 'contain'
    // Video - Desktop
    video_desktop?: any
    videoPosition_desktop?: 'cover' | 'contain'
    // Image - Mobile
    backgroundImage?: any
    backgroundImagePosition?: 'cover' | 'fit'
    // Image - Desktop
    backgroundImage_desktop?: any
    backgroundImagePosition_desktop?: 'cover' | 'fit'
    // Background Color & Overlay
    backgroundColor?: Color
    toggleOverlay?: boolean
    overlayColor?: Color
    // Link
    link?: string
    openInNewTab?: boolean
    // Layout settings (from sharedStyleFields)
    shareLayoutSettings?: boolean
    // Width - Mobile
    width?: 'fit-content' | '100%' | 'custom'
    custom_width?: number
    maxWidth?: 'narrow' | 'normal' | 'none'
    // Width - Desktop
    width_desktop?: 'fit-content' | '100%' | 'custom'
    custom_width_desktop?: number
    maxWidth_desktop?: 'narrow' | 'normal' | 'none'
    // Corner radius - Mobile
    cornerRadius?: number
    // Corner radius - Desktop
    cornerRadius_desktop?: number
    // Padding - Mobile
    paddingBlockStart?: number
    paddingBlockEnd?: number
    paddingInlineStart?: number
    paddingInlineEnd?: number
    // Padding - Desktop
    paddingBlockStart_desktop?: number
    paddingBlockEnd_desktop?: number
    paddingInlineStart_desktop?: number
    paddingInlineEnd_desktop?: number
}

export interface SectionModule extends PagebuilderModule {
    _type: 'section'
    _id: string
    blocks: (GroupBlock | TextBlock | ImageBlock)[]
    // Content settings
    shareContentSettings?: boolean
    // Content Direction
    contentDirection?: 'row' | 'column'
    contentDirection_desktop?: 'row' | 'column'
    // Content Alignment
    contentAlignment?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    contentAlignment_desktop?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    // Cross-axis Alignment
    contentAlignmentCrossAxis?: 'start' | 'center' | 'end'
    contentAlignmentCrossAxis_desktop?: 'start' | 'center' | 'end'
    // Gap
    gap?: number
    gap_desktop?: number
    // Section Width
    sectionWidth?: 'page-width' | 'full-width'
    // Section Height
    height?: 'auto' | 'fullscreen' | 'square' | 'landscape' | 'portrait'
    height_desktop?: 'auto' | 'fullscreen' | 'square' | 'landscape' | 'portrait'
    // Background Media
    backgroundMedia?: 'none' | 'image' | 'video'
    backgroundMedia_desktop?: 'none' | 'image' | 'video'
    // Video - Mobile
    video?: any
    videoPosition?: 'cover' | 'contain'
    // Video - Desktop
    video_desktop?: any
    videoPosition_desktop?: 'cover' | 'contain'
    // Image - Mobile
    backgroundImage?: any
    backgroundImagePosition?: 'cover' | 'fit'
    // Image - Desktop
    backgroundImage_desktop?: any
    backgroundImagePosition_desktop?: 'cover' | 'fit'
    // Background Color & Overlay
    backgroundColor?: Color
    toggleOverlay?: boolean
    overlayColor?: Color
    // Layout settings
    shareLayoutSettings?: boolean
    // Corner radius - Mobile
    cornerRadius?: number
    // Corner radius - Desktop
    cornerRadius_desktop?: number
    // Padding - Mobile
    paddingBlockStart?: number
    paddingBlockEnd?: number
    paddingInlineStart?: number
    paddingInlineEnd?: number
    // Padding - Desktop
    paddingBlockStart_desktop?: number
    paddingBlockEnd_desktop?: number
    paddingInlineStart_desktop?: number
    paddingInlineEnd_desktop?: number
}