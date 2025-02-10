<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const q = useQuery(data);

	let { data: posts } = $derived($q);

	let files = $state();
	let holdings = $state();

	async function uploadFile() {
		const formData = new FormData();

		for (const file of files) {
			formData.append('file', file);
		}

		const response = await fetch('/api/fund', {
			method: 'POST',
			body: formData
		});

		const result = await response.json();
		console.log(result);
	}
	async function uploadHoldings() {
		const formData = new FormData();

		for (const file of holdings) {
			formData.append('file', file);
		}

		const response = await fetch('/api/holdings', {
			method: 'POST',
			body: formData
		});

		const result = await response.json();
		console.log(result);
	}
</script>

<section>
	<form onsubmit={uploadFile}>
		<input type="file" bind:files />
		<button type="submit">Upload CSV</button>
	</form>
	<form onsubmit={uploadHoldings}>
		<input type="file" bind:files={holdings} />
		<button type="submit">Upload Holdings</button>
	</form>
	{#if posts.length}
		{#each posts as post}
			<Card {post} />
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>
