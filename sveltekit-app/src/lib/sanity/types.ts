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
    width?: 'fit-content' | '100%'
    maxWidth?: 'narrow' | 'normal' | 'none'
    alignment?: 'left' | 'center' | 'right'
    typePreset?: 'rte' | 'paragraph' | 'paragraph_2' | 'paragraph_3' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'custom'
    font?: string
    fontSize?: string
    fontSizeMobile?: string
    lineHeight?: 'tight' | 'normal' | 'loose'
    letterSpacing?: 'tight' | 'normal' | 'loose'
    textTransform?: 'none' | 'uppercase'
    textWrap?: 'pretty' | 'balance' | 'nowrap'
    color?: string
    background?: boolean
    backgroundColor?: Color
    cornerRadius?: number
    paddingBlockStart?: number
    paddingBlockEnd?: number
    paddingInlineStart?: number
    paddingInlineEnd?: number
}

export interface GroupBlock {
    _type: 'groupBlock'
    _key: string
    link?: string
    openInNewTab?: boolean
    shareLayoutSettings?: boolean
    contentDirection?: ContentDirection
    verticalOnMobile?: boolean
    horizontalAlignment?: FlexAlignment
    horizontalAlignmentMobile?: FlexAlignment
    verticalAlignment?: 'flex-start' | 'center' | 'flex-end'
    verticalAlignmentMobile?: 'flex-start' | 'center' | 'flex-end'
    alignBaseline?: boolean
    horizontalAlignmentColumn?: 'flex-start' | 'center' | 'flex-end'
    horizontalAlignmentColumnMobile?: 'flex-start' | 'center' | 'flex-end'
    verticalAlignmentColumn?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    verticalAlignmentColumnMobile?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    gap?: number
    gapMobile?: number
    width?: 'fit-content' | 'fill' | 'custom'
    customWidth?: number
    widthMobile?: 'fit-content' | 'fill' | 'custom'
    customWidthMobile?: number
    height?: 'fit' | 'fill' | 'custom'
    customHeight?: number
    shareAppearanceSettings?: boolean
    inheritColorScheme?: boolean
    colorScheme?: 'scheme-1' | 'scheme-2' | 'scheme-3' | 'scheme-4' | 'scheme-5'
    backgroundMedia?: 'none' | 'image' | 'video'
    backgroundMediaMobile?: 'none' | 'image' | 'video'
    video?: any
    videoPosition?: 'cover' | 'contain'
    backgroundImage?: any
    backgroundImagePosition?: 'cover' | 'fit'
    border?: 'none' | 'solid'
    borderWidth?: number
    borderOpacity?: number
    borderRadius?: number
    borderRadiusMobile?: number
    visibility?: 'visible-all' | 'hidden--desktop' | 'hidden--mobile'
    toggleOverlay?: boolean
    overlayColor?: Color
    overlayStyle?: 'solid' | 'gradient'
    gradientDirection?: 'to top' | 'to bottom'
    sharePaddingSettings?: boolean
    paddingBlockStart?: number
    paddingBlockStartMobile?: number
    paddingBlockEnd?: number
    paddingBlockEndMobile?: number
    paddingInlineStart?: number
    paddingInlineStartMobile?: number
    paddingInlineEnd?: number
    paddingInlineEndMobile?: number
    blocks?: (TextBlock | GroupBlock)[]
}

export interface SectionModule extends PagebuilderModule {
    _type: 'section'
    contentDirection?: ContentDirection
    verticalOnMobile?: boolean
    shareLayoutSettings?: boolean
    horizontalAlignment?: FlexAlignment
    horizontalAlignmentMobile?: FlexAlignment
    verticalAlignment?: 'flex-start' | 'center' | 'flex-end'
    verticalAlignmentMobile?: 'flex-start' | 'center' | 'flex-end'
    alignBaseline?: boolean
    horizontalAlignmentColumn?: 'flex-start' | 'center' | 'flex-end'
    horizontalAlignmentColumnMobile?: 'flex-start' | 'center' | 'flex-end'
    verticalAlignmentColumn?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    verticalAlignmentColumnMobile?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
    gap?: number
    gapMobile?: number
    sectionWidth?: 'page-width' | 'full-width'
    sectionHeight?: 'auto' | 'small' | 'medium' | 'large' | 'full-screen' | 'custom'
    sectionHeightCustom?: number
    colorScheme?: '' | 'scheme-1' | 'scheme-2' | 'scheme-3' | 'scheme-4' | 'scheme-5'
    backgroundMedia?: 'none' | 'image' | 'video'
    backgroundMediaMobile?: 'none' | 'image' | 'video'
    video?: any
    videoPosition?: 'cover' | 'contain'
    backgroundImage?: any
    backgroundImagePosition?: 'cover' | 'fit'
    border?: 'none' | 'solid'
    borderWidth?: number
    borderOpacity?: number
    borderRadius?: number
    borderRadiusMobile?: number
    shareAppearanceSettings?: boolean
    toggleOverlay?: boolean
    overlayColor?: Color
    overlayStyle?: 'solid' | 'gradient'
    gradientDirection?: 'to top' | 'to bottom'
    paddingBlockStart?: number
    paddingBlockEnd?: number
    sharePaddingSettings?: boolean
    paddingBlockStartMobile?: number
    paddingBlockEndMobile?: number
    blocks: (GroupBlock | TextBlock)[]
}