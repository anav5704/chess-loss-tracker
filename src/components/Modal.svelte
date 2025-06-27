<script lang="ts">
	let { open = $bindable(), header, children } = $props();
</script>

{#if open}
	<div class="fixed left-0 z-10 flex h-screen w-screen items-center bg-black/10 backdrop-blur-md">
		<dialog {open} class="card mx-auto w-11/12 text-white md:w-3/5 lg:w-4/11">
			<h2>{header}</h2>
			{@render children()}
		</dialog>
	</div>
{/if}
