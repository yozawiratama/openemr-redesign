<script>
    import Navbar from "../common/Navbar.svelte";
    import InfoCounter from "./InfoCounter.svelte";
    import Content from "./Content.svelte";

    let pages = [
        {
            text: "Calendar",
            value: "CALENDAR",
        }
    ];
    let selectedTabIndex

    function handleMenuClick(e){
        pages = [...new Set([...pages, e.detail])];
        selectedTabIndex = 2;
    }
</script>

<Navbar on:menu-click={handleMenuClick} />
<InfoCounter />
<Content bind:pages={pages} {selectedTabIndex} />
