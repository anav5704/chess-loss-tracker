<script lang="ts">
	import GamePhase from '@/components/GamePhase.svelte';
	import Termination from '@/components/Termination.svelte';
	import TimeControl from '@/components/TimeControl.svelte';
	import { modalStore } from '@/stores/modal.svelte.js';

	let { data } = $props();
</script>

<header class=" bg-zinc-900">
	<h1>Games You Lost</h1>

	<div class="grid grid-cols-6 gap-5">
		<input class="col-span-4" type="search" placeholder="Search Opponent..." name="" id="" />

		<button class="col-span-1">Filters</button>

		<button onclick={() => (modalStore.createModal = true)} class="primary-button con-span-1">
			Add Loss
		</button>
	</div>
</header>

{#await data.stream}
	<p>Loading...</p>
{:then stream}
	<table class="w-full">
		<thead>
			<tr>
				<th>Opening</th>
				<th>Phase</th>
				<th>Termination</th>
				<th>Moves</th>
				<th>Date</th>
			</tr>
		</thead>
		<tbody>
			{#each stream.games as { termination, opening, reviewed, timeControl, gamePhase, moveCount, date }}
				<tr>
					<td><TimeControl {timeControl} {opening} {reviewed} /></td>
					<td><GamePhase {gamePhase} /></td>
					<td><Termination {termination} /></td>
					<td>{moveCount}</td>
					<td>{date.toDateString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/await}
