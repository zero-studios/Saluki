<script lang="ts">
  import type { GroupBlock } from '$lib/sanity/types'
  import { molecules_map } from '$lib/components/molecules/molecule_map'
  import { stegaClean } from '@sanity/client/stega';
  import { urlFor } from '$lib/sanity/image';
  
  let { sanity_obj }: { sanity_obj: GroupBlock } = $props();

  const settings = $derived(stegaClean(sanity_obj));

  // Content settings (mobile is base, desktop is variant)
  const shareContentSettings = $derived(settings?.shareContentSettings ?? true);
  
  // Content Direction
  const contentDirection = $derived(settings?.contentDirection ?? 'column');
  const contentDirectionDesktop = $derived(shareContentSettings ? contentDirection : (settings?.contentDirection_desktop ?? contentDirection));
  
  // Content Alignment
  const contentAlignment = $derived(settings?.contentAlignment ?? 'flex-start');
  const contentAlignmentDesktop = $derived(shareContentSettings ? contentAlignment : (settings?.contentAlignment_desktop ?? contentAlignment));
  
  // Cross-axis Alignment
  const contentAlignmentCrossAxis = $derived(settings?.contentAlignmentCrossAxis ?? 'center');
  const contentAlignmentCrossAxisDesktop = $derived(shareContentSettings ? contentAlignmentCrossAxis : (settings?.contentAlignmentCrossAxis_desktop ?? contentAlignmentCrossAxis));
  
  // Gap
  const gap = $derived(settings?.gap ?? 12);
  const gapDesktop = $derived(shareContentSettings ? gap : (settings?.gap_desktop ?? gap));
  
  // Background Media
  const backgroundMedia = $derived(settings?.backgroundMedia ?? 'none');
  const backgroundMediaDesktop = $derived(shareContentSettings ? backgroundMedia : (settings?.backgroundMedia_desktop ?? backgroundMedia));
  
  // Background Images URLs
  const backgroundImageUrl = $derived(
    settings?.backgroundImage ? urlFor(settings.backgroundImage).url() : ''
  );
  const backgroundImageUrlDesktop = $derived(
    shareContentSettings 
      ? backgroundImageUrl 
      : (settings?.backgroundImage_desktop ? urlFor(settings.backgroundImage_desktop).url() : backgroundImageUrl)
  );
  
  const backgroundImagePosition = $derived(settings?.backgroundImagePosition ?? 'cover');
  const backgroundImagePositionDesktop = $derived(shareContentSettings ? backgroundImagePosition : (settings?.backgroundImagePosition_desktop ?? backgroundImagePosition));
  
  // Video Position
  const videoPosition = $derived(settings?.videoPosition ?? 'cover');
  const videoPositionDesktop = $derived(shareContentSettings ? videoPosition : (settings?.videoPosition_desktop ?? videoPosition));

  // Layout settings (mobile is base, desktop is variant)
  const shareLayoutSettings = $derived(settings?.shareLayoutSettings ?? true);
  
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

  // Width (from sharedStyleFields)
  const width = $derived(settings?.width ?? 'fit-content');
  const widthDesktop = $derived(shareLayoutSettings ? width : (settings?.width_desktop ?? width));
  const customWidth = $derived(settings?.custom_width ?? 50);
  const customWidthDesktop = $derived(shareLayoutSettings ? customWidth : (settings?.custom_width_desktop ?? customWidth));

  const styleVars = $derived({
    // Content settings - Mobile
    '--content-direction-mobile': contentDirection,
    '--content-alignment-mobile': contentAlignment,
    '--content-alignment-cross-axis-mobile': contentAlignmentCrossAxis,
    '--gap-mobile': `${gap}px`,
    '--width-mobile': width === 'custom' ? `${customWidth}%` : (width === '100%' || (width as string) === 'fill') ? '100%' : 'fit-content',
    
    // Content settings - Desktop
    '--content-direction-desktop': contentDirectionDesktop,
    '--content-alignment-desktop': contentAlignmentDesktop,
    '--content-alignment-cross-axis-desktop': contentAlignmentCrossAxisDesktop,
    '--gap-desktop': `${gapDesktop}px`,
    '--width-desktop': widthDesktop === 'custom' ? `${customWidthDesktop}%` : (widthDesktop === '100%' || (widthDesktop as string) === 'fill') ? '100%' : 'fit-content',

    // Background Media - Mobile
    '--background-image-mobile': backgroundMedia === 'image' && backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
    '--background-image-position-mobile': backgroundImagePosition === 'cover' ? 'cover' : 'contain',
    '--video-object-fit-mobile': videoPosition,

    // Background Media - Desktop
    '--background-image-desktop': backgroundMediaDesktop === 'image' && backgroundImageUrlDesktop ? `url(${backgroundImageUrlDesktop})` : 'none',
    '--background-image-position-desktop': backgroundImagePositionDesktop === 'cover' ? 'cover' : 'contain',
    '--video-object-fit-desktop': videoPositionDesktop,

    // Background color
    ...(settings?.backgroundColor
      ? {'--group-background-color': settings?.backgroundColor?.hex || 'transparent'}
      : {}),

    // Overlay
    ...(settings?.toggleOverlay && settings?.overlayColor
      ? {'--group-overlay-color': settings?.overlayColor?.hex || 'rgba(0, 0, 0, 0.5)'}
      : {}),

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

    // Corner radius
    '--group-corner-radius-mobile': `${cornerRadius}px`,
    '--group-corner-radius-desktop': `${cornerRadiusDesktop}px`,
  } as Record<string, string>);

  function styleFromVars(vars: Record<string, string>) {
    return Object.entries(vars)
      .map(([k, v]) => `${k}: ${v}`)
      .join('; ')
  }
