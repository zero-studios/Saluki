<script lang="ts">
  import type { GroupBlock } from '$lib/sanity/types'
  import { molecules_map } from '$lib/components/molecules/molecule_map'
  
  let { sanity_obj }: { sanity_obj: GroupBlock } = $props();

  const settings = $derived(sanity_obj);
  const flexDir = $derived(settings?.contentDirection ?? 'column');
  const mobileColumn = $derived(settings?.verticalOnMobile ? 'mobile-column' : '');
  const layoutStyle = $derived(`--gap: ${settings?.gap ?? 12}px; --horizontal-alignment: ${
    settings?.horizontalAlignment ?? settings?.horizontalAlignmentColumn ?? 'flex-start'
  }; --vertical-alignment: ${settings?.verticalAlignment ?? settings?.verticalAlignmentColumn ?? 'center'}; --gap-mobile: ${settings?.shareLayoutSettings ? (settings?.gap ?? 12) : (settings?.gapMobile ?? settings?.gap ?? 12)}px; --horizontal-alignment-mobile: ${settings?.shareLayoutSettings ? (settings?.horizontalAlignment ?? settings?.horizontalAlignmentColumn ?? 'flex-start') : (settings?.horizontalAlignmentMobile ?? settings?.horizontalAlignmentColumnMobile ?? 'flex-start')}; --vertical-alignment-mobile: ${settings?.shareLayoutSettings ? (settings?.verticalAlignment ?? settings?.verticalAlignmentColumn ?? 'center') : (settings?.verticalAlignmentMobile ?? settings?.verticalAlignmentColumnMobile ?? 'center')}; --border-radius-mobile: ${settings?.shareAppearanceSettings ? (settings?.borderRadius ?? 0) : (settings?.borderRadiusMobile ?? settings?.borderRadius ?? 0)}px; --background-media-mobile: ${settings?.shareAppearanceSettings ? (settings?.backgroundMedia ?? 'none') : (settings?.backgroundMediaMobile ?? settings?.backgroundMedia ?? 'none')}; --padding-block-start-mobile: ${settings?.sharePaddingSettings ? (settings?.paddingBlockStart ?? 0) : (settings?.paddingBlockStartMobile ?? settings?.paddingBlockStart ?? 0)}px; --padding-block-end-mobile: ${settings?.sharePaddingSettings ? (settings?.paddingBlockEnd ?? 0) : (settings?.paddingBlockEndMobile ?? settings?.paddingBlockEnd ?? 0)}px; --padding-inline-start-mobile: ${settings?.sharePaddingSettings ? (settings?.paddingInlineStart ?? 0) : (settings?.paddingInlineStartMobile ?? settings?.paddingInlineStart ?? 0)}px; --padding-inline-end-mobile: ${settings?.sharePaddingSettings ? (settings?.paddingInlineEnd ?? 0) : (settings?.paddingInlineEndMobile ?? settings?.paddingInlineEnd ?? 0)}px;`);

  const media = $derived(settings?.backgroundMedia ?? 'none');
  const hasOverlay = $derived(!!settings?.toggleOverlay);
</script>

<div class="group-block border-style spacing-style size-style {settings?.visibility ?? ''}">
  {#if settings?.link}
    <a href={settings.link} class="group-block__link" target={settings.openInNewTab ? '_blank' : undefined} rel={settings.openInNewTab ? 'noopener' : undefined} aria-label={'Open group link'}></a>
  {/if}

  <div class="group-block__media-wrapper">
    {#if media === 'image' && settings?.backgroundImage}
      <!-- Implement with your image component as needed -->
    {/if}
    {#if media === 'video' && settings?.video}
      <!-- Implement with your video component as needed -->
    {/if}
    {#if hasOverlay}
      <!-- Overlay layer placeholder; style using settings.overlay* vars if desired -->
    {/if}
  </div>

  <div class="group-block-content layout-panel-flex layout-panel-flex--{flexDir} {mobileColumn}" style={layoutStyle}>
    {#each settings?.blocks || [] as block (block._key)}
      {@const Component = molecules_map[block._type]}
      {#if Component}
        <Component sanity_obj={block} />
      {/if}
    {/each}
  </div>
</div>
<style>
  :global(.group-block){ position: relative; display:block; }
  :global(.group-block__link){ position:absolute; inset:0; }
  :global(.group-block__media-wrapper){ position:absolute; inset:0; z-index:0; }
  :global(.group-block-content){ position:relative; z-index:1; display:flex; gap: var(--gap, 12px); align-items: var(--vertical-alignment); justify-content: var(--horizontal-alignment); }
  :global(.layout-panel-flex--row){ flex-direction: row; }
  :global(.layout-panel-flex--column){ flex-direction: column; }
  @media (max-width: 768px){
    :global(.group-block-content){ gap: var(--gap-mobile, var(--gap, 12px)); align-items: var(--vertical-alignment-mobile, var(--vertical-alignment)); justify-content: var(--horizontal-alignment-mobile, var(--horizontal-alignment)); }
    :global(.group-block){ border-radius: var(--border-radius-mobile, var(--border-radius, 0)); padding-block-start: var(--padding-block-start-mobile, var(--padding-block-start, 0)); padding-block-end: var(--padding-block-end-mobile, var(--padding-block-end, 0)); padding-inline-start: var(--padding-inline-start-mobile, var(--padding-inline-start, 0)); padding-inline-end: var(--padding-inline-end-mobile, var(--padding-inline-end, 0)); }
    /* Background media mobile handling would go here - implement based on --background-media-mobile value */
  }
</style>


