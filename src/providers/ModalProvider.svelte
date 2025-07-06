<script lang="ts">
	import FilterGames from '@/components/FilterGames.svelte';
	import CreateGame from '@/components/CreateGame.svelte';
	import UpdateGame from '@/components/UpdateGame.svelte';
	import DeleteGame from '@/components/DeleteGame.svelte';
	import { modalStore } from '@/stores/modal.svelte';
	import Modal from '@/components/Modal.svelte';
</script>

<Modal header="Add Loss" bind:open={modalStore.createModal}>
	<CreateGame />
</Modal>

<Modal header="Edit Loss" bind:open={modalStore.updateModal}>
	<UpdateGame />
</Modal>

<Modal header="Delete Loss" bind:open={modalStore.deleteModal}>
	<DeleteGame />
</Modal>

<Modal header="Filter Games" bind:open={modalStore.filterModal}>
	<FilterGames />
</Modal>
