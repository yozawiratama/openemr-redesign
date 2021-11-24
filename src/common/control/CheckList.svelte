<script>
    import { Random } from 'meteor/random'
    import { createEventDispatcher } from 'svelte';

    import Check from './Check.svelte'

    const dispatch = createEventDispatcher();

    export let data = []
    export let status = "primary"
    export let checkedItem = ""

    const name = `cbx-${Random.id(5)}`
<script>

    {#each data as item }
<Check bind:text={item.text} name={name} bind:value={item.value} {checked} on:change={()=>dispatch("change", item)} />
    {/each}