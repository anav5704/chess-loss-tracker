<script lang="ts">
	import { GamePhase, Termination, TimeControl } from '@/types';
	import { gamesStore } from '@/stores/games.svelte';
	import { modalStore } from '@/stores/modal.svelte';
	import { openings } from '@/data/openings';
	import Button from './Button.svelte';

	let isLoading = $state(false);

	const handleConfirm = () => {
		modalStore.filterModal = false;
		gamesStore.clearGames();
	};

	const handleReset = () => {
		modalStore.filterModal = false;
		gamesStore.clearFilters();
	};

	const formatEnum = (value: string) => {
		return value
			.replace(/_/g, ' ')
			.toLowerCase()
			.replace(/\b\w/g, (c) => c.toUpperCase());
	};
</script>

<form>
	<label>
		Opening
		<select name="opening" bind:value={gamesStore.opening}>
			{#each openings as opening}
				<option value={opening}>{opening}</option>
			{/each}
		</select>
	</label>

	<label>
		Termination
		<select name="termination" bind:value={gamesStore.termination}>
			{#each Object.values(Termination) as termination}
				<option value={termination}>{formatEnum(termination)}</option>
			{/each}
		</select>
	</label>

	<label>
		Game phase
		<select name="gamePhase" bind:value={gamesStore.gamePhase}>
			{#each Object.values(GamePhase) as gamePhase}
				<option value={gamePhase}>{formatEnum(gamePhase)}</option>
			{/each}
		</select>
	</label>

	<label>
		Time control
		<select name="timeControl" bind:value={gamesStore.timeControl}>
			{#each Object.values(TimeControl) as timeControl}
				<option value={timeControl}>{formatEnum(timeControl)}</option>
			{/each}
		</select>
	</label>

	<div class="grid grid-cols-2 gap-5">
		<button onclick={handleReset} disabled={isLoading} class="col-span-1"> Reset </button>
		<Button onclick={handleConfirm} {isLoading} type="button" label="Confirm" />
	</div>
</form>
