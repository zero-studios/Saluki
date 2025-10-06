<script lang="ts">
   import type { SectionModule, GroupBlock, TextBlock } from "$lib/sanity/types";
   export let sanity_obj: SectionModule
  import { molecules_map } from "../molecules/molecule_map";

  console.log(sanity_obj)
  $: dir = sanity_obj?.contentDirection ?? 'column'
  $: layoutStyle = `--gap: ${sanity_obj?.gap ?? 12}px; --horizontal-alignment: ${
    sanity_obj?.horizontalAlignment ?? sanity_obj?.horizontalAlignmentColumn ?? 'flex-start'
  }; --vertical-alignment: ${sanity_obj?.verticalAlignment ?? sanity_obj?.verticalAlignmentColumn ?? 'center'};`;
  $: paddingStyle = `--padding-block-start: ${sanity_obj?.paddingBlockStart ?? 0}px; --padding-block-end: ${sanity_obj?.paddingBlockEnd ?? 0}px; --gap-mobile: ${sanity_obj?.shareLayoutSettings ? (sanity_obj?.gap ?? 12) : (sanity_obj?.gapMobile ?? sanity_obj?.gap ?? 12)}px; --horizontal-alignment-mobile: ${sanity_obj?.shareLayoutSettings ? (sanity_obj?.horizontalAlignment ?? sanity_obj?.horizontalAlignmentColumn ?? 'flex-start') : (sanity_obj?.horizontalAlignmentMobile ?? sanity_obj?.horizontalAlignmentColumnMobile ?? 'flex-start')}; --vertical-alignment-mobile: ${sanity_obj?.shareLayoutSettings ? (sanity_obj?.verticalAlignment ?? sanity_obj?.verticalAlignmentColumn ?? 'center') : (sanity_obj?.verticalAlignmentMobile ?? sanity_obj?.verticalAlignmentColumnMobile ?? 'center')}; --padding-block-start-mobile: ${sanity_obj?.sharePaddingSettings ? (sanity_obj?.paddingBlockStart ?? 0) : (sanity_obj?.paddingBlockStartMobile ?? sanity_obj?.paddingBlockStart ?? 0)}px; --padding-block-end-mobile: ${sanity_obj?.sharePaddingSettings ? (sanity_obj?.paddingBlockEnd ?? 0) : (sanity_obj?.paddingBlockEndMobile ?? sanity_obj?.paddingBlockEnd ?? 0)}px; --border-radius-mobile: ${sanity_obj?.borderRadiusMobile ?? sanity_obj?.borderRadius ?? 0}px; --background-media-mobile: ${sanity_obj?.backgroundMediaMobile ?? sanity_obj?.backgroundMedia ?? 'none'};`;
  $: widthClass = sanity_obj?.sectionWidth === 'full-width' ? 'full-width' : 'page-width'
</script>

<section class="section-wrapper {widthClass}" style={`${layoutStyle} ${paddingStyle}`}>
  <div class="section-content layout-panel-flex layout-panel-flex--{dir}">
     {#each sanity_obj?.blocks as block (block._key)}
       {@const Component = molecules_map[block._type]}
       {#if Component}
         <Component sanity_obj={block}></Component>
       {/if}
    {/each}
  </div>
  <style>
    :global(.section-wrapper){ position:relative; display:block; padding-block-start: var(--padding-block-start, 0); padding-block-end: var(--padding-block-end, 0); }
    :global(.section-content){ display:flex; gap: var(--gap, 12px); align-items: var(--vertical-alignment); justify-content: var(--horizontal-alignment); }
    @media (max-width: 768px){
      :global(.section-content){ gap: var(--gap-mobile, var(--gap, 12px)); align-items: var(--vertical-alignment-mobile, var(--vertical-alignment)); justify-content: var(--horizontal-alignment-mobile, var(--horizontal-alignment)); }
      :global(.section-wrapper){ padding-block-start: var(--padding-block-start-mobile, var(--padding-block-start, 0)); padding-block-end: var(--padding-block-end-mobile, var(--padding-block-end, 0)); border-radius: var(--border-radius-mobile, var(--border-radius, 0)); }
      /* Background media mobile handling would go here - implement based on --background-media-mobile value */
    }
    :global(.layout-panel-flex--row){ flex-direction: row; }
    :global(.layout-panel-flex--column){ flex-direction: column; }
    :global(.page-width){ max-width: var(--page-max-width, 1200px); margin-inline:auto; padding-inline: var(--page-inline, 16px); }
    :global(.full-width){ width: 100%; }
  </style>
</section>


