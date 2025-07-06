<script>
	import { page } from '$app/state';

	let { link } = $props();

	const { label, href, icon: Icon } = link;

	let active = $derived(page.url.pathname.includes(href));
</script>

<a class={active ? 'text-white' : 'text-zinc-400'} {href}>
	<Icon size={24} />{label}
</a>
