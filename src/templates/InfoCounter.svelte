<script>
    import { fade } from "svelte/transition";
    import Card from "../common/DataDisplay/Card.svelte";

    let visible = true;
</script>

<div class="bg-gray-100">
    {#if visible}
        <div
            transition:fade
            class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 "
        >
            <Card title="Patients" content={7500} />
            <Card title="Patients" content={7500} />
            <Card title="Patients" content={7500} />
            <Card title="Patients" content={7500} />
        </div>
    {/if}
    <button type="button" class="mx-auto" on:click={() => (visible = !visible)}
        >
        {#if visible}
        <i class="bx bxs-chevron-up" />
        {:else}
        <i class="bx bxs-chevron-down" />
        {/if}
        </button
    >
</div>
