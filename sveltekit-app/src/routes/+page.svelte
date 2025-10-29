<script lang="ts">
	import { module_map } from '$lib/components/modules/module_map';
	import { useQuery } from '@sanity/svelte-loader';
	import { cleanObject } from '$lib/sanity/clean';

	let { data } = $props();
	let query = $derived(useQuery(data));
	let initial = $derived($query);

	$effect(() => {
		console.log(initial.data)
	})
</script>

{#each initial.data.modules as module (module._key)}
	{@const Component = module_map[module._type]}
	<Component sanity_obj={module}></Component>
{/each}