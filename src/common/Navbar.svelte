<script>
    import { pages } from "../store";
    import menus from "../menus";

    let open = true;

    function handleClick(menu) {
        menu.lock = false;
        let temp = [...new Set([...$pages, menu])];
        pages.set(temp);
    }
</script>

<div class="antialiased bg-primary">
    <div class="w-full text-white bg-primary">
        <div
            class="flex flex-col px-4 mx-1 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
            <div class="flex flex-row items-center justify-between p-3">
                <a
                    on:click|preventDefault={() => {}}
                    href="#"
                    class="text-lg font-semibold tracking-widest text-white uppercase rounded-lg"
                    >Open EMR</a
                >
                <button
                    class="rounded-lg md:hidden"
                    on:click={() => (open = !open)}
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="w-6 h-6"
                    >
                        <path
                            x-show="!open"
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        />
                        <path
                            x-show="open"
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <nav
                class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:flex-row {open
                    ? 'flex'
                    : 'hidden'}"
            >
                <a
                    class="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-2 hover:text-white focus:text-gray-900 hover:bg-primarydark focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                >
                    <i class="bx bxs-calendar" />
                </a>
                {#each menus as menu}
                    {#if menu.child && menu.child.length > 0}
                        <div class="group inline-block relative">
                            <button
                                class="flex flex-row group-hover:text-white group-hover:bg-primarydark border-0 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-2 hover:text-white hover:bg-primarydark"
                            >
                                <span>{menu.text}</span>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                                    ><path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    /></svg
                                >
                            </button>
                            <div
                                class="absolute hidden group-hover:block text-gray-900 right-0 w-full md:max-w-screen-sm md:w-screen origin-top-right"
                            >
                                <div
                                    class="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700"
                                >
                                    <div
                                        class="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        {#each menu.child as child}
                                            <a
                                                on:click|preventDefault={() =>
                                                    handleClick(child)}
                                                class="flex flex font-bold row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                href="#"
                                            >
                                                <div
                                                    class="bg-teal-500 text-primarydark rounded-lg p-3 text-lg"
                                                >
                                                    <i
                                                        class="bx bxs-user-circle bx-md"
                                                    />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="font-semibold">
                                                        {child.text}
                                                    </p>
                                                    <p class="text-sm">
                                                        {child.desc}
                                                    </p>
                                                </div>
                                            </a>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                    {:else}
                        <a
                            on:click|preventDefault={() => handleClick(menu)}
                            class="px-2 py-2 mt-2 text-sm text-white font-semibold bg-transparent rounded-lg md:mt-0 md:ml-2"
                            href="#">{menu.text}</a
                        >
                    {/if}
                {/each}
                <div class="group inline-block absolute right-4">
                    <button
                        class="flex flex-row group-hover:text-white group-hover:bg-primarydark border-0 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-2 hover:text-white hover:bg-primarydark"
                    >
                        <span><i class="bx bx-user" /> Billy Smith</span>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                            ><path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            /></svg
                        >
                    </button>
                    <div
                        class="absolute hidden group-hover:block text-gray-900 right-0 w-full md:max-w-screen-sm md:w-max origin-top-right"
                    >
                        <div
                            class="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700"
                        >
                            <div class="grid grid-cols-1 gap-4">
                                <a
                                    on:click|preventDefault={() => {}}
                                    class="flex flex font-bold row items-start rounded-lg bg-transparent p-1 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#"
                                >
                                    <div class="ml-3">
                                        <p class="font-semibold">Settings</p>
                                    </div>
                                </a>
                                <a
                                    on:click|preventDefault={() => {}}
                                    class="flex flex font-bold row items-start rounded-lg bg-transparent p-1 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#"
                                >
                                    <div class="ml-3">
                                        <p class="font-semibold">
                                            Change Passwords
                                        </p>
                                    </div>
                                </a>
                                <a
                                    on:click|preventDefault={() => {}}
                                    class="flex flex font-bold row items-start rounded-lg bg-transparent p-1 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    href="#"
                                >
                                    <div class="ml-3">
                                        <p class="font-semibold">Log out</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
