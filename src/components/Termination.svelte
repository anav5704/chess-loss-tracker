<script lang="ts">
	let { termination } = $props();

	import { Termination } from '@/types';

	let label = $state<string>();

	switch (termination) {
		case Termination.CHECKMATE:
			label = 'Checkmate';
			break;
		case Termination.RESIGNATION:
			label = 'Resignation';
			break;
		case Termination.TIMEOUT:
			label = 'Timeout';
			break;
		default:
			label = 'Unknown';
	}
</script>

<span>{label}</span>
