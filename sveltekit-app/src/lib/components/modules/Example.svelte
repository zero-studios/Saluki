<script lang="ts">
    import type { ExampleModule } from '$lib/sanity/types';
    import {PortableText} from '@portabletext/svelte'
    import { urlFor } from '$lib/sanity/image';

    interface Props {
        sanity_obj: ExampleModule
    }

    let { sanity_obj }: Props = $props();

</script>

<div>
    {#if sanity_obj.image}
    <img src={urlFor(sanity_obj.image).url()} alt={sanity_obj.title} />
{/if}
    <h1>{sanity_obj.title}</h1>
    <div class="richtext-container">
        <PortableText
            components={{}}
            value={sanity_obj.body}
        />
    </div>
</div>
