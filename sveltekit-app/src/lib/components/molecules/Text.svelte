<script lang="ts">
  import {PortableText} from '@portabletext/svelte'
  import type { TextBlock } from '$lib/sanity/types'
	import { stegaClean } from '@sanity/client/stega';

  let { sanity_obj }: { sanity_obj: TextBlock } = $props();
  
  const value = $derived(sanity_obj?.text || []);
  const settings = $derived(stegaClean(sanity_obj));

  const width = $derived(settings?.width ?? 'fit-content');
  const maxWidth = $derived(settings?.maxWidth ?? 'normal');
  const alignment = $derived(settings?.alignment ?? 'left');
  const typePreset = $derived(settings?.typePreset ?? 'rte');
  const isRte = $derived(typePreset === 'rte' || typePreset === 'paragraph');

  const styleVars = $derived({
    '--width': width,
    '--max-width': `var(--max-width--${typePreset === 'rte' ? 'body' : 'heading'}-${maxWidth})`,
    ...(width === '100%' ? {'--text-align': alignment} : {}),
    ...(settings?.background
      ? {
          '--text-background-color': settings?.backgroundColor?.hex || 'rgb(255 255 255 / 1.0)',
          '--text-corner-radius': `${settings?.cornerRadius ?? 0}px`,
          '--padding-block-start': `${settings?.paddingBlockStart ?? 0}px`,
          '--padding-block-end': `${settings?.paddingBlockEnd ?? 0}px`,
          '--padding-inline-start': `${settings?.paddingInlineStart ?? 0}px`,
          '--padding-inline-end': `${settings?.paddingInlineEnd ?? 0}px`,
        }
      : {
          '--padding-block-start': `${settings?.paddingBlockStart ?? 0}px`,
          '--padding-block-end': `${settings?.paddingBlockEnd ?? 0}px`,
          '--padding-inline-start': `${settings?.paddingInlineStart ?? 0}px`,
          '--padding-inline-end': `${settings?.paddingInlineEnd ?? 0}px`,
        }),
    ...(settings?.typePreset === 'custom' && settings?.color
      ? {'--color': settings?.color}
      : {}),
  } as Record<string, string>);

  function styleFromVars(vars: Record<string, string>) {
    return Object.entries(vars)
      .map(([k, v]) => `${k}: ${v}`)
      .join('; ')
  }
</script>

<div
  class="text-block spacing-style {typePreset} {isRte ? 'rte' : ''} {settings?.background ? 'text-block--background' : ''} {width === '100%' ? `text-block--align-${alignment}` : ''} {settings?.typePreset === 'custom' ? 'custom-typography' : ''} {settings?.typePreset === 'custom' && settings?.fontSize !== '' ? 'custom-font-size' : ''} {settings?.typePreset === 'custom' && settings?.color ? 'custom-color' : ''}"
  style={styleFromVars(styleVars)}
>
  <PortableText
    components={{}}
    value={value}
  />
</div>
<style>
  :global(.text-block){
    width: var(--width);
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: var(--horizontal-alignment);
  }
  :global(.text-block > *){
    width: var(--width);
    max-width: var(--max-width, 100%);
    text-align: var(--text-align, var(--text-align-default, left));
    text-wrap: var(--text-wrap);
  }
  :global(.text-block--align-center),
  :global(.text-block--align-center > *){margin-inline:auto}
  :global(.text-block--align-right),
  :global(.text-block--align-right > *){margin-inline-start:auto}
  :global(.text-block--background){
    background-color: var(--text-background-color);
    border-radius: var(--text-corner-radius);
    padding-block-start: max(var(--text-padding, 0), var(--padding-block-start, 0));
    padding-block-end: max(var(--text-padding, 0), var(--padding-block-end, 0));
    padding-inline-start: max(var(--text-padding, 0), var(--padding-inline-start, 0));
    padding-inline-end: max(var(--text-padding, 0), var(--padding-inline-end, 0));
  }
  :global(.custom-color),
  :global(.custom-color > :is(h1,h2,h3,h4,h5,h6,p,*)) { color: var(--color); }
</style>


