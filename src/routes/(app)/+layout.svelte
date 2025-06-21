<script lang="ts">
	let { children } = $props();

	import Navbar from '@/components/Navbar.svelte';
</script>

<section>
	<Navbar />
	<main>
		{@render children()}
	</main>
</section>
