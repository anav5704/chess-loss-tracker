<script lang="ts">
	let { children } = $props();

	import Navbar from '@/components/Navbar.svelte';
</script>

<section class="flex h-screen gap-2 bg-zinc-950 p-2">
	<Navbar />
	<main class="grow rounded-xl bg-zinc-900 p-2">
		{@render children()}
	</main>
</section>
