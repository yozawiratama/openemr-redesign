<script>
    import { pages } from "../store";
    import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";

    import Dashboard from "./Dashboard.svelte";
    import Calendar from "./Calendar.svelte";
    import PatientList from "./PatientList.svelte";
    import PatientDetail from "./PatientDetail.svelte";
    import PatientNew from "./PatientNew.svelte";

    let currentPage = {};
    let isFirst = true;

    pages.subscribe(val => {
        if(isFirst && val.length > 0){
            currentPage = val[0];
            isFirst = false;
        }
    });

    function handleCloseTab(page) {
        let temp = $pages.filter((p) => p.value != page.value);
        pages.set(temp);
        currentPage = page;
    }

    function handleLockTab(page){
        let temp = $pages.map(it => {
            if(it.value == page.value){
                it.lock = !it.lock;
            }
            return it;
        })
        pages.set(temp);
    }
</script>

{#each $pages as page}
    <div on:click={() => (currentPage = page)}>
        <span>{page.text}</span>
        <span
            on:click={() => {
                handleLockTab(page);
            }}>
            {#if page.lock}
                <i class='bx bxs-lock-alt'></i>
            {:else}
                <i class='bx bx-lock-open-alt' ></i>
            {/if}
            </span
        >
        <span
            on:click={() => {
                handleCloseTab(page);
            }}><i class="bx bx-x" /></span
        >
    </div>
{/each}

<div>
    {#each $pages.filter(it => it.lock) as page}
        {#if page.value != currentPage?.value}
            {#if page?.value == "CALENDAR"}
                <Calendar />
            {:else if page?.value == "DASHBOARD"}
                <Dashboard />
            {:else if page?.value == "PATIENTS"}
                <PatientList />
            {:else if page?.value == "NEW_PATIENT"}
                <PatientNew />
            {:else if page?.value == "PATIENT_DETAIL"}
                <PatientDetail />
            {/if}
        {/if}
    {/each}
</div>

<div>
    {#if currentPage?.value == "CALENDAR"}
        <Calendar />
    {:else if currentPage?.value == "DASHBOARD"}
        <Dashboard />
    {:else if currentPage?.value == "PATIENTS"}
        <PatientList />
    {:else if currentPage?.value == "NEW_PATIENT"}
        <PatientNew />
    {:else if currentPage?.value == "PATIENT_DETAIL"}
        <PatientDetail />
    {/if}
</div>
<!-- 
<Tabs>
    <TabList>
        {#each $pages as page}
            <Tab>
                <span>{page.text}</span>
                <span
                    on:click={() => {
                        alert("clicked");
                    }}><i class="bx bxs-lock-open-alt" /></span
                >
                <span
                    on:click={() => {
                        handleCloseTab(page);
                    }}><i class="bx bx-x" /></span
                >
            </Tab>
        {/each}
    </TabList>

    {#each $pages as page}
        <TabPanel>
            {#if page.value == "CALENDAR"}
                <Calendar />
            {:else if page.value == "DASHBOARD"}
                <Dashboard />
            {:else if page.value == "PATIENTS"}
                <PatientList />
            {:else if page.value == "NEW_PATIENT"}
                <PatientNew />
            {:else if page.value == "PATIENT_DETAIL"}
                <PatientDetail />
            {/if}
        </TabPanel>
    {/each}
</Tabs> -->
