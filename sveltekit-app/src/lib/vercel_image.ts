import { dev } from '$app/environment';

export function optimize(src: string, widths = [200, 400, 800, 1200, 1600, 2000], quality = 90) {
	if (dev) return src;

	const optimizedSrcset = widths
		.slice()
		.sort((a, b) => a - b)
		.map((width, i) => {
			const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
			const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
			return url + descriptor;
		})
		.join(', ');

	return optimizedSrcset;
}

export function optimize_single(src: string, width = 800, quality = 90) {
	if (dev) return src;
	return `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}
