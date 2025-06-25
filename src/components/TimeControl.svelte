<script lang="ts">
	let { timeControl, opening, reviewed } = $props();

	import { Zap, Hourglass, Timer, Flame } from '@lucide/svelte';
	import { TimeControl } from '@/types';

	let Icon = $state<typeof Zap>();
	let title = $state<string>();

	switch (timeControl) {
		case TimeControl.BULLET:
			Icon = Zap;
			title = 'Bullet';
			break;
		case TimeControl.BLITZ:
			Icon = Flame;
			title = 'Blitz';
			break;
		case TimeControl.RAPID:
			Icon = Timer;
			title = 'Rapid';
			break;
		case TimeControl.CLASSICAL:
			Icon = Hourglass;
			title = 'Classical';
			break;
	}
</script>

<span {title} class="flex items-center gap-5">
	<Icon size={24} />
	{opening}
	{#if !reviewed}
		<div class="h-3 w-3 rounded-full bg-violet-500"></div>
	{/if}
</span>
