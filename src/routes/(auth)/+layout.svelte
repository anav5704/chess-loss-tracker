<script lang="ts">
	let { children } = $props();
</script>

<main class="relative flex h-screen flex-col items-center justify-center">
	<img src="/auth-bg.png" alt="" class=" absolute inset-0 -z-20 h-full w-full object-cover" />
	<div class="absolute inset-0 -z-10 bg-zinc-900/90"></div>
	{@render children()}
</main>
