<script>
  import NumberCounter from "./NumberCounter.svelte";
  export let title = "Total Income";
  export let content = 0;
</script>
<div class="flex w-full flex-col md:flex-row h-32 border border-gray-400 p-4 bg-white">
  <div class="flex w-full md:w-1/2 h-full items-start justify-start text-primary font-semibold">
      <p class="leading-loose border-b border-gray-300">{title}</p>
  </div>
  <div class="flex w-full md:w-1/2 items-end justify-end text-3xl font-light">
      <NumberCounter number={content}/>
  </div>
</div>