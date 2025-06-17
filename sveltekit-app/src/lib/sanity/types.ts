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
}