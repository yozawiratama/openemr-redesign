<script>
    import {openInfoPath} from '../store';
    import { fade } from "svelte/transition";
    import Card from "../common/DataDisplay/Card.svelte";

    let visible = true;

    openInfoPath.subscribe(val => {
        visible = val;
    });
</script>

<div class="bg-gray-100">
    {#if visible}
        <div
            transition:fade
            class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 "
        >
            <Card title="Revenue" content={15000000} />
            <Card title="Patients" content={750} />
            <Card title="Visits" content={1557} />
            <Card title="Inpatients" content={156} />
        </div>
    {/if}
</div>
