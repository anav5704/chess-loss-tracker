<script lang="ts">
	import SkeletonGameRows from '@/components/skeletons/GameRows.svelte';
	import TimeControl from '@/components/TimeControl.svelte';
	import Termination from '@/components/Termination.svelte';
	import GamePhase from '@/components/GamePhase.svelte';
	import { formatDistanceToNow } from 'date-fns';
	import type { Game } from '@/types';

	let games = $state<Game[]>([]);
	let isLoading = $state(false);
	let hasMore = $state(true);
	let cursor = $state('');

	const getRelativeDate = (date: Date) => {
		return formatDistanceToNow(new Date(date), { addSuffix: true }).replace('about', '');
	};

	const loadGames = async () => {
		if (isLoading || !hasMore) return;

		isLoading = true;

		try {
			const response = await fetch(`/api/games?cursor=${cursor}`);
			const data = await response.json();

			games = [...games, ...data.games];
			cursor = data.nextCursor;
			hasMore = !!data.nextCursor;
		} catch (error) {
			console.log(error);
		} finally {
			isLoading = false;
		}
	};
</script>

<table class="w-full">
	<thead>
		<tr class="grid grid-cols-8">
			<th class="col-span-4">Opening</th>
			<th class="col-span-1">Phase</th>
			<th class="col-span-1">Termination</th>
			<th class="col-span-1">Moves</th>
			<th class="col-span-1">Played</th>
		</tr>
	</thead>
	<tbody>
		{#each games as { termination, opening, reviewed, timeControl, gamePhase, moveCount, date }}
			<tr class="grid grid-cols-8">
				<td class="col-span-4"><TimeControl {timeControl} {opening} {reviewed} /></td>
				<td class="col-span-1"><GamePhase {gamePhase} /></td>
				<td class="col-span-1"><Termination {termination} /></td>
				<td class="col-span-1">{moveCount}</td>
				<td class="col-span-1">{getRelativeDate(date)}</td>
			</tr>
		{/each}
	</tbody>
	{#if hasMore}
		<SkeletonGameRows onIntersect={loadGames} {isLoading} />
	{/if}
</table>
