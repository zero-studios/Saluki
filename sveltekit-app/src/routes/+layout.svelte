<script lang="ts">
	import "../app.css";
	import { page } from '$app/state';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import type { Settings } from '$lib/sanity/types';
	import { PUBLIC_PREVIEW } from '$env/static/public';
	import { useQuery } from '@sanity/svelte-loader';
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import LiveMode from '$lib/components/LiveMode.svelte';
	import { stegaClean } from '@sanity/client/stega'

	let { data, children } = $props();

	let query = $derived(useQuery(data));
	let initial = $derived($query);

	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));

	// Create dynamic CSS custom properties for typography
	const typographyVars = $derived({
		// H1
		'--h1-font-size': `${initial.data?.h1_fontSize || 48}px`,
		'--h1-font-size-mobile': `${initial.data?.h1_fontSizeMobile || 32}px`,
		'--h1-font-size-vw': `${(initial.data?.h1_fontSize || 48) * 0.1}vw`,
		'--h1-line-height': initial.data?.h1_lineHeight || 1.2,
		'--h1-line-height-mobile': initial.data?.h1_lineHeightMobile || 1.1,
		'--h1-letter-spacing': `${initial.data?.h1_letterSpacing || -0.02}em`,
		'--h1-letter-spacing-mobile': `${initial.data?.h1_letterSpacingMobile || -0.01}em`,
		'--h1-text-transform': initial.data?.h1_textTransform || 'none',
		
		// H2
		'--h2-font-size': `${initial.data?.h2_fontSize || 36}px`,
		'--h2-font-size-mobile': `${initial.data?.h2_fontSizeMobile || 28}px`,
		'--h2-font-size-vw': `${(initial.data?.h2_fontSize || 36) * 0.1}vw`,
		'--h2-line-height': initial.data?.h2_lineHeight || 1.3,
		'--h2-line-height-mobile': initial.data?.h2_lineHeightMobile || 1.2,
		'--h2-letter-spacing': `${initial.data?.h2_letterSpacing || -0.01}em`,
		'--h2-letter-spacing-mobile': `${initial.data?.h2_letterSpacingMobile || 0}em`,
		'--h2-text-transform': initial.data?.h2_textTransform || 'none',
		
		// H3
		'--h3-font-size': `${initial.data?.h3_fontSize || 28}px`,
		'--h3-font-size-mobile': `${initial.data?.h3_fontSizeMobile || 24}px`,
		'--h3-font-size-vw': `${(initial.data?.h3_fontSize || 28) * 0.1}vw`,
		'--h3-line-height': initial.data?.h3_lineHeight || 1.3,
		'--h3-line-height-mobile': initial.data?.h3_lineHeightMobile || 1.2,
		'--h3-letter-spacing': `${initial.data?.h3_letterSpacing || 0}em`,
		'--h3-letter-spacing-mobile': `${initial.data?.h3_letterSpacingMobile || 0}em`,
		'--h3-text-transform': initial.data?.h3_textTransform || 'none',
		
		// H4
		'--h4-font-size': `${initial.data?.h4_fontSize || 24}px`,
		'--h4-font-size-mobile': `${initial.data?.h4_fontSizeMobile || 20}px`,
		'--h4-font-size-vw': `${(initial.data?.h4_fontSize || 24) * 0.1}vw`,
		'--h4-line-height': initial.data?.h4_lineHeight || 1.4,
		'--h4-line-height-mobile': initial.data?.h4_lineHeightMobile || 1.3,
		'--h4-letter-spacing': `${initial.data?.h4_letterSpacing || 0}em`,
		'--h4-letter-spacing-mobile': `${initial.data?.h4_letterSpacingMobile || 0}em`,
		'--h4-text-transform': initial.data?.h4_textTransform || 'none',
		
		// H5
		'--h5-font-size': `${initial.data?.h5_fontSize || 20}px`,
		'--h5-font-size-mobile': `${initial.data?.h5_fontSizeMobile || 18}px`,
		'--h5-font-size-vw': `${(initial.data?.h5_fontSize || 20) * 0.1}vw`,
		'--h5-line-height': initial.data?.h5_lineHeight || 1.4,
		'--h5-line-height-mobile': initial.data?.h5_lineHeightMobile || 1.3,
		'--h5-letter-spacing': `${initial.data?.h5_letterSpacing || 0}em`,
		'--h5-letter-spacing-mobile': `${initial.data?.h5_letterSpacingMobile || 0}em`,
		'--h5-text-transform': initial.data?.h5_textTransform || 'none',
		
		// H6
		'--h6-font-size': `${initial.data?.h6_fontSize || 18}px`,
		'--h6-font-size-mobile': `${initial.data?.h6_fontSizeMobile || 16}px`,
		'--h6-font-size-vw': `${(initial.data?.h6_fontSize || 18) * 0.1}vw`,
		'--h6-line-height': initial.data?.h6_lineHeight || 1.4,
		'--h6-line-height-mobile': initial.data?.h6_lineHeightMobile || 1.3,
		'--h6-letter-spacing': `${initial.data?.h6_letterSpacing || 0}em`,
		'--h6-letter-spacing-mobile': `${initial.data?.h6_letterSpacingMobile || 0}em`,
		'--h6-text-transform': initial.data?.h6_textTransform || 'none',
		
		// Paragraph
		'--paragraph-font-size': `${initial.data?.paragraph_fontSize || 16}px`,
		'--paragraph-font-size-mobile': `${initial.data?.paragraph_fontSizeMobile || 14}px`,
		'--paragraph-font-size-vw': `${(initial.data?.paragraph_fontSize || 16) * 0.1}vw`,
		'--paragraph-line-height': initial.data?.paragraph_lineHeight || 1.6,
		'--paragraph-line-height-mobile': initial.data?.paragraph_lineHeightMobile || 1.5,
		'--paragraph-letter-spacing': `${initial.data?.paragraph_letterSpacing || 0}em`,
		'--paragraph-letter-spacing-mobile': `${initial.data?.paragraph_letterSpacingMobile || 0}em`,
		'--paragraph-text-transform': initial.data?.paragraph_textTransform || 'none',
		
		// Paragraph 2
		'--paragraph-2-font-size': `${initial.data?.paragraph_2_fontSize || 18}px`,
		'--paragraph-2-font-size-mobile': `${initial.data?.paragraph_2_fontSizeMobile || 16}px`,
		'--paragraph-2-font-size-vw': `${(initial.data?.paragraph_2_fontSize || 18) * 0.1}vw`,
		'--paragraph-2-line-height': initial.data?.paragraph_2_lineHeight || 1.6,
		'--paragraph-2-line-height-mobile': initial.data?.paragraph_2_lineHeightMobile || 1.5,
		'--paragraph-2-letter-spacing': `${initial.data?.paragraph_2_letterSpacing || 0}em`,
		'--paragraph-2-letter-spacing-mobile': `${initial.data?.paragraph_2_letterSpacingMobile || 0}em`,
		'--paragraph-2-text-transform': initial.data?.paragraph_2_textTransform || 'none',
		
		// Paragraph 3
		'--paragraph-3-font-size': `${initial.data?.paragraph_3_fontSize || 20}px`,
		'--paragraph-3-font-size-mobile': `${initial.data?.paragraph_3_fontSizeMobile || 18}px`,
		'--paragraph-3-font-size-vw': `${(initial.data?.paragraph_3_fontSize || 20) * 0.1}vw`,
		'--paragraph-3-line-height': initial.data?.paragraph_3_lineHeight || 1.6,
		'--paragraph-3-line-height-mobile': initial.data?.paragraph_3_lineHeightMobile || 1.5,
		'--paragraph-3-letter-spacing': `${initial.data?.paragraph_3_letterSpacing || 0}em`,
		'--paragraph-3-letter-spacing-mobile': `${initial.data?.paragraph_3_letterSpacingMobile || 0}em`,
		'--paragraph-3-text-transform': initial.data?.paragraph_3_textTransform || 'none',
		
		// Eyebrow
		'--eyebrow-font-size': `${initial.data?.eyebrow_fontSize || 14}px`,
		'--eyebrow-font-size-mobile': `${initial.data?.eyebrow_fontSizeMobile || 12}px`,
		'--eyebrow-font-size-vw': `${(initial.data?.eyebrow_fontSize || 14) * 0.1}vw`,
		'--eyebrow-line-height': initial.data?.eyebrow_lineHeight || 1.4,
		'--eyebrow-line-height-mobile': initial.data?.eyebrow_lineHeightMobile || 1.3,
		'--eyebrow-letter-spacing': `${initial.data?.eyebrow_letterSpacing || 0.1}em`,
		'--eyebrow-letter-spacing-mobile': `${initial.data?.eyebrow_letterSpacingMobile || 0.05}em`,
		'--eyebrow-text-transform': initial.data?.eyebrow_textTransform || 'uppercase',
		
		// Eyebrow 2
		'--eyebrow-2-font-size': `${initial.data?.eyebrow_2_fontSize || 16}px`,
		'--eyebrow-2-font-size-mobile': `${initial.data?.eyebrow_2_fontSizeMobile || 14}px`,
		'--eyebrow-2-font-size-vw': `${(initial.data?.eyebrow_2_fontSize || 16) * 0.1}vw`,
		'--eyebrow-2-line-height': initial.data?.eyebrow_2_lineHeight || 1.4,
		'--eyebrow-2-line-height-mobile': initial.data?.eyebrow_2_lineHeightMobile || 1.3,
		'--eyebrow-2-letter-spacing': `${initial.data?.eyebrow_2_letterSpacing || 0.05}em`,
		'--eyebrow-2-letter-spacing-mobile': `${initial.data?.eyebrow_2_letterSpacingMobile || 0.02}em`,
		'--eyebrow-2-text-transform': initial.data?.eyebrow_2_textTransform || 'uppercase',
	} as Record<string, string | number>);

	function styleFromVars(vars: Record<string, string | number>) {
		return Object.entries(vars)
			.map(([k, v]) => `${k}: ${v}`)
			.join('; ')
	}

