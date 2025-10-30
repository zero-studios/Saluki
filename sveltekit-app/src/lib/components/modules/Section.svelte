<script lang="ts">
  import type { SectionModule } from '$lib/sanity/types'
  import { molecules_map } from '$lib/components/molecules/molecule_map'
  import { stegaClean } from '@sanity/client/stega';
  import { createDataAttribute } from '@sanity/visual-editing'
  import { urlFor } from '$lib/sanity/image';
  import VercelImage from '$lib/components/atoms/VercelImage.svelte';
  import Video from '$lib/components/atoms/Video.svelte';
  
  let { sanity_obj }: { sanity_obj: SectionModule } = $props();

  const attr = createDataAttribute({
    id: sanity_obj._id,
    type: sanity_obj._type,
    path: "sections"
  })

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
  
  // Section Width
  const sectionWidth = $derived(settings?.sectionWidth ?? 'page-width');
  
  // Section Height
  const height = $derived(settings?.height ?? 'auto');
  const heightDesktop = $derived(shareContentSettings ? height : (settings?.height_desktop ?? height));
  
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

  // Helper function to get height value
  function getHeightValue(heightValue: string) {
    switch (heightValue) {
      case 'fullscreen':
        return '100vh';
      case 'square':
        return 'auto'; // Will use aspect-ratio
      case 'landscape':
        return 'auto'; // Will use aspect-ratio
      case 'portrait':
        return 'auto'; // Will use aspect-ratio
      default:
        return 'auto';
    }
  }

  function getAspectRatio(heightValue: string) {
    switch (heightValue) {
      case 'square':
        return '1 / 1';
      case 'landscape':
        return '16 / 9';
      case 'portrait':
        return '9 / 16';
      default:
        return 'auto';
    }
  }

  const styleVars = $derived({
    // Content settings - Mobile
    '--content-direction-mobile': contentDirection,
    '--content-alignment-mobile': contentAlignment,
    '--content-alignment-cross-axis-mobile': contentAlignmentCrossAxis,
    '--gap-mobile': `${gap}px`,
    
    // Content settings - Desktop
    '--content-direction-desktop': contentDirectionDesktop,
    '--content-alignment-desktop': contentAlignmentDesktop,
    '--content-alignment-cross-axis-desktop': contentAlignmentCrossAxisDesktop,
    '--gap-desktop': `${gapDesktop}px`,

    // Height - Mobile
    '--section-height-mobile': getHeightValue(height),
    '--section-aspect-ratio-mobile': getAspectRatio(height),

    // Height - Desktop
    '--section-height-desktop': getHeightValue(heightDesktop),
    '--section-aspect-ratio-desktop': getAspectRatio(heightDesktop),

    // Background Media - Mobile
    '--background-image-position-mobile': backgroundImagePosition === 'cover' ? 'cover' : 'contain',
    '--video-object-fit-mobile': videoPosition,

    // Background Media - Desktop
    '--background-image-position-desktop': backgroundImagePositionDesktop === 'cover' ? 'cover' : 'contain',
    '--video-object-fit-desktop': videoPositionDesktop,

    // Background color
    ...(settings?.backgroundColor
      ? {'--section-background-color': settings?.backgroundColor?.hex || 'transparent'}
      : {}),

    // Overlay
    ...(settings?.toggleOverlay && settings?.overlayColor
      ? {
          '--section-overlay-color': settings?.overlayColor?.rgb?.a !== undefined
            ? `rgba(${settings.overlayColor.rgb.r}, ${settings.overlayColor.rgb.g}, ${settings.overlayColor.rgb.b}, ${settings.overlayColor.rgb.a})`
            : (settings?.overlayColor?.hex || 'rgba(0, 0, 0, 0.5)')
        }
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
    '--section-corner-radius-mobile': `${cornerRadius}px`,
    '--section-corner-radius-desktop': `${cornerRadiusDesktop}px`,
  } as Record<string, string>);

  function styleFromVars(vars: Record<string, string>) {
    return Object.entries(vars)
      .map(([k, v]) => `${k}: ${v}`)
      .join('; ')
  }
</script>

<section 
  class="section-wrapper {sectionWidth} {settings?.backgroundColor ? 'section-wrapper--background' : ''}"
  style={styleFromVars(styleVars)}
  data-sanity={attr().toString()}
>
  <div class="section-wrapper__media-wrapper">
    {#if backgroundMedia === 'image' && backgroundImageUrl}
      <VercelImage 
        src={backgroundImageUrl}
        alt=""
        loading="eager"
        aria_hidden={true}
        classes="section-wrapper__background-image section-wrapper__background-image--mobile"
      />
    {/if}
    {#if backgroundMediaDesktop === 'image' && backgroundImageUrlDesktop && !shareContentSettings}
      <VercelImage 
        src={backgroundImageUrlDesktop}
        alt=""
        loading="eager"
        aria_hidden={true}
        classes="section-wrapper__background-image section-wrapper__background-image--desktop"
      />
    {/if}
    {#if backgroundMedia === 'video' && settings?.video}
      <Video 
        video={{ url: settings.video.asset?.url || '' }}
        classes="section-wrapper__video section-wrapper__video--mobile"
      />
    {/if}
    {#if backgroundMediaDesktop === 'video' && settings?.video_desktop && !shareContentSettings}
      <Video 
        video={{ url: settings.video_desktop.asset?.url || '' }}
        classes="section-wrapper__video section-wrapper__video--desktop"
      />
    {/if}
    {#if settings?.toggleOverlay}
      <div class="section-wrapper__overlay"></div>
    {/if}
  </div>

  <div class="section-content">
    {#each sanity_obj.blocks || [] as block (block._key)}
      {@const Component = molecules_map[block._type]}
      {#if Component}
        <Component sanity_obj={block} />
      {/if}
    {/each}
  </div>
</section>

<style>
  /* Mobile styles (default) */
  :global(.section-wrapper) {
    position: relative;
    display: block;
    padding-block-start: var(--padding-block-start-mobile, 0);
    padding-block-end: var(--padding-block-end-mobile, 0);
    padding-inline-start: var(--padding-inline-start-mobile, 0);
    padding-inline-end: var(--padding-inline-end-mobile, 0);
    border-radius: var(--section-corner-radius-mobile, 0);
    overflow: hidden;
    height: var(--section-height-mobile, auto);
    aspect-ratio: var(--section-aspect-ratio-mobile, auto);
  }

  :global(.section-wrapper--background) {
    background-color: var(--section-background-color);
  }

  :global(.section-wrapper__media-wrapper) {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  :global(.section-wrapper__background-image) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: var(--background-image-position-mobile);
    object-position: center;
  }

  :global(.section-wrapper__background-image--mobile) {
    display: block;
  }

  :global(.section-wrapper__background-image--desktop) {
    display: none;
  }

  :global(.section-wrapper__video) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: var(--video-object-fit-mobile);
  }

  :global(.section-wrapper__video--mobile) {
    display: block;
  }

  :global(.section-wrapper__video--desktop) {
    display: none;
  }

  :global(.section-wrapper__overlay) {
    position: absolute;
    inset: 0;
    background-color: var(--section-overlay-color);
    z-index: 1;
  }

  :global(.section-content) {
    position: relative;
    z-index: 2;
    display: flex;
    height: 100%;
    flex-direction: var(--content-direction-mobile);
    justify-content: var(--content-alignment-mobile);
    align-items: var(--content-alignment-cross-axis-mobile);
    gap: var(--gap-mobile);
  }

  :global(.page-width) {
    max-width: var(--page-max-width, 1200px);
    margin-inline: auto;
  }

  :global(.full-width) {
    width: 100%;
  }

  /* Desktop styles */
  @media (min-width: 769px) {
    :global(.section-wrapper) {
      padding-block-start: var(--padding-block-start-desktop, 0);
      padding-block-end: var(--padding-block-end-desktop, 0);
      padding-inline-start: var(--padding-inline-start-desktop, 0);
      padding-inline-end: var(--padding-inline-end-desktop, 0);
      border-radius: var(--section-corner-radius-desktop, 0);
      height: var(--section-height-desktop, auto);
      aspect-ratio: var(--section-aspect-ratio-desktop, auto);
    }

    :global(.section-wrapper__background-image) {
      object-fit: var(--background-image-position-desktop);
    }

    :global(.section-wrapper__background-image--mobile) {
      display: none;
    }

    :global(.section-wrapper__background-image--desktop) {
      display: block;
    }

    :global(.section-wrapper__video) {
      object-fit: var(--video-object-fit-desktop);
    }

    :global(.section-wrapper__video--mobile) {
      display: none;
    }

    :global(.section-wrapper__video--desktop) {
      display: block;
    }

    :global(.section-content) {
      flex-direction: var(--content-direction-desktop);
      justify-content: var(--content-alignment-desktop);
      align-items: var(--content-alignment-cross-axis-desktop);
      gap: var(--gap-desktop);
    }
  }
</style>


