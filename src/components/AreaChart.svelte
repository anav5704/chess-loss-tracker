<script lang="ts">
	let { title, data, unit } = $props();

	import { AreaChart, Area, Tooltip } from 'layerchart';
	import type { ComponentProps } from 'svelte';
	import { curveCatmullRom } from 'd3-shape';
	import { format } from 'date-fns';

	let tooltipContext = $state<ComponentProps<AreaChart<any>>['tooltipContext']>();

	const formatDate = (date: Date) => format(date, 'EEEE do MMMM yyyy');
</script>

<section class="card mt-5 p-0">
	<div class="flex items-center justify-between">
		<p class="p-5">{title}</p>
		{#if $tooltipContext?.data}
			<p class="p-5 opacity-100 transition starting:opacity-0">
				{formatDate(new Date($tooltipContext.data.date))} -
				{$tooltipContext.data.value}
				{unit}
			</p>
		{/if}
	</div>

	<div class="h-[200px]">
		<AreaChart
			bind:tooltipContext
			{data}
			x="date"
			y="value"
			axis={false}
			grid={false}
			props={{
				highlight: {
					points: {
						class: 'stroke-4 stroke-violet-500 fill-zinc-800'
					}
				}
			}}
		>
			<svelte:fragment slot="tooltip">
				<Tooltip.Root />
			</svelte:fragment>
			<svelte:fragment slot="marks">
				<Area line={{ class: 'stroke-2 stroke-violet-500' }} curve={curveCatmullRom} fill="#8b5cf640" />
			</svelte:fragment>
		</AreaChart>
	</div>

	<div class="h-5 w-full rounded-b-xl bg-violet-500/25"></div>
</section>