</script>

<div 
  class="group-block {settings?.backgroundColor ? 'group-block--background' : ''} {settings?.visibility ?? ''}"
  style={styleFromVars(styleVars)}
>
  {#if settings?.link}
    <a 
      href={settings.link} 
      class="group-block__link" 
      target={settings.openInNewTab ? '_blank' : undefined} 
      rel={settings.openInNewTab ? 'noopener noreferrer' : undefined} 
      aria-label={settings?.title || 'Open group link'}
    ></a>
  {/if}

  <div class="group-block__media-wrapper">
    {#if backgroundMedia === 'image' && backgroundImageUrl}
      <div class="group-block__background-image group-block__background-image--mobile"></div>
    {/if}
    {#if backgroundMediaDesktop === 'image' && backgroundImageUrlDesktop && !shareContentSettings}
      <div class="group-block__background-image group-block__background-image--desktop"></div>
    {/if}
    {#if backgroundMedia === 'video' && settings?.video}
      <video class="group-block__video group-block__video--mobile" autoplay loop muted playsinline>
        <source src={settings.video.asset?.url} type="video/mp4" />
      </video>
    {/if}
    {#if backgroundMediaDesktop === 'video' && settings?.video_desktop && !shareContentSettings}
      <video class="group-block__video group-block__video--desktop" autoplay loop muted playsinline>
        <source src={settings.video_desktop.asset?.url} type="video/mp4" />
      </video>
    {/if}
    {#if settings?.toggleOverlay}
      <div class="group-block__overlay"></div>
    {/if}
  </div>

  <div class="group-block__content">
    {#each sanity_obj.blocks || [] as block (block._key)}
      {@const Component = molecules_map[block._type]}
      {#if Component}
        <Component sanity_obj={block} />
      {/if}
    {/each}
  </div>
</div>

<style>
  /* Mobile styles (default) */
  :global(.group-block) {
    position: relative;
    display: block;
    width: var(--width-mobile);
    padding-block-start: var(--padding-block-start-mobile, 0);
    padding-block-end: var(--padding-block-end-mobile, 0);
    padding-inline-start: var(--padding-inline-start-mobile, 0);
    padding-inline-end: var(--padding-inline-end-mobile, 0);
    border-radius: var(--group-corner-radius-mobile, 0);
    overflow: hidden;
  }

  :global(.group-block--background) {
    background-color: var(--group-background-color);
  }

  :global(.group-block__link) {
    position: absolute;
    inset: 0;
    z-index: 10;
  }

  :global(.group-block__media-wrapper) {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  :global(.group-block__background-image) {
    position: absolute;
    inset: 0;
    background-size: var(--background-image-position-mobile);
    background-position: center;
    background-repeat: no-repeat;
  }

  :global(.group-block__background-image--mobile) {
    background-image: var(--background-image-mobile);
    display: block;
  }

  :global(.group-block__background-image--desktop) {
    background-image: var(--background-image-desktop);
    display: none;
  }

  :global(.group-block__video) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: var(--video-object-fit-mobile);
  }

  :global(.group-block__video--mobile) {
    display: block;
  }

  :global(.group-block__video--desktop) {
    display: none;
  }

  :global(.group-block__overlay) {
    position: absolute;
    inset: 0;
    background-color: var(--group-overlay-color);
    z-index: 1;
  }

  :global(.group-block__content) {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: var(--content-direction-mobile);
    justify-content: var(--content-alignment-mobile);
    align-items: var(--content-alignment-cross-axis-mobile);
    gap: var(--gap-mobile);
  }

  /* Visibility classes */
  :global(.hidden--desktop) {
    display: block;
  }
  :global(.hidden--mobile) {
    display: none;
  }

  /* Desktop styles */
  @media (min-width: 769px) {
    :global(.group-block) {
      width: var(--width-desktop);
      padding-block-start: var(--padding-block-start-desktop, 0);
      padding-block-end: var(--padding-block-end-desktop, 0);
      padding-inline-start: var(--padding-inline-start-desktop, 0);
      padding-inline-end: var(--padding-inline-end-desktop, 0);
      border-radius: var(--group-corner-radius-desktop, 0);
    }

    :global(.group-block__background-image) {
      background-size: var(--background-image-position-desktop);
    }

    :global(.group-block__background-image--mobile) {
      display: none;
    }

    :global(.group-block__background-image--desktop) {
      display: block;
    }

    :global(.group-block__video) {
      object-fit: var(--video-object-fit-desktop);
    }

    :global(.group-block__video--mobile) {
      display: none;
    }

    :global(.group-block__video--desktop) {
      display: block;
    }

    :global(.group-block__content) {
      flex-direction: var(--content-direction-desktop);
      justify-content: var(--content-alignment-desktop);
      align-items: var(--content-alignment-cross-axis-desktop);
      gap: var(--gap-desktop);
    }

    /* Visibility classes */
    :global(.hidden--desktop) {
      display: none;
    }
    :global(.hidden--mobile) {
      display: block;
    }
  }
</style>
