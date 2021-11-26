<script lang="ts">
    import Button from "../common/control/Button.svelte";
    import { pages } from "../store";
    import patients from "../patients";

    function handleAddMenu() {
        let menu = {
            text: "New",
            code: "NEW_PATIENT",
            desc: "Make new Patients",
            lock: false,
        };
        let temp = [...new Set([...$pages, menu])];
        pages.set(temp);
    }
</script>

<div class="flex flex-col">
    <section class="py-8 px-4 bg-blueGray-50">
        <div class="mt-2 xl:mb-0 px-1 mx-2">
            <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded "
            >
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center">
                        <div
                            class="relative w-full px-4 max-w-full flex-grow flex-1"
                        >
                            <h3
                                class="font-semibold text-base text-blueGray-700"
                            >
                                Patient List
                            </h3>
                        </div>
                        <div
                            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                        >
                            <button
                                on:click={handleAddMenu}
                                class="bg-primary text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button">Add new patient</button
                            >
                        </div>
                    </div>
                </div>

                <div class="block w-full overflow-x-auto">
                    <table
                        class="items-center bg-transparent w-full border-collapse "
                    >
                        <thead>
                            <tr>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                    Name
                                </th>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                    Visits
                                </th>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                    Gender
                                </th>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                    Age
                                </th>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                    Birthdate
                                </th>
                                <th
                                    class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                >
                                    Marital Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {#each patients as p}
                                <tr>
                                    <th
                                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 "
                                    >
                                        {p.name}
                                    </th>
                                    <td
                                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "
                                    >
                                        {p.visits}
                                    </td>
                                    <td
                                        class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                    >
                                        {p.gender ? "Male" : "Female"}
                                    </td>
                                    <td
                                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                    >
                                        {p.age}
                                    </td>
                                    <td
                                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                    >
                                        {p.birthdate}
                                    </td>
                                    <td
                                        class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                    >
                                        {p.marital ? "Married" : "Single"}
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</div>
