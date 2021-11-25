<script>
    import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";

    export let pages = [];
    export let selectedTabIndex = 0;

    function handleCloseTab(page){
        pages = pages.filter(p => p.value != page.value );
        console.log(pages);
    }
</script>

<Tabs {selectedTabIndex}>
    <TabList>
        {#each pages as page}
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

    {#each pages as page}
        <TabPanel>
            <h2>{page.text}</h2>
        </TabPanel>
    {/each}
</Tabs>
