<script>
	let { link } = $props();

	const { label, href, icon: Icon, active } = link;
</script>

<a class={`${active ? 'text-white' : 'text-zinc-400'} flex gap-2`} {href}>
	<Icon size={25} />{label}
</a>
