<script>
	import { modalStore } from '@/stores/modal.svelte';
	import Button from './Button.svelte';
	import { enhance } from '$app/forms';

	const { id, pgn, notes } = modalStore.gameData;
	let isLoading = $state(false);
</script>

<form
	action="?/updateGame"
	method="POST"
	use:enhance={() => {
		isLoading = true;
		return async ({ update }) => {
			update().finally(async () => {
				isLoading = false;
				modalStore.updateModal = false;
				modalStore.clearData();
			});
		};
	}}
>
	<input defaultValue={id} name="id" hidden />

	<label>
		PGN
		<textarea defaultValue={pgn} name="pgn" rows="4" required></textarea>
	</label>

	<label>
		Notes
		<textarea defaultValue={notes} name="notes" rows="4" required></textarea>
	</label>

	<div class="grid grid-cols-2 gap-5">
		<button onclick={() => (modalStore.updateModal = false)} disabled={isLoading} class="col-span-1">Cancel</button>
		<Button {isLoading} type="submit" label="Confirm" />
	</div>
</form>
