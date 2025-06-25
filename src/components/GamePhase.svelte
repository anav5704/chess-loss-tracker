<script lang="ts">
	let { gamePhase } = $props();

	import { GamePhase } from '@/types';

	let label = $state();

	switch (gamePhase) {
		case GamePhase.OPENING:
			label = 'Opening';
			break;
		case GamePhase.MIDDLE_GAME:
			label = 'Middle Game';
			break;
		case GamePhase.END_GAME:
			label = 'End Game';
			break;
		default:
			label = 'Unknown';
	}
</script>

<span>{label}</span>
