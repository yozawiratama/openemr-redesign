<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let status = "primary";
  export let disabled = false;
  export let text = "";
  export let value = "";
  export let name = "";
  export let checked = false;
  let classes = "";

  if (status === "primary") {
    classes = "text-primary";
  } else if (status === "danger") {
    classes = "text-red-500";
  } else if (status === "info") {
    classes = "text-blue-500";
  } else if (status === "warning") {
    classes = "text-yellow-400";
  }else if (status === "warning") {
    classes = "text-yellow-400";
  }else if (status === "gray") {
    classes = "text-gray-500";
  }else if (status === "dark") {
    classes = "text-gray-800";
  }else if (status === "black") {
    classes = "text-black";
  }else if (status === "light") {
    classes = "text-white-700";
  }else if (status === "white") {
    classes = "text-white";
  }
</script>

<label class="flex items-center">
  <input
    type="checkbox"
    class="form-radio h-4 w-4 outline-none focus:outline-none focus-within:ring-transparent cursor-pointer {classes}"
    checked="{checked}"
    name="{name}"
    value="{value}"
    disabled="{disabled}"
    on:change="{() => dispatch('change')}"
  /><span class="ml-2 text-gray-800 text-sm">{text}</span>
</label>
