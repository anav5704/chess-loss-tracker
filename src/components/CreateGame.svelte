<script>
	import { modalStore } from '@/stores/modal.svelte';
	import Button from './Button.svelte';
	import { enhance } from '$app/forms';

	let isLoading = $state(false);
</script>

<form
	action="?/createGame"
	method="POST"
	use:enhance={() => {
		isLoading = true;
		return async ({ update }) => {
			update().finally(async () => {
				isLoading = false;
				modalStore.createModal = false;
			});
		};
	}}
>
	<label>
		PGN
		<textarea name="pgn" rows="4"></textarea>
	</label>

	<label>
		Notes
		<textarea name="notes" rows="4"></textarea>
	</label>

	<div class="grid grid-cols-2 gap-5">
		<button
			onclick={() => (modalStore.createModal = false)}
			disabled={isLoading}
			class="col-span-1"
		>
			Cancel
		</button>
		<Button {isLoading} type="submit" label="Confirm" />
	</div>
</form>
