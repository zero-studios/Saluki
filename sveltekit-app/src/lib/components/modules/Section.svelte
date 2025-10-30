<script lang="ts">
  import type { SectionModule } from '$lib/sanity/types'
  import { molecules_map } from '$lib/components/molecules/molecule_map'
  import { stegaClean } from '@sanity/client/stega';
  import { createDataAttribute } from '@sanity/visual-editing'
  import { urlFor } from '$lib/sanity/image';
  
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
      ? {'--section-background-color': settings?.backgroundColor?.hex || 'transparent'}
      : {}),

    // Overlay
    ...(settings?.toggleOverlay && settings?.overlayColor
      ? {'--section-overlay-color': settings?.overlayColor?.hex || 'rgba(0, 0, 0, 0.5)'}
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
      <div class="section-wrapper__background-image section-wrapper__background-image--mobile"></div>
    {/if}
    {#if backgroundMediaDesktop === 'image' && backgroundImageUrlDesktop && !shareContentSettings}
      <div class="section-wrapper__background-image section-wrapper__background-image--desktop"></div>
    {/if}
    {#if backgroundMedia === 'video' && settings?.video}
      <video class="section-wrapper__video section-wrapper__video--mobile" autoplay loop muted playsinline>
        <source src={settings.video.asset?.url} type="video/mp4" />
      </video>
    {/if}
    {#if backgroundMediaDesktop === 'video' && settings?.video_desktop && !shareContentSettings}
      <video class="section-wrapper__video section-wrapper__video--desktop" autoplay loop muted playsinline>
        <source src={settings.video_desktop.asset?.url} type="video/mp4" />
      </video>
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
    background-size: var(--background-image-position-mobile);
    background-position: center;
    background-repeat: no-repeat;
  }

  :global(.section-wrapper__background-image--mobile) {
    background-image: var(--background-image-mobile);
    display: block;
  }

  :global(.section-wrapper__background-image--desktop) {
    background-image: var(--background-image-desktop);
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
    }

    :global(.section-wrapper__background-image) {
      background-size: var(--background-image-position-desktop);
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


