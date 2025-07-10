<script lang="ts">
	let { data } = $props();

	import { Area, AreaChart, Chart, LinearGradient, Tooltip } from 'layerchart';
	import SkeletonMetrics from '@/components/skeletons/Metrics.svelte';
	import Metrics from '@/components/Metrics.svelte';
	import type { ComponentProps } from 'svelte';
	import { curveCatmullRom } from 'd3-shape';
	import { format } from 'date-fns';

	let accuracyChartContext = $state<ComponentProps<AreaChart<any>>['lossChartContext']>();
	let lossChartContext = $state<ComponentProps<AreaChart<any>>['lossChartContext']>();

	const formatDate = (date: Date) => {
		return format(date, 'EEEE do MMMM yyyy');
	};
</script>

<header class="bg-zinc-900">
	<h1>Insights</h1>
</header>

<section class="grid grid-cols-4 gap-5">
	{#await data.metrics}
		<SkeletonMetrics />
	{:then metrics}
		<Metrics title="Total Games" value={metrics.totalGames} />
		<Metrics title="Reviewed Games" value={metrics.reviewedGames} />
		<Metrics title="Average Moves" value={metrics.averageMoves} />
		<Metrics title="Average Accuracy" value={metrics.averageAccuracy} />
	{/await}
</section>

{#await data.overtime}
	<p>Loading...</p>
{:then overtime}
	<section class="card mt-5 p-0">
		<div class="flex items-center justify-between">
			<p class="p-5">Daily Average Accuracy</p>
			{#if $accuracyChartContext?.data}
				<p class="p-5">
					{formatDate(new Date($accuracyChartContext?.data.date))} -
					{$accuracyChartContext?.data?.value}% Accuracy
				</p>
			{/if}
		</div>
		<div class="h-[200px]">
			<AreaChart
				bind:tooltipContext={accuracyChartContext}
				data={overtime.accuracyData}
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
					<Tooltip.Root></Tooltip.Root>
				</svelte:fragment>
				<svelte:fragment slot="marks">
					<Area line={{ class: 'stroke-2 stroke-violet-500' }} curve={curveCatmullRom} fill="#8b5cf640" />
				</svelte:fragment>
			</AreaChart>
		</div>
		<div class="h-5 w-full rounded-b-xl bg-violet-500/25"></div>
	</section>

	<section class="card mt-5 p-0">
		<div class="flex items-center justify-between">
			<p class="p-5">Daily Games Lost</p>
			{#if $lossChartContext?.data}
				<p class="p-5">
					{formatDate(new Date($lossChartContext?.data.date))} -
					{$lossChartContext?.data?.value} Losses
				</p>
			{/if}
		</div>
		<div class="h-[200px]">
			<AreaChart
				bind:tooltipContext={lossChartContext}
				data={overtime.lossData}
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
					<Tooltip.Root></Tooltip.Root>
				</svelte:fragment>
				<svelte:fragment slot="marks">
					<Area line={{ class: 'stroke-2 stroke-violet-500' }} curve={curveCatmullRom} fill="#8b5cf640" />
				</svelte:fragment>
			</AreaChart>
		</div>
		<div class="h-5 w-full rounded-b-xl bg-violet-500/25"></div>
	</section>
{/await}
