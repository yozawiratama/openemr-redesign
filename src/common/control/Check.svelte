<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let status = "primary"
    export let disabled = false
    export let text = ""
    export let value = ""
    export let name = ""
    export let checked = false
</script>

<label>
<input type="checkbox" on:change={()=>dispatch("change")} {checked} {name} {value} {disabled} /> {text}
</label>