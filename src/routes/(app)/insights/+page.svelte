<script lang="ts">
	let { data } = $props();

	import SkeletonAreaCharts from '@/components/skeletons/AreaCharts.svelte';
	import SkeletonMetrics from '@/components/skeletons/Metrics.svelte';
	import AreaChart from '@/components/AreaChart.svelte';
	import Metrics from '@/components/Metrics.svelte';
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
	<SkeletonAreaCharts />
{:then overtime}
	<AreaChart title="Daily Average Accuracy" unit="% Accuracy" data={overtime.accuracyData} />
	<AreaChart title="Daily Games Lost" unit="Losses" data={overtime.lossData} />
{/await}
