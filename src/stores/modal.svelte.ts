export const modalStore = $state({
	createModal: false,
	updateModal: false,
	deleteModal: false,
	filterModal: false,
	gameData: {
		id: '',
		pgn: '',
		notes: ''
	},
	clearData: () => {
		modalStore.gameData = {
			id: '',
			pgn: '',
			notes: ''
		};
	}
});
