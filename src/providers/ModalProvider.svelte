<script lang="ts">
	import FilterGames from '@/components/FilterGames.svelte';
	import CreateGame from '@/components/CreateGame.svelte';
	import UpdateGame from '@/components/UpdateGame.svelte';
	import DeleteGame from '@/components/DeleteGame.svelte';
	import { modalStore } from '@/stores/modal.svelte';
	import Modal from '@/components/Modal.svelte';
</script>

<Modal header="Add Loss" open={modalStore.createModal}>
	<CreateGame />
</Modal>

<Modal header="Edit Loss" open={modalStore.updateModal}>
	<UpdateGame />
</Modal>

<Modal header="Delete Loss" open={modalStore.deleteModal}>
	<DeleteGame />
</Modal>

<Modal header="Filter Games" open={modalStore.filterModal}>
	<FilterGames />
</Modal>
