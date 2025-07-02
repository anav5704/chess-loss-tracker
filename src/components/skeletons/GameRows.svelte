<script lang="ts">
	import { onMount } from 'svelte';

	let { onIntersect, isLoading } = $props();

	let element = $state<HTMLElement | undefined>();

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (!isLoading && entries[0].isIntersecting) onIntersect();
			},
			{ root: document.querySelector('main'), threshold: 0.1, rootMargin: '100px' }
		);

		if (element) observer.observe(element);

		return () => {
			if (observer && element) observer.disconnect();
		};
	});
</script>

<tfoot bind:this={element}>
	{#each [1, 2, 3] as _}
		<tr class="grid grid-cols-8">
			<td class="col-span-4 animate-pulse py-6">
				<div class="h-5 w-5/6 rounded-full bg-zinc-700"></div>
			</td>
			<td class="col-span-1 animate-pulse py-6">
				<div class="h-5 w-2/3 rounded-full bg-zinc-700"></div>
			</td>
			<td class="col-span-1 animate-pulse py-6">
				<div class="h-5 w-2/3 rounded-full bg-zinc-700"></div>
			</td>
			<td class="col-span-1 animate-pulse py-6">
				<div class="h-5 w-2/3 rounded-full bg-zinc-700"></div>
			</td>
			<td class="col-span-1 animate-pulse py-6">
				<div class="h-5 w-2/3 rounded-full bg-zinc-700"></div>
			</td>
		</tr>
	{/each}
</tfoot>
