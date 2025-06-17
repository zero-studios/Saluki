<script lang="ts">
    import type { ExampleModule } from '$lib/sanity/types';
    import {PortableText} from '@portabletext/svelte'
    import { urlFor } from '$lib/sanity/image';
	import Video from '../molecules/Video.svelte';
    import { fileAssetFor } from "$lib/sanity/video";


    interface Props {
        sanity_obj: ExampleModule
    }

    let { sanity_obj }: Props = $props();

</script>

<div>
    <div class="flex">
        {#if sanity_obj.image}
        <div class="basis-full">
            <img class="" src={urlFor(sanity_obj.image).url()} alt={sanity_obj.title} />
        </div>
        {/if}
        {#if sanity_obj.video}
        <div class="basis-full border">
            <Video video={fileAssetFor(sanity_obj.video)} />
        </div>
        {/if}
    </div>

    <h1>{sanity_obj.heading}</h1>
    <div class="richtext-container">
        <PortableText
            components={{}}
            value={sanity_obj.body}
        />
    </div>
</div>
