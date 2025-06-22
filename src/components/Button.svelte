<script lang="ts">
	let { label, type, isLoading } = $props();

	import { LoaderCircle } from '@lucide/svelte';
</script>

<button class="primary-button" disabled={isLoading} {type}>
	{#if isLoading}
		<LoaderCircle size={28} class="mx-auto animate-spin" />
	{:else}
		{label}
	{/if}
</button>
