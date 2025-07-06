<script lang="ts">
	import { gamesStore } from '@/stores/games.svelte';
</script>

<input
	onkeydown={(e) => e.key === 'Enter' && gamesStore.clearGames()}
	placeholder="Search notes, opening or opponent..."
	bind:value={gamesStore.search}
	class="col-span-4"
	type="search"
/>
