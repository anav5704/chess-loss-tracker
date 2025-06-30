<script lang="ts">
	import CreateGame from '@/components/CreateGame.svelte';
	import UpdateGame from '@/components/UpdateGame.svelte';
	import { modalStore } from '@/stores/modal.svelte';
	import Modal from '@/components/Modal.svelte';
</script>

<Modal header="Add Loss" open={modalStore.createModal}>
	<CreateGame />
</Modal>

<Modal header="Edit Loss" open={modalStore.updateModal}>
	<UpdateGame />
</Modal>
