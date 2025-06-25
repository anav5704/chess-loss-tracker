<script lang="ts">
	import { Swords, Cpu, ChartArea, LogOut, Settings } from '@lucide/svelte';
	import { signOut } from '@/lib/auth/client';
	import { goto } from '$app/navigation';
	import NavLink from './NavLink.svelte';

	const primaryLinks = $derived([
		{
			label: 'Games',
			href: '/games',
			icon: Swords
		},
		{
			label: 'Analysis',
			href: '/analysis',
			icon: Cpu
		},
		{
			label: 'Insights',
			href: '/insights',
			icon: ChartArea
		}
	]);

	const secondaryLinks = $derived([
		{
			label: 'Settings',
			href: '/settings',
			icon: Settings
		},
		{
			label: 'Log out',
			href: 'logout',
			icon: LogOut
		}
	]);

	const handleLogout = () => {
		signOut({
			fetchOptions: {
				onSuccess: () => {
					goto('/login', { replaceState: true });
				}
			}
		});
	};
</script>

<section class="flex w-[200px] flex-col space-y-5 rounded-xl bg-zinc-900 p-4">
	<div class=" h-28 w-full rounded-xl bg-violet-500"></div>
	<nav class="flex grow flex-col justify-between">
		<ul class="space-y-3">
			{#each primaryLinks as link}
				<li>
					<NavLink {link} />
				</li>
			{/each}
		</ul>
		<ul class="space-y-3">
			{#each secondaryLinks as link}
				<li>
					<NavLink {link} />
				</li>
			{/each}
		</ul>
	</nav>
</section>
