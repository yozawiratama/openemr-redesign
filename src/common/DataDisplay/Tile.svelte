<script>
    export let title = "";
    export let description = null;
    export let info = "";
    export let icon = null;
    export let status = "primary";
    export let extcss = "";
    let classes = "";
  
    if (status === "primary") {
      classes = "border-primary";
    } else if (status === "warning") {
      classes = "border-yellow-400";
    } else if (status === "danger") {
      classes = "border-red-500";
    } else if (status === "info") {
      classes = "border-blue-500";
    } else if (status === "gray") {
      classes = "border-gray-400";
    } else if (status === "dark") {
      classes = "border-gray-800";
    } else if (status === "black") {
      classes = "border-black";
    } else if (status === "light") {
      classes = "border-gray-200";
    } else if (status === "white") {
      classes = "border-white";
    }
  </script>
  
  <div
    class="flex-1 flex justify-between items-center relative p-3 border border-gray-800 {extcss}"
  >
    <div class="absolute border-2 {classes} left-0 h-full top-0 bottom-0"
    ></div>
    <div class="flex flex-col">
      <h4 class="text-md font-medium">{title}</h4>
      <small class="text-sm">{description? description : ''}</small>
    </div>
    <div class="flex flex-col items-end">
      {#if icon}
        <i class="{icon} text-3xl"></i>
      {/if}
      <span class="text-md font-medium">{info}</span>
    </div>
  </div>
  