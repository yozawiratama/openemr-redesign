<script>
  import Util from "../Util/Utility.js";

  export let value;
  export let form;
  export let name;
  export let label = "";
  export let items = [];
  export let disabled = false;

  let selected;

  if ($form.fields[name]) {
    $form.fields[name].errors = "";
  }

  function selectChange() {
    value = selected.id;
  }
</script>

<label
  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 dark:text-white"
  for="grid-state"
>
  {label}
</label>
<div class="relative flex w-full">
  <!-- svelte-ignore a11y-no-onchange -->
  <select
    name="{name}"
    bind:value="{selected}"
    on:change="{selectChange}"
    class="block appearance-none w-full border text-dark-second py-2 px-3 pr-8 dark:text-white dark:bg-dark-third cursor-pointer {Util.validateErrorField(
      $form.fields,
      name,
    )
      ? 'border-red-500'
      : ''} rounded"
    disabled="{disabled}"
  >
    {#if value === null || value === ""}
      <option>-- Select --</option>
    {/if}
    {#each items as item}
      {#if value === item.id}
        <option value="{item}" selected>{item.name}</option>
      {:else}
        <option value="{item}">{item.name}</option>
      {/if}
    {/each}
  </select>
  <div
    class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 fill-current text-dark-second dark:text-white"
  >
    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
      ><path
        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
      ></path></svg
    >
  </div>
</div>
{#if Util.validateInput($form.fields, name, "required")}
  <p class="text-red-500 text-xs italic">Please fill out this field.</p>
{/if}
