<script>
    export let value = 50;
    export let max = 100;
    export let status = "primary";
</script>

<div class="h-3 relative max-w-xl rounded-full overflow-hidden">
    <div class="w-full h-full bg-gray-200 absolute" />
    <div class="h-full bg-green-500 absolute" style="width:{value / max}%" />
</div>
