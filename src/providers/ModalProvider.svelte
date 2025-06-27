<script lang="ts">
	import CreateGame from '@/components/CreateGame.svelte';
	import { modalStore } from '@/stores/modal.svelte';
	import Modal from '@/components/Modal.svelte';
</script>

<Modal header="Add Loss" open={modalStore.createModal}>
	<CreateGame />
</Modal>
