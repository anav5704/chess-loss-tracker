<script lang="ts">
	let { children } = $props();
</script>

<main class="relative grid h-screen place-content-center">
	<img src="/auth-bg.png" alt="" class=" absolute inset-0 -z-20 h-full w-full object-cover" />
	<div class="absolute inset-0 -z-10 bg-zinc-800/80"></div>
	{@render children()}
</main>
