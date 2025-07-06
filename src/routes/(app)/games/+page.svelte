<script lang="ts">
	import GamesTable from '@/components/GamesTable.svelte';
	import { modalStore } from '@/stores/modal.svelte.js';
	import Search from '@/components/Search.svelte';
</script>

<header class="bg-zinc-900">
	<h1>Games You Lost</h1>

	<div class="grid grid-cols-6 gap-5">
		<Search />
		<button onclick={() => (modalStore.filterModal = true)} class="col-span-1">Filters</button>
		<button onclick={() => (modalStore.createModal = true)} class="primary-button col-span-1"> Add Loss </button>
	</div>
</header>

<GamesTable />
