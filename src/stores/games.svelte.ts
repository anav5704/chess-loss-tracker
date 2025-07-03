import type { Game } from '@/types';

export const gamesStore = $state({
	search: '',
	sortBy: '',
	sortOrder: '',
	games: [] as Game[],
	hasMore: true,
	cursor: '',
	reset: () => {
		gamesStore.games = [];
		gamesStore.cursor = '';
		gamesStore.hasMore = true;
	}
});
