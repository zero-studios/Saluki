<script lang="ts">
	import { optimize } from '$lib/vercel_image';

	type Props = {
		src: string;
		alt: string;
		loading: 'lazy' | 'eager';
		aria_hidden: boolean | undefined;
		classes: string;
	};

	let { src, alt, loading = 'lazy', aria_hidden = undefined, classes }: Props = $props();

	const src_set = optimize(src);
</script>

<img
	srcset={src_set}
	{alt}
	{loading}
	aria-hidden={aria_hidden ? 'true' : undefined}
	class={classes}
/>
