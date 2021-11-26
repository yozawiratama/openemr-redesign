<script>
  import Util from "../../Utility";

  export let label = "";
  export let placeholder = "";
  export let value;
  export let name;
  export let type = "text";
  export let form;
  export let maxlength = 100;
  export let minlength = 1;
  export let max = "";
  export let min = "";
  export let error = false;

</script>

<div class="flex-1 flex flex-col space-y-2">
  <label
    class="block uppercase text-dark-second dark:text-white text-xs font-bold"
    for="{value}"
  >
    {label}
  </label>
  <div class="relative w-full">
    <input
      type="{type == 'creditcard' || type == 'expdate' || type == 'cvv'
        ? 'text'
        : type}"
      name="{name}"
      value="{value}"
      maxlength="{maxlength}"
      minlength="{minlength}"
      pattern="{type == 'tel' ? 'd+' : null}"
      max="{max}"
      min="{min}"
      class="{type == 'number'
        ? 'input-number'
        : type == 'creditcard'
        ? 'input-creditcard'
        : type == 'expdate'
        ? 'input-exp'
        : type == 'cvv'
        ? 'input-cvv'
        : ''} appearance-none block w-full text-dark-second border dark:text-white dark:bg-dark-third rounded py-2 px-3 focus:ring-transparent focus:border-gray-800"
      placeholder="{placeholder}"
    />
  </div>
  {#if error}
  <p class="text-red-500 text-xs italic m-0">Please fill out this field.</p>
  {/if}
</div>
