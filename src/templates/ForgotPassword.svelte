<script lang="ts">
    import { validateErrorField } from "../helpers/FormHelper";
    import { createEventDispatcher } from "svelte";
    import { form as Form } from "svelte-forms";
    const dispatch = createEventDispatcher();

    let email = "";
    let password = "";
    let error = null;

    let pwIcon = "bx-show";
    let pwType = "password";

    const form = Form(
        () => ({
            email: { value: email, validators: ["required"] },
        }),
        {
            initCheck: false,
            validateOnChange: false,
            stopAtFirstError: false,
            stopAtFirstFieldError: false,
        }
    );
</script>

<form on:submit|preventDefault={() => dispatch("submit")} class="px-4 pt-20">
    <div class="text-center text-3xl font-semibold text-dark-second">
        Open EMR
    </div>
    <hr class="my-7 px-5" />
    {#if error}
        <div class="p-4 bg-red-500 w-full text-white my-7 text-center">
            {error}
        </div>
    {/if}
    <input
        type="email"
        bind:value={email}
        required
        placeholder="Email"
        class="appearance-none block w-full focus:ring-primary focus:border-primary text-sm text-dark-second border dark:text-white dark:bg-dark-third rounded py-2 px-4 mb-6
    {validateErrorField($form.fields, 'email') ? 'border-red-500' : ''}"
    />
    <button
        type="submit"
        class="p-2 rounded-full text-md text-white bg-primary hover:opacity-90 focus:outline-none disabled:opacity-50 w-full mb-5"
    >
        Send Email to Retrieve New Password
    </button>
    <hr />
    <button
        type="submit"
        class="p-2 rounded-full text-xs bg-gray-100 hover:bg-gray-200 focus:outline-none border-2 border-gray-300 disabled:opacity-50 w-full mt-5"
    >
        Back to Login
    </button>
</form>