</script>

<svelte:head>
	<link rel="icon" href={data.favicon} />
	{@html stegaClean(data.site_scripts)}
</svelte:head>

<div style={styleFromVars(typographyVars)}>
	<header class="header" style="background: lightgrey;">
		<a class="header__title" href="/">Zero Saluki</a>
	</header>
	<main>
		{@render children?.()}
	</main>
	<footer class="footer">
	</footer>
</div>


{#if $isPreviewing && PUBLIC_PREVIEW === 'TRUE'}
<p>Previewing</p>
	<VisualEditing />
	<LiveMode />
{/if}

<style>
	.container {
		margin: 0 auto;
	}

	main {
		margin-top: 45px;
	}

	.header {
		display: flex;
		padding: 0 var(--space-1);
		border-bottom: 1px solid #ced2d9;

		z-index: 10;
		background: var(--white);
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
	}

	.header .header__title {
		font-weight: 800;
		font-size: var(--font-size-3);
		line-height: var(--line-height-1);
		padding-left: var(--space-2);
		text-decoration: none;
		color: var(--black);
	}

	.footer {
		display: flex;
		justify-content: flex-end;
		padding: 0 var(--space-3);
	}

	.footer .footer__text {
		font-size: var(--font-size-1);
		line-height: var(--line-height-1);
		display: flex;
		align-items: center;
		gap: 2px;
	}

	@media (min-width: 575px) {

		main {
			margin-top: unset;
		}

		.header {
			position: unset;
			border-bottom: none;
			padding: var(--space-2) 0;
			background: unset;
		}

		.header .header__title {
			margin: var(--space-3) 0 var(--space-2);
			font-size: var(--font-size-5);
		}

		.footer {
			margin: var(--space-3) 0;
		}
	}

	.preview-toggle {
		backdrop-filter: blur(12px);
		border-radius: 0.25rem;
		bottom: 1rem;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
		color: #1f2937;
		display: block;
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1rem;
		padding-bottom: 0.5rem;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		position: fixed;
		right: 1rem;
		text-align: center;
		text-decoration: none;
		z-index: 50;
	}

	.preview-toggle:hover {
		background-color: #ef4444;
		color: #ffffff;
	}

	.preview-toggle span:first-child {
		display: block;
	}
	.preview-toggle:hover span:first-child {
		display: none;
	}

	.preview-toggle span:last-child {
		display: none;
	}
	.preview-toggle:hover span:last-child {
		display: block;
	}

	/* Typography Preset Classes - Global */
	:global(.h1) {
		font-size: clamp(var(--h1-font-size-mobile), var(--h1-font-size-vw), var(--h1-font-size));
		line-height: var(--h1-line-height);
		letter-spacing: var(--h1-letter-spacing);
		text-transform: var(--h1-text-transform);
	}

	:global(.h2) {
		font-size: clamp(var(--h2-font-size-mobile), var(--h2-font-size-vw), var(--h2-font-size));
		line-height: var(--h2-line-height);
		letter-spacing: var(--h2-letter-spacing);
		text-transform: var(--h2-text-transform);
	}

	:global(.h3) {
		font-size: clamp(var(--h3-font-size-mobile), var(--h3-font-size-vw), var(--h3-font-size));
		line-height: var(--h3-line-height);
		letter-spacing: var(--h3-letter-spacing);
		text-transform: var(--h3-text-transform);
	}

	:global(.h4) {
		font-size: clamp(var(--h4-font-size-mobile), var(--h4-font-size-vw), var(--h4-font-size));
		line-height: var(--h4-line-height);
		letter-spacing: var(--h4-letter-spacing);
		text-transform: var(--h4-text-transform);
	}

	:global(.h5) {
		font-size: clamp(var(--h5-font-size-mobile), var(--h5-font-size-vw), var(--h5-font-size));
		line-height: var(--h5-line-height);
		letter-spacing: var(--h5-letter-spacing);
		text-transform: var(--h5-text-transform);
	}

	:global(.h6) {
		font-size: clamp(var(--h6-font-size-mobile), var(--h6-font-size-vw), var(--h6-font-size));
		line-height: var(--h6-line-height);
		letter-spacing: var(--h6-letter-spacing);
		text-transform: var(--h6-text-transform);
	}

	:global(.paragraph) {
		font-size: clamp(var(--paragraph-font-size-mobile), var(--paragraph-font-size-vw), var(--paragraph-font-size));
		line-height: var(--paragraph-line-height);
		letter-spacing: var(--paragraph-letter-spacing);
		text-transform: var(--paragraph-text-transform);
	}

	:global(.paragraph_2) {
		font-size: clamp(var(--paragraph-2-font-size-mobile), var(--paragraph-2-font-size-vw), var(--paragraph-2-font-size));
		line-height: var(--paragraph-2-line-height);
		letter-spacing: var(--paragraph-2-letter-spacing);
		text-transform: var(--paragraph-2-text-transform);
	}

	:global(.paragraph_3) {
		font-size: clamp(var(--paragraph-3-font-size-mobile), var(--paragraph-3-font-size-vw), var(--paragraph-3-font-size));
		line-height: var(--paragraph-3-line-height);
		letter-spacing: var(--paragraph-3-letter-spacing);
		text-transform: var(--paragraph-3-text-transform);
	}

	:global(.eyebrow) {
		font-size: clamp(var(--eyebrow-font-size-mobile), var(--eyebrow-font-size-vw), var(--eyebrow-font-size));
		line-height: var(--eyebrow-line-height);
		letter-spacing: var(--eyebrow-letter-spacing);
		text-transform: var(--eyebrow-text-transform);
	}

	:global(.eyebrow_2) {
		font-size: clamp(var(--eyebrow-2-font-size-mobile), var(--eyebrow-2-font-size-vw), var(--eyebrow-2-font-size));
		line-height: var(--eyebrow-2-line-height);
		letter-spacing: var(--eyebrow-2-letter-spacing);
		text-transform: var(--eyebrow-2-text-transform);
	}

	/* Mobile-specific overrides for line-height and letter-spacing */
	@media (max-width: 767px) {
		:global(.h1) {
			line-height: var(--h1-line-height-mobile);
			letter-spacing: var(--h1-letter-spacing-mobile);
		}

		:global(.h2) {
			line-height: var(--h2-line-height-mobile);
			letter-spacing: var(--h2-letter-spacing-mobile);
		}

		:global(.h3) {
			line-height: var(--h3-line-height-mobile);
			letter-spacing: var(--h3-letter-spacing-mobile);
		}

		:global(.h4) {
			line-height: var(--h4-line-height-mobile);
			letter-spacing: var(--h4-letter-spacing-mobile);
		}

		:global(.h5) {
			line-height: var(--h5-line-height-mobile);
			letter-spacing: var(--h5-letter-spacing-mobile);
		}

		:global(.h6) {
			line-height: var(--h6-line-height-mobile);
			letter-spacing: var(--h6-letter-spacing-mobile);
		}

		:global(.paragraph) {
			line-height: var(--paragraph-line-height-mobile);
			letter-spacing: var(--paragraph-letter-spacing-mobile);
		}

		:global(.paragraph_2) {
			line-height: var(--paragraph-2-line-height-mobile);
			letter-spacing: var(--paragraph-2-letter-spacing-mobile);
		}

		:global(.paragraph_3) {
			line-height: var(--paragraph-3-line-height-mobile);
			letter-spacing: var(--paragraph-3-letter-spacing-mobile);
		}

		:global(.eyebrow) {
			line-height: var(--eyebrow-line-height-mobile);
			letter-spacing: var(--eyebrow-letter-spacing-mobile);
		}

		:global(.eyebrow_2) {
			line-height: var(--eyebrow-2-line-height-mobile);
			letter-spacing: var(--eyebrow-2-letter-spacing-mobile);
		}
	}
</style>
