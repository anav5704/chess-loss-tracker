<script lang="ts">
	import SkeletonGameRows from '@/components/skeletons/GameRows.svelte';
	import TimeControl from '@/components/TimeControl.svelte';
	import Termination from '@/components/Termination.svelte';
	import GamePhase from '@/components/GamePhase.svelte';
	import { gamesStore } from '@/stores/games.svelte';
	import { formatDistanceToNow } from 'date-fns';

	let isLoading = $state(false);

	const getRelativeDate = (date: Date) => {
		return formatDistanceToNow(new Date(date), { addSuffix: true }).replace('about', '');
	};

	const loadGames = async () => {
		if (isLoading || !gamesStore.hasMore) return;

		isLoading = true;

		try {
			const endpoint = new URL('/api/games', window.location.origin);
			endpoint.searchParams.set('search', gamesStore.search);
			endpoint.searchParams.set('cursor', gamesStore.cursor);
			endpoint.searchParams.set('opening', gamesStore.opening);
			endpoint.searchParams.set('termination', gamesStore.termination);
			endpoint.searchParams.set('timeControl', gamesStore.timeControl);
			endpoint.searchParams.set('gamePhase', gamesStore.gamePhase);

			const response = await fetch(endpoint);
			const data = await response.json();

			// Data loads too fast causes flashing
			setTimeout(() => {
				gamesStore.games = [...gamesStore.games, ...data.games];
				gamesStore.cursor = data.nextCursor;
				gamesStore.hasMore = !!data.nextCursor;
			}, 1000);
		} catch (error) {
			console.log(error);
		} finally {
			isLoading = false;
		}
	};
</script>

<table class="w-full">
	<thead>
		<tr class="grid grid-cols-8 border-none">
			<th class="col-span-4">Opening</th>
			<th class="col-span-1">Phase</th>
			<th class="col-span-1">Termination</th>
			<th class="col-span-1">Moves</th>
			<th class="col-span-1">Played</th>
		</tr>
	</thead>
	<tbody>
		{#each gamesStore.games as { termination, opening, reviewed, timeControl, gamePhase, moveCount, date }}
			<tr class="grid grid-cols-8">
				<td class="col-span-4"><TimeControl {timeControl} {opening} {reviewed} /></td>
				<td class="col-span-1"><GamePhase {gamePhase} /></td>
				<td class="col-span-1"><Termination {termination} /></td>
				<td class="col-span-1">{moveCount}</td>
				<td class="col-span-1">{getRelativeDate(date)}</td>
			</tr>
		{/each}
	</tbody>
	{#if gamesStore.hasMore}
		<SkeletonGameRows onIntersect={loadGames} {isLoading} />
	{/if}
</table>
