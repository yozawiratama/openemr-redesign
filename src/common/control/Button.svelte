<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let appearance = "filled"; // filled, outline, ghost
  export let status = "primary"; // primary, danger, warning, info, gray, black, dark, light, white
  export let size = "medium"; // large, medium, small
  export let leftIcon = null;
  export let rightIcon = null;
  export let disabled = false;
  export let shadow = false;
  export let rounded = false;
  export let type = "button";
  export let extClass = "";

  let classes = "";
  let statusClasses = "";
  let outlineClasses = "";
  let ghostClasses = "";
  // TODO: logic here

  if (status === "primary") {
    statusClasses = "bg-primary text-white";
    outlineClasses = "border-primary text-primary";
    ghostClasses = "text-primary";
  } else if (status === "danger") {
    statusClasses = "bg-red-500 text-white";
    outlineClasses = "border-red-500 text-red-500";
    ghostClasses = "text-red-500";
  } else if (status === "success") {
    statusClasses = "bg-green-500 text-white";
    outlineClasses = "border-green-500 text-green-500";
    ghostClasses = "text-green-500";
  } else if (status === "info") {
    statusClasses = "bg-blue-500 text-white";
    outlineClasses = "border-blue-500 text-blue-500";
    ghostClasses = "text-blue-500";
  } else if (status === "warning") {
    statusClasses = "bg-yellow-400 text-white";
    outlineClasses = "border-yellow-400 text-yellow-400";
    ghostClasses = "text-yellow-400";
  } else if (status === "gray") {
    statusClasses = "bg-gray-500 text-white";
    outlineClasses = "border-gray-500 text-gray-600";
    ghostClasses = "text-gray-500";
  } else if (status === "black") {
    statusClasses = "bg-black text-white";
    outlineClasses = "border-black text-black";
    ghostClasses = "text-black";
  } else if (status === "dark") {
    statusClasses = "bg-gray-800 text-white";
    outlineClasses = "border-gray-800 text-gray-800";
    ghostClasses = "text-gray-800";
  } else if (status === "light") {
    statusClasses = "bg-white-700 text-gray-800";
    outlineClasses = "border-white-700 text-white-700";
    ghostClasses = "text-white-700";
  } else {
    statusClasses = "bg-white text-gray-800";
    outlineClasses = "border-white text-white";
    ghostClasses = "text-white";
  }

  if (appearance === "filled") {
    classes = `outline-none focus:outline-none ease-linear transition-all duration-150 px-3 py-1 ${
      rounded ? "rounded-full" : "rounded"
    } hover:opacity-90 ${statusClasses} ${shadow ? "shadow-md" : ""} ${
      size === "large" ? "text-lg" : size === "medium" ? "text-md" : "text-sm"
    } ${disabled ? "opacity-80 cursor-default" : ""}`;
  } else if (appearance === "outline") {
    classes = `outline-none focus:outline-none ease-linear transition-all duration-150 px-3 py-1 ${
      rounded ? "rounded-full" : "rounded"
    } hover:opacity-90 bg-transparent border-2 ${outlineClasses} ${
      shadow ? "shadow-md" : ""
    } ${
      size === "large" ? "text-lg" : size === "medium" ? "text-md" : "text-sm"
    } ${disabled ? "opacity-80 cursor-default" : ""}`;
  } else if (appearance === "ghost") {
    classes = `outline-none focus:outline-none ease-linear transition-all duration-150 px-3 py-1 ${
      rounded ? "rounded-full" : "rounded"
    } hover:opacity-90 bg-transparent ${ghostClasses} shadow-lg ${
      size === "large" ? "text-lg" : size === "medium" ? "text-md" : "text-sm"
    } ${disabled ? "opacity-80 cursor-default" : ""}`;
  }
</script>

<button
  {type}
  class="{classes} {extClass} hide-print"
  {disabled}
  on:click|preventDefault={() => dispatch("click")}
>
  {#if leftIcon}
    <i class={leftIcon} />
  {/if}

  <slot />

  {#if rightIcon}
    <i class={rightIcon} />
  {/if}
</button>

<style>
  @media print {
    .hide-print {
      display: none;
    }
  }
</style>
