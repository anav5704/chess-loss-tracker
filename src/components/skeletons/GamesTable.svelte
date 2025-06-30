<script lang="ts">
	export let rows = [1, 2, 3, 4, 5, 6, 7];
</script>

<table class="w-full">
	<thead>
		<tr class="grid grid-cols-8">
			<th class="col-span-4">Opening</th>
			<th class="col-span-1">Phase</th>
			<th class="col-span-1">Termination</th>
			<th class="col-span-1">Moves</th>
			<th class="col-span-1">Played</th>
		</tr>
	</thead>
	<tbody>
		{#each rows as _}
			<tr class="grid grid-cols-8">
				<td class="col-span-4 animate-pulse py-6">
					<div class="h-5 w-5/6 rounded-full bg-zinc-700"></div>
				</td>
				<td class="col-span-1 animate-pulse py-6">
					<div class="h-5 w-2/3 rounded-full bg-zinc-700"></div>
				</td>
				<td class="col-span-1 animate-pulse py-6">
					<div class="h-5 w-2/3 rounded-full bg-zinc-700"></div>
				</td>
				<td class="col-span-1 animate-pulse py-6">
					<div class="h-5 w-2/3 rounded-full bg-zinc-700"></div>
				</td>
				<td class="col-span-1 animate-pulse py-6">
					<div class="h-5 w-2/3 rounded-full bg-zinc-700"></div>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
