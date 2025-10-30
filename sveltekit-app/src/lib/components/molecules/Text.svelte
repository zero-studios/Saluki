<script lang="ts">
  import {PortableText} from '@portabletext/svelte'
  import type { TextBlock } from '$lib/sanity/types'
	import { stegaClean } from '@sanity/client/stega';

  let { sanity_obj }: { sanity_obj: TextBlock } = $props();
  
  const value = $derived(sanity_obj?.text || []);
  const settings = $derived(stegaClean(sanity_obj));

  // Layout settings (mobile is base, desktop is variant)
  const shareLayoutSettings = $derived(settings?.shareLayoutSettings ?? true);
  const width = $derived(settings?.width ?? 'fit-content');
  const widthDesktop = $derived(shareLayoutSettings ? width : (settings?.width_desktop ?? width));
  
  // Custom width handling
  const customWidth = $derived(settings?.custom_width);
  const customWidthDesktop = $derived(shareLayoutSettings ? customWidth : (settings?.custom_width_desktop ?? customWidth));
  const finalWidth = $derived(width === 'custom' && customWidth !== undefined ? `${customWidth}%` : width);
  const finalWidthDesktop = $derived(widthDesktop === 'custom' && customWidthDesktop !== undefined ? `${customWidthDesktop}%` : widthDesktop);
  
  const maxWidth = $derived(settings?.maxWidth ?? 'normal');
  const maxWidthDesktop = $derived(shareLayoutSettings ? maxWidth : (settings?.maxWidth_desktop ?? maxWidth));
  const alignment = $derived(settings?.alignment ?? 'left');
  const alignmentDesktop = $derived(shareLayoutSettings ? alignment : (settings?.alignment_desktop ?? alignment));
  
  // Typography settings
  const typePreset = $derived(settings?.typePreset ?? 'rte');
  const isRte = $derived(typePreset === 'rte' || typePreset === 'paragraph');

  // Custom typography
  const font = $derived(settings?.font);
  const fontSize = $derived(settings?.fontSize);
  const fontSizeMobile = $derived(settings?.fontSizeMobile);
  const lineHeight = $derived(settings?.lineHeight);
  const letterSpacing = $derived(settings?.letterSpacing);
  const textTransform = $derived(settings?.textTransform);
  const textWrap = $derived(settings?.textWrap);

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
    // Layout - Mobile (base)
    '--width-mobile': finalWidth,
    '--max-width-mobile': `var(--max-width--${typePreset === 'rte' ? 'body' : 'heading'}-${maxWidth})`,
    '--text-align-mobile': finalWidth === '100%' ? alignment : 'left',
    
    // Layout - Desktop
    '--width-desktop': finalWidthDesktop,
    '--max-width-desktop': `var(--max-width--${typePreset === 'rte' ? 'body' : 'heading'}-${maxWidthDesktop})`,
    '--text-align-desktop': finalWidthDesktop === '100%' ? alignmentDesktop : 'left',

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

    // Background & Corner radius
    ...(settings?.background
      ? {
          '--text-background-color': settings?.backgroundColor?.hex || 'rgb(255 255 255 / 1.0)',
          '--text-corner-radius-mobile': `${cornerRadius}px`,
          '--text-corner-radius-desktop': `${cornerRadiusDesktop}px`,
        }
      : {}),

    // Custom typography
    ...(settings?.typePreset === 'custom'
      ? {
          ...(font ? {'--font-family': font} : {}),
          ...(fontSize ? {'--font-size': fontSize} : {}),
          ...(fontSizeMobile ? {'--font-size-mobile': fontSizeMobile} : {}),
          ...(lineHeight ? {'--line-height': `var(--line-height--${lineHeight})`} : {}),
          ...(letterSpacing ? {'--letter-spacing': `var(--letter-spacing--${letterSpacing})`} : {}),
          ...(textTransform ? {'--text-transform': textTransform} : {}),
          ...(textWrap ? {'--text-wrap': textWrap} : {}),
        }
      : {}),

    // Color
    ...(settings?.color ? {'--color': settings?.color} : {}),
  } as Record<string, string>);

  function styleFromVars(vars: Record<string, string>) {
    return Object.entries(vars)
      .map(([k, v]) => `${k}: ${v}`)
      .join('; ')
  }
