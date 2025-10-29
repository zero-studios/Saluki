<!-- <script lang="ts">
	import { module_map } from '$lib/components/modules/module_map';
	import type { Page } from "$lib/sanity/types";

	interface Props {
		data: {
			pageData: {
				data: Page
			};
			params: {
				slug: string;
			};
			prerender: boolean;
		};
	}

	let { data }: Props = $props();
	
</script>

{#each data.pageData.data.modules as module (module._key)}
	{@const Component = module_map[module._type]}
	<Component sanity_obj={module}></Component>
{/each}

 -->
