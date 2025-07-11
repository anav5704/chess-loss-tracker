<script lang="ts">
	let { children } = $props();

	import ModalProvider from '@/providers/ModalProvider.svelte';
	import Navbar from '@/components/Navbar.svelte';
</script>

<ModalProvider />

<section class="flex h-screen gap-2 bg-zinc-950 p-2">
	<Navbar />
	<main class="grow overflow-y-scroll rounded-xl bg-zinc-900 p-5">
		{@render children()}
	</main>
</section>
