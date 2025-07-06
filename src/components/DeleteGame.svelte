<script>
	import { modalStore } from '@/stores/modal.svelte';
	import Button from './Button.svelte';
	import { enhance } from '$app/forms';

	const { id } = modalStore.gameData;
	let isLoading = $state(false);
</script>

<form
	action="?/deleteGame"
	method="POST"
	use:enhance={() => {
		isLoading = true;
		return async ({ update }) => {
			update().finally(async () => {
				isLoading = false;
				modalStore.deleteModal = false;
				modalStore.clearData();
			});
		};
	}}
>
	<input defaultValue={id} name="id" hidden />

	<p>Are you sure you want to delete this game?</p>

	<div class="grid grid-cols-2 gap-5">
		<button onclick={() => (modalStore.deleteModal = false)} disabled={isLoading} class="col-span-1">Cancel</button>
		<Button {isLoading} type="submit" label="Confirm" />
	</div>
</form>
