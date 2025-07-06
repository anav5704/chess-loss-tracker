<script lang="ts">
	import { X } from '@lucide/svelte';

	let { open = $bindable(), header, children } = $props();
</script>

{#if open}
	<div class="fixed left-0 z-10 flex h-screen w-screen items-center bg-black/10 backdrop-blur-md">
		<dialog {open} class="card mx-auto w-11/12 text-white md:w-3/5 lg:w-4/11">
			<div class="flex items-start justify-between">
				<h2>{header}</h2>
				<button onclick={() => (open = false)} class="w-fit border-0 p-1">
					<X size={24} />
				</button>
			</div>
			{@render children()}
		</dialog>
	</div>
{/if}
