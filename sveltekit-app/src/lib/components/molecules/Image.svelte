<script lang="ts">
  import VercelImage from '$lib/components/atoms/VercelImage.svelte'
  import type { ImageBlock } from '$lib/sanity/types'
  import { stegaClean } from '@sanity/client/stega';
  import { urlFor } from '$lib/sanity/image';

  let { sanity_obj }: { sanity_obj: ImageBlock } = $props();
  
  const settings = $derived(stegaClean(sanity_obj));

  // Layout settings (mobile is base, desktop is variant)
  const shareLayoutSettings = $derived(settings?.shareLayoutSettings ?? true);
  const width = $derived(settings?.width ?? 'fit-content');
  const widthDesktop = $derived(shareLayoutSettings ? width : (settings?.width_desktop ?? width));
  const maxWidth = $derived(settings?.maxWidth ?? 'normal');
  const maxWidthDesktop = $derived(shareLayoutSettings ? maxWidth : (settings?.maxWidth_desktop ?? maxWidth));
  const alignment = $derived(settings?.alignment ?? 'left');
  const alignmentDesktop = $derived(shareLayoutSettings ? alignment : (settings?.alignment_desktop ?? alignment));

  // Padding
  const paddingBlockStart = $derived(settings?.paddingBlockStart ?? 0);
  const paddingBlockStartDesktop = $derived(shareLayoutSettings ? paddingBlockStart : (settings?.paddingBlockStart_desktop ?? paddingBlockStart));
  const paddingBlockEnd = $derived(settings?.paddingBlockEnd ?? 0);
  const paddingBlockEndDesktop = $derived(shareLayoutSettings ? paddingBlockEnd : (settings?.paddingBlockEnd_desktop ?? paddingBlockEnd));
  const paddingInlineStart = $derived(settings?.paddingInlineStart ?? 0);
  const paddingInlineStartDesktop = $derived(shareLayoutSettings ? paddingInlineStart : (settings?.paddingInlineStart_desktop ?? paddingInlineStart));
  const paddingInlineEnd = $derived(settings?.paddingInlineEnd ?? 0);
  const paddingInlineEndDesktop = $derived(shareLayoutSettings ? paddingInlineEnd : (settings?.paddingInlineEnd_desktop ?? paddingInlineEnd));

  // Corner radius
  const cornerRadius = $derived(settings?.cornerRadius ?? 0);
  const cornerRadiusDesktop = $derived(shareLayoutSettings ? cornerRadius : (settings?.cornerRadius_desktop ?? cornerRadius));

  // Image URL
  const imageUrl = $derived(settings?.image ? urlFor(settings.image).url() : '');
  const imageAlt = $derived((settings?.image as any)?.alt || '');

  const styleVars = $derived({
    // Layout - Mobile (base)
    '--width-mobile': width,
    '--max-width-mobile': `var(--max-width--body-${maxWidth})`,
    
    // Layout - Desktop
    '--width-desktop': widthDesktop,
    '--max-width-desktop': `var(--max-width--body-${maxWidthDesktop})`,

    // Padding - Mobile
    '--padding-block-start-mobile': `${paddingBlockStart}px`,
    '--padding-block-end-mobile': `${paddingBlockEnd}px`,
    '--padding-inline-start-mobile': `${paddingInlineStart}px`,
    '--padding-inline-end-mobile': `${paddingInlineEnd}px`,

    // Padding - Desktop
    '--padding-block-start-desktop': `${paddingBlockStartDesktop}px`,
    '--padding-block-end-desktop': `${paddingBlockEndDesktop}px`,
    '--padding-inline-start-desktop': `${paddingInlineStartDesktop}px`,
    '--padding-inline-end-desktop': `${paddingInlineEndDesktop}px`,

    // Background color
    ...(settings?.backgroundColor
      ? {'--image-background-color': settings?.backgroundColor?.hex || 'transparent'}
      : {}),

    // Corner radius
    '--image-corner-radius-mobile': `${cornerRadius}px`,
    '--image-corner-radius-desktop': `${cornerRadiusDesktop}px`,
  } as Record<string, string>);

  function styleFromVars(vars: Record<string, string>) {
    return Object.entries(vars)
      .map(([k, v]) => `${k}: ${v}`)
      .join('; ')
  }
</script>

{#if imageUrl}
<div
  class="image-block spacing-style {settings?.backgroundColor ? 'image-block--background' : ''} {settings?.visibility ?? ''} image-block--align-mobile-{alignment} image-block--align-desktop-{alignmentDesktop}"
  style={styleFromVars(styleVars)}
>
  <VercelImage
    src={imageUrl}
    alt={imageAlt}
    loading="lazy"
    aria_hidden={false}
    classes="image-block__img"
  />
</div>
{/if}

<style>
  /* Mobile styles (default) */
  :global(.image-block){
    width: var(--width-mobile);
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding-block-start: var(--padding-block-start-mobile, 0);
    padding-block-end: var(--padding-block-end-mobile, 0);
    padding-inline-start: var(--padding-inline-start-mobile, 0);
    padding-inline-end: var(--padding-inline-end-mobile, 0);
  }
  
  :global(.image-block__img){
    width: var(--width-mobile);
    max-width: var(--max-width-mobile, 100%);
    height: auto;
    display: block;
    border-radius: var(--image-corner-radius-mobile, 0);
  }

  /* Mobile alignment */
  :global(.image-block--align-mobile-center),
  :global(.image-block--align-mobile-center .image-block__img){margin-inline:auto}
  :global(.image-block--align-mobile-right),
  :global(.image-block--align-mobile-right .image-block__img){margin-inline-start:auto}

  /* Background */
  :global(.image-block--background){
    background-color: var(--image-background-color);
  }

  /* Visibility classes */
  :global(.hidden--desktop){display:flex}
  :global(.hidden--mobile){display:none}

  /* Desktop styles */
  @media (min-width: 769px) {
    :global(.image-block){
      width: var(--width-desktop);
      padding-block-start: var(--padding-block-start-desktop, 0);
      padding-block-end: var(--padding-block-end-desktop, 0);
      padding-inline-start: var(--padding-inline-start-desktop, 0);
      padding-inline-end: var(--padding-inline-end-desktop, 0);
    }

    :global(.image-block__img){
      width: var(--width-desktop);
      max-width: var(--max-width-desktop, 100%);
      border-radius: var(--image-corner-radius-desktop, 0);
    }

    /* Desktop alignment */
    :global(.image-block--align-desktop-center),
    :global(.image-block--align-desktop-center .image-block__img){margin-inline:auto}
    :global(.image-block--align-desktop-right),
    :global(.image-block--align-desktop-right .image-block__img){margin-inline-start:auto}
    :global(.image-block--align-desktop-left),
    :global(.image-block--align-desktop-left .image-block__img){margin-inline-start:0}

    /* Visibility classes */
    :global(.hidden--desktop){display:none}
    :global(.hidden--mobile){display:flex}
  }
</style>

