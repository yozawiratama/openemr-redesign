<script>
    import Input from "../common/control/Input.svelte";
    import Radio from "../common/control/Radio.svelte";
</script>

<div class="flex flex-col">
    <section class="py-8 px-4 bg-blueGray-50">
        <div class="mt-2 xl:mb-0 px-1 mx-2 max-w-3xl">
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
                                New Patient
                            </h3>
                        </div>
                        <div
                            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                        />
                    </div>
                </div>

                <div class="p-4">
                    <div class="mb-3">
                        <div class="flex-1 flex flex-col space-y-2">
                            <label
                                class="block uppercase text-dark-second dark:text-white text-xs font-bold"
                                for="Name"
                            >
                                Name
                            </label>
                            <div class="flex flex-row">
                                <select
                                    class="appearance-none mr-1 block w-full text-dark-second border dark:text-white dark:bg-dark-third rounded py-2 px-3 focus:ring-transparent focus:border-gray-800"
                                >
                                    <option>mr</option>
                                    <option>ms</option>
                                    <option>mrs</option>
                                </select>
                                <input
                                    type="text"
                                    class="appearance-none mr-1 block w-full text-dark-second border dark:text-white dark:bg-dark-third rounded py-2 px-3 focus:ring-transparent focus:border-gray-800"
                                    placeholder="First"
                                />
                                <input
                                    type="text"
                                    class="appearance-none mr-1 block w-full text-dark-second border dark:text-white dark:bg-dark-third rounded py-2 px-3 focus:ring-transparent focus:border-gray-800"
                                    placeholder="Mid"
                                />
                                <input
                                    type="text"
                                    class="appearance-none block w-full text-dark-second border dark:text-white dark:bg-dark-third rounded py-2 px-3 focus:ring-transparent focus:border-gray-800"
                                    placeholder="Last"
                                />
                            </div>
                            <!-- <p class="text-red-500 text-xs italic m-0">
                                Please fill out this field.
                            </p> -->
                        </div>
                    </div>
                    <div class="mb-3">
                        <Input label="DOB" placeholder="DOB" value="" />
                    </div>
                    <div class="mb-3">
                        <label
                            class="block uppercase text-dark-second dark:text-white text-xs font-bold"
                            for="Name"
                        >
                            Sex
                        </label>
                        <Radio text="Male" />
                        <Radio text="Female" />
                    </div>
                    <div class="mb-3">
                        <Input label="S.S" placeholder="ss" value="" />
                    </div>
                    <div class="mb-3">
                        <Input
                            label="External ID"
                            placeholder="extID"
                            value=""
                        />
                    </div>
                    <div class="mb-3">
                        <Input
                            label="License ID"
                            placeholder="license id"
                            value=""
                        />
                    </div>
                    <div class="mb-3">
                        <label
                            class="block uppercase text-dark-second dark:text-white text-xs font-bold"
                            for="Name"
                        >
                            Marital Status
                        </label>
                        <Radio text="Single" />
                        <Radio text="Married" />
                        <Radio text="Divorce" />
                    </div>
                    
                </div>
                <button
                    class="bg-primary text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">Add new patient</button
                >
            </div>
        </div>
    </section>
</div>
