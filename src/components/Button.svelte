<script lang="ts">
	interface ButtonProps {
		label: string;
		type: 'button' | 'submit';
		isLoading: boolean;
		onclick?: () => void;
	}

	let { label, type, isLoading, onclick }: ButtonProps = $props();

	import { LoaderCircle } from '@lucide/svelte';
</script>

<button class="primary-button" onclick={type === 'button' ? onclick : undefined} disabled={isLoading} {type}>
	{#if isLoading}
		<LoaderCircle size={28} class="mx-auto animate-spin" />
	{:else}
		{label}
	{/if}
</button>
