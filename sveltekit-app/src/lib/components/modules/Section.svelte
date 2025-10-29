<script lang="ts">
  import { stegaClean } from "@sanity/client/stega";
  import { createDataAttribute } from "@sanity/visual-editing"

  import type { SectionModule, GroupBlock, TextBlock } from "$lib/sanity/types";
  import { molecules_map } from "../molecules/molecule_map";

   let { sanity_obj }: { sanity_obj: SectionModule } = $props();

   const attr = createDataAttribute({
    id: sanity_obj._id,
    type: sanity_obj._type,
    path: "sections"
   })
   // Get values from Sanity and ensure stega encoding is cleaned up in any fields that are used for styling:

   const dir = $derived(stegaClean(sanity_obj && sanity_obj.contentDirection) ?? 'column');
   const layoutStyle = $derived(
     `--gap: ${stegaClean(sanity_obj && sanity_obj.gap) ?? 12}px; --horizontal-alignment: ${
       stegaClean(sanity_obj && sanity_obj.horizontalAlignment) ?? stegaClean(sanity_obj && sanity_obj.horizontalAlignmentColumn) ?? 'flex-start'
     }; --vertical-alignment: ${
       stegaClean(sanity_obj && sanity_obj.verticalAlignment) ?? stegaClean(sanity_obj && sanity_obj.verticalAlignmentColumn) ?? 'center'
     };`
   );
   const paddingStyle = $derived(
     `--padding-block-start: ${stegaClean(sanity_obj && sanity_obj.paddingBlockStart) ?? 0}px; --padding-block-end: ${stegaClean(sanity_obj && sanity_obj.paddingBlockEnd) ?? 0}px;` +
     ` --gap-mobile: ${
       (stegaClean(sanity_obj && sanity_obj.shareLayoutSettings))
         ? (stegaClean(sanity_obj && sanity_obj.gap) ?? 12)
         : (stegaClean(sanity_obj && sanity_obj.gapMobile) ?? stegaClean(sanity_obj && sanity_obj.gap) ?? 12)
     }px;` +
     ` --horizontal-alignment-mobile: ${
       (stegaClean(sanity_obj && sanity_obj.shareLayoutSettings))
         ? (stegaClean(sanity_obj && sanity_obj.horizontalAlignment) ?? stegaClean(sanity_obj && sanity_obj.horizontalAlignmentColumn) ?? 'flex-start')
         : (stegaClean(sanity_obj && sanity_obj.horizontalAlignmentMobile) ?? stegaClean(sanity_obj && sanity_obj.horizontalAlignmentColumnMobile) ?? 'flex-start')
     };` +
     ` --vertical-alignment-mobile: ${
       (stegaClean(sanity_obj && sanity_obj.shareLayoutSettings))
         ? (stegaClean(sanity_obj && sanity_obj.verticalAlignment) ?? stegaClean(sanity_obj && sanity_obj.verticalAlignmentColumn) ?? 'center')
         : (stegaClean(sanity_obj && sanity_obj.verticalAlignmentMobile) ?? stegaClean(sanity_obj && sanity_obj.verticalAlignmentColumnMobile) ?? 'center')
     };` +
     ` --padding-block-start-mobile: ${
       (stegaClean(sanity_obj && sanity_obj.sharePaddingSettings))
         ? (stegaClean(sanity_obj && sanity_obj.paddingBlockStart) ?? 0)
         : (stegaClean(sanity_obj && sanity_obj.paddingBlockStartMobile) ?? stegaClean(sanity_obj && sanity_obj.paddingBlockStart) ?? 0)
     }px;` +
     ` --padding-block-end-mobile: ${
       (stegaClean(sanity_obj && sanity_obj.sharePaddingSettings))
         ? (stegaClean(sanity_obj && sanity_obj.paddingBlockEnd) ?? 0)
         : (stegaClean(sanity_obj && sanity_obj.paddingBlockEndMobile) ?? stegaClean(sanity_obj && sanity_obj.paddingBlockEnd) ?? 0)
     }px;` +
     ` --border-radius-mobile: ${
       stegaClean(sanity_obj && sanity_obj.borderRadiusMobile) ?? stegaClean(sanity_obj && sanity_obj.borderRadius) ?? 0
     }px;` +
     ` --background-media-mobile: ${
       stegaClean(sanity_obj && sanity_obj.backgroundMediaMobile) ?? stegaClean(sanity_obj && sanity_obj.backgroundMedia) ?? 'none'
     };`
   );
   const widthClass = $derived(
     stegaClean(sanity_obj && sanity_obj.sectionWidth) === 'full-width' ? 'full-width' : 'page-width'
   );

</script>

<section class="section-wrapper {widthClass}" style={`${layoutStyle} ${paddingStyle}`} data-sanity={attr().toString()}>
  <div class="section-content layout-panel-flex layout-panel-flex--{dir}">
     {#each sanity_obj?.blocks as block (block._key)}
       {@const Component = molecules_map[block._type]}
       {#if Component}
         <Component sanity_obj={block}></Component>
       {/if}
    {/each}
  </div>
</section>
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


