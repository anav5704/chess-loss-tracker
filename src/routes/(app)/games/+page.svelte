<script lang="ts">
	import GamesTable from '@/components/GamesTable.svelte';
	import { modalStore } from '@/stores/modal.svelte.js';
</script>

<header class="bg-zinc-900">
	<h1>Games You Lost</h1>

	<div class="grid grid-cols-6 gap-5">
		<input class="col-span-4" type="search" placeholder="Search Opponent..." />
		<button class="col-span-1">Filters</button>
		<button onclick={() => (modalStore.createModal = true)} class="primary-button col-span-1"> Add Loss </button>
	</div>
</header>

<GamesTable />
