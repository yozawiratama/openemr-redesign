<script>
    import { pages, openInfoPath } from "../store";

    import Dashboard from "./Dashboard.svelte";
    import Calendar from "./Calendar.svelte";
    import PatientList from "./PatientList.svelte";
    import PatientDetail from "./PatientDetail.svelte";
    import PatientNew from "./PatientNew.svelte";

    let currentPage = {};
    let isFirst = true;

    pages.subscribe((val) => {
        if (isFirst && val.length > 0) {
            currentPage = val[0];
            isFirst = false;
        }
    });

    function handleCloseTab(page) {
        let temp = $pages.filter((p) => p.value != page.value);
        pages.set(temp);
        currentPage = page;
    }

    function handleLockTab(page) {
        let temp = $pages.map((it) => {
            if (it.value == page.value) {
                it.lock = !it.lock;
            }
            return it;
        });
        pages.set(temp);
    }
</script>

<div class="bg-white">
    <nav class="flex flex-col sm:flex-row">
        <button
            on:click={() => openInfoPath.set(!$openInfoPath)}
            class="text-gray-600 py-2 px-6 block hover:text-blue-500 focus:outline-none "
        >
            {#if $openInfoPath}
                <i class="bx bx-chevron-up" />
            {:else}
                <i class="bx bx-chevron-down" />
            {/if}
        </button>
        {#each $pages as page}
            <div
                on:click={() => (currentPage = page)}
                class="py-2 pl-6 pr-4 block  focus:outline-none {currentPage.value ==
                    page.value && !page.lock
                    ? 'text-blue-500 border-b-2 font-medium border-blue-500'
                    : ''} {page.lock
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-blue-500'}"
            >
                <span>{page.text}</span>
                <span
                    class="ml-1 hover:bg-blue-900 hover:text-white rounded"
                    on:click={() => {
                        handleLockTab(page);
                    }}
                >
                    {#if page.lock}
                        <i class="bx bxs-lock-alt" />
                    {:else}
                        <i class="bx bx-lock-open-alt" />
                    {/if}
                </span>
                <span
                    class="ml-1 hover:bg-blue-900 hover:text-white rounded"
                    on:click={() => {
                        handleCloseTab(page);
                    }}><i class="bx bx-x" /></span
                >
            </div>
        {/each}
    </nav>
</div>

<div class="flex flex-row bg-gray-50">
    {#each $pages.filter((it) => it.lock) as page}
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
