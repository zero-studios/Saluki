<script lang="ts">
  import type { GroupBlock } from '$lib/sanity/types'
  import { molecules_map } from '$lib/components/molecules/molecule_map'
  export let sanity_obj: GroupBlock

  $: settings = sanity_obj
  $: flexDir = sanity_obj?.contentDirection ?? 'column'
  $: mobileColumn = sanity_obj?.verticalOnMobile ? 'mobile-column' : ''
  $: layoutStyle = `--gap: ${sanity_obj?.gap ?? 12}px; --horizontal-alignment: ${
    sanity_obj?.horizontalAlignment ?? sanity_obj?.horizontalAlignmentColumn ?? 'flex-start'
  }; --vertical-alignment: ${sanity_obj?.verticalAlignment ?? sanity_obj?.verticalAlignmentColumn ?? 'center'}; --gap-mobile: ${sanity_obj?.shareLayoutSettings ? (sanity_obj?.gap ?? 12) : (sanity_obj?.gapMobile ?? sanity_obj?.gap ?? 12)}px; --horizontal-alignment-mobile: ${sanity_obj?.shareLayoutSettings ? (sanity_obj?.horizontalAlignment ?? sanity_obj?.horizontalAlignmentColumn ?? 'flex-start') : (sanity_obj?.horizontalAlignmentMobile ?? sanity_obj?.horizontalAlignmentColumnMobile ?? 'flex-start')}; --vertical-alignment-mobile: ${sanity_obj?.shareLayoutSettings ? (sanity_obj?.verticalAlignment ?? sanity_obj?.verticalAlignmentColumn ?? 'center') : (sanity_obj?.verticalAlignmentMobile ?? sanity_obj?.verticalAlignmentColumnMobile ?? 'center')}; --border-radius-mobile: ${sanity_obj?.shareAppearanceSettings ? (sanity_obj?.borderRadius ?? 0) : (sanity_obj?.borderRadiusMobile ?? sanity_obj?.borderRadius ?? 0)}px; --background-media-mobile: ${sanity_obj?.shareAppearanceSettings ? (sanity_obj?.backgroundMedia ?? 'none') : (sanity_obj?.backgroundMediaMobile ?? sanity_obj?.backgroundMedia ?? 'none')}; --padding-block-start-mobile: ${sanity_obj?.sharePaddingSettings ? (sanity_obj?.paddingBlockStart ?? 0) : (sanity_obj?.paddingBlockStartMobile ?? sanity_obj?.paddingBlockStart ?? 0)}px; --padding-block-end-mobile: ${sanity_obj?.sharePaddingSettings ? (sanity_obj?.paddingBlockEnd ?? 0) : (sanity_obj?.paddingBlockEndMobile ?? sanity_obj?.paddingBlockEnd ?? 0)}px; --padding-inline-start-mobile: ${sanity_obj?.sharePaddingSettings ? (sanity_obj?.paddingInlineStart ?? 0) : (sanity_obj?.paddingInlineStartMobile ?? sanity_obj?.paddingInlineStart ?? 0)}px; --padding-inline-end-mobile: ${sanity_obj?.sharePaddingSettings ? (sanity_obj?.paddingInlineEnd ?? 0) : (sanity_obj?.paddingInlineEndMobile ?? sanity_obj?.paddingInlineEnd ?? 0)}px;`

  $: media = sanity_obj?.backgroundMedia ?? 'none'
  $: hasOverlay = !!sanity_obj?.toggleOverlay
</script>

<div class="group-block border-style spacing-style size-style {sanity_obj?.visibility ?? ''}">
  {#if sanity_obj?.link}
    <a href={sanity_obj.link} class="group-block__link" target={sanity_obj.openInNewTab ? '_blank' : undefined} rel={sanity_obj.openInNewTab ? 'noopener' : undefined} aria-label={'Open group link'}></a>
  {/if}

  <div class="group-block__media-wrapper">
    {#if media === 'image' && sanity_obj?.backgroundImage}
      <!-- Implement with your image component as needed -->
    {/if}
    {#if media === 'video' && sanity_obj?.video}
      <!-- Implement with your video component as needed -->
    {/if}
    {#if hasOverlay}
      <!-- Overlay layer placeholder; style using sanity_obj.overlay* vars if desired -->
    {/if}
  </div>

  <div class="group-block-content layout-panel-flex layout-panel-flex--{flexDir} {mobileColumn}" style={layoutStyle}>
    {#each sanity_obj?.blocks || [] as block (block._key)}
      {@const Component = molecules_map[block._type]}
      {#if Component}
        <Component sanity_obj={block} />
      {/if}
    {/each}
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
</div>


