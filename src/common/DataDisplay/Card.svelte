<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let title = "title";
  export let icon = "bx bx-user";

  export let count = false;
  export let online = false;
  let orders = "";
</script>

<div
  class="flex flex-col relative flex-1 mb-4 md:mb-0 bg-primary text-white p-3 h-52 justify-center items-center hover:opacity-90 rounded-xl cursor-pointer"
  on:click={() => dispatch("click")}
>
  {#if count}
    <div
      class="absolute top-0 right-0 w-7 h-7 flex items-center justify-center bg-green-500 text-white rounded-full mr-2 mt-2"
    >
      {orders.length}
    </div>
  {/if}
  {#if online}
    <!-- <div
      class="absolute top-0 right-0 text-sm px-3 flex items-center justify-center bg-green-500 text-white rounded-full mr-2 mt-2"
      >ONLINE ONLY</div
    > -->
  {/if}
  <i class="{icon} text-5xl" />
  <p class="text-xl text-center mt-2 font-medium uppercase">{title}</p>
</div>
