import type { Game } from '@/types';

export const gamesStore = $state({
	games: [] as Game[],
	hasMore: true,
	cursor: '',
	search: '',
	opening: '',
	gamePhase: '',
	termination: '',
	timeControl: '',
	clearGames: () => {
		gamesStore.games = [];
		gamesStore.cursor = '';
		gamesStore.hasMore = true;
	},
	clearFilters: () => {
		gamesStore.clearGames();
		gamesStore.opening = '';
		gamesStore.gamePhase = '';
		gamesStore.termination = '';
		gamesStore.timeControl = '';
	}
});
