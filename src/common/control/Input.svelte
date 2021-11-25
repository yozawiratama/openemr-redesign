<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Cleave from "cleave.js";
  import "cleave.js/dist/addons/cleave-phone.id";
  import Util from "../../Utility";
  import { onMount } from "svelte";

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
  export let withEye = type == "password" ? true : false;

  let showPass = false;
  let showHide = false;

  onMount(() => {
    const inputArr = document.getElementsByClassName("input-number");
    const inputCard = document.getElementsByClassName("input-creditcard");
    const inputExp = document.getElementsByClassName("input-exp");
    const inputCvv = document.getElementsByClassName("input-cvv");
    const fields = Array.from(inputArr);
    const fieldCard = Array.from(inputCard);
    const fieldsExp = Array.from(inputExp);
    const fieldsCvv = Array.from(inputCvv);

    if (type == "number") {
      fields.forEach(function (field) {
        new Cleave(field, {
          phone: true,
        });
      });
    }

    if (type == "creditcard") {
      fieldCard.forEach(function (field) {
        new Cleave(field, {
          delimiter: " ",
          blocks: [3, 3],
          numericOnly: true,
        });
      });
    }

    if (type == "expdate") {
      fieldsExp.forEach(function (field) {
        new Cleave(field, {
          date: true,
          datePattern: ["m", "d"],
        });
      });
    }

    if (type == "cvv") {
      fieldsCvv.forEach(function (field) {
        new Cleave(field, {
          blocks: [3],
          numericOnly: true,
        });
      });
    }
  });

  if ($form.fields[name]) {
    $form.fields[name].errors = "";
  }

  function handleInput(e) {
    value = e.target.value;
  }
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
        : ''} appearance-none block w-full text-dark-second {Util.validateErrorField(
        $form.fields,
        name,
      )
        ? 'border-red-500'
        : ''} border dark:text-white dark:bg-dark-third rounded py-2 px-3 focus:ring-transparent focus:border-gray-800"
      placeholder="{placeholder}"
      on:input="{handleInput}"
    />
    {#if withEye}
      <button
        type="button"
        on:click="{() => {
          if (!showPass) {
            type = 'text';
            showPass = !showPass;
          } else {
            type = 'password';
            showPass = !showPass;
          }
        }}"
        class="absolute right-0 inset-y-0 flex items-center pr-3 outline-none focus:ring-transparent focus:outline-none"
      >
        <i class="bx {showPass ? 'bx-show' : 'bx-hide'}"></i>
      </button>
    {/if}
  </div>
  {#if Util.validateInput($form.fields, name, "required")}
    <p class="text-red-500 text-xs italic m-0">Please fill out this field.</p>
  {/if}
  {#if Util.validateInput($form.fields, name, "equal")}
    <p class="text-red-500 text-xs italic m-0">Please repeat exact password.</p>
  {/if}
</div>
