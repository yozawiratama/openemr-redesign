<script>
  import Modal from './Modal.svelte';
  let modal;

  export let text = null;

  export function toggle() {
    modal.toggle();
  }

  export function close(){
    modal.close();
  }
</script>

<Modal index={20} bind:this="{modal}" loading size="small">
  <div class="flex items-center justify-center space-x-3">
    <i class='bx bx-loader-circle bx-spin text-3xl text-white'></i>
    {#if text}
      <p class="text-center text-sm text-white font-medium">{text}</p>
    {/if}
  </div>
</Modal>