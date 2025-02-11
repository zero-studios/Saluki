<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '$lib/components/molecules/Card.svelte';
	import Welcome from '$lib/components/molecules/Welcome.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const q = useQuery(data);

	let { data: posts } = $derived($q);

</script>

<section>
	{#if posts.length}
		{#each posts as post}
			<Card {post} />
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>
