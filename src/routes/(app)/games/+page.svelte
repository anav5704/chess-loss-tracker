<script lang="ts">
	import GamePhase from '@/components/GamePhase.svelte';
	import Termination from '@/components/Termination.svelte';
	import TimeControl from '@/components/TimeControl.svelte';

	let { data } = $props();
</script>

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