</script>

<div
  class="text-block spacing-style {typePreset} {isRte ? 'rte' : ''} {settings?.background ? 'text-block--background' : ''} {settings?.visibility ?? ''} text-block--align-mobile-{alignment} text-block--align-desktop-{alignmentDesktop} {settings?.typePreset === 'custom' ? 'custom-typography' : ''}"
  style={styleFromVars(styleVars)}
>
  <PortableText
    components={{}}
    value={value}
  />
</div>
<style>
  /* Mobile styles (default) */
  :global(.text-block){
    width: var(--width-mobile);
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding-block-start: var(--padding-block-start-mobile, 0);
    padding-block-end: var(--padding-block-end-mobile, 0);
    padding-inline-start: var(--padding-inline-start-mobile, 0);
    padding-inline-end: var(--padding-inline-end-mobile, 0);
  }
  
  :global(.text-block > *){
    width: var(--width-mobile);
    max-width: var(--max-width-mobile, 100%);
    text-align: var(--text-align-mobile, left);
    text-wrap: var(--text-wrap, pretty);
  }

  /* Mobile alignment */
  :global(.text-block--align-mobile-center),
  :global(.text-block--align-mobile-center > *){margin-inline:auto}
  :global(.text-block--align-mobile-right),
  :global(.text-block--align-mobile-right > *){margin-inline-start:auto}

  /* Background with mobile corner radius */
  :global(.text-block--background){
    background-color: var(--text-background-color);
    border-radius: var(--text-corner-radius-mobile, 0);
  }

  /* Custom typography */
  :global(.custom-typography){
    font-family: var(--font-family);
    font-size: var(--font-size-mobile, var(--font-size));
    line-height: var(--line-height);
    letter-spacing: var(--letter-spacing);
    text-transform: var(--text-transform);
  }

  :global(.custom-typography),
  :global(.custom-typography > :is(h1,h2,h3,h4,h5,h6,p,*)) { 
    color: var(--color); 
    font-family: var(--font-family);
    text-transform: var(--text-transform);
  }

  /* Visibility classes */
  :global(.hidden--desktop){display:flex}
  :global(.hidden--mobile){display:none}

  /* Desktop styles */
  @media (min-width: 769px) {
    :global(.text-block){
      width: var(--width-desktop);
      padding-block-start: var(--padding-block-start-desktop, 0);
      padding-block-end: var(--padding-block-end-desktop, 0);
      padding-inline-start: var(--padding-inline-start-desktop, 0);
      padding-inline-end: var(--padding-inline-end-desktop, 0);
    }

    :global(.text-block > *){
      width: var(--width-desktop);
      max-width: var(--max-width-desktop, 100%);
      text-align: var(--text-align-desktop, left);
    }

    /* Desktop alignment */
    :global(.text-block--align-desktop-center),
    :global(.text-block--align-desktop-center > *){margin-inline:auto}
    :global(.text-block--align-desktop-right),
    :global(.text-block--align-desktop-right > *){margin-inline-start:auto}
    :global(.text-block--align-desktop-left),
    :global(.text-block--align-desktop-left > *){margin-inline-start:0}

    /* Desktop corner radius */
    :global(.text-block--background){
      border-radius: var(--text-corner-radius-desktop, 0);
    }

    /* Custom typography desktop */
    :global(.custom-typography){
      font-size: var(--font-size);
    }

    /* Visibility classes */
    :global(.hidden--desktop){display:none}
    :global(.hidden--mobile){display:flex}
  }
</style>


