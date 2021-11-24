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
            password: { value: password, validators: ["required"] },
        }),
        {
            initCheck: false,
            validateOnChange: false,
            stopAtFirstError: false,
            stopAtFirstFieldError: false,
        }
    );

    const handleInputPassword = (e) => {
        password = pwType.match(/^(number|range)$/)
            ? +e.target.value
            : e.target.value;
    };

    function togglePassword() {
        pwIcon === "bx-show"
            ? (pwIcon = "bx-hide opacity-50")
            : (pwIcon = "bx-show");
        pwType === "password" ? (pwType = "text") : (pwType = "password");
    }
</script>

<form on:submit|preventDefault={() => dispatch("submit")} class="px-4 pt-20">
    <div class="text-center text-3xl font-semibold text-dark-second">Open EMR</div>
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
    <div class="flex">
        <input
            type={pwType}
            required
            placeholder="Password"
            on:input={handleInputPassword}
            class="appearance-none block w-full focus:ring-primary focus:border-primary text-sm text-dark-second border dark:text-white dark:bg-dark-third rounded py-2 pl-4 pr-12 mb-2
      {validateErrorField($form.fields, 'password')
                ? 'border-red-500'
                : ''}"
        /><i
            class="bx {pwIcon} bx-sm mt-2 -ml-10 cursor-pointer"
            on:click={togglePassword}
        />
    </div>
    <div
        class="text-right text-xs font-semibold text-primary mb-10 cursor-pointer"
    >
        Forgot password
    </div>
    <button
        type="submit"
        class="p-2 rounded-full text-md text-white bg-primary hover:opacity-90 focus:outline-none disabled:opacity-50 w-full mb-6"
    >
        Login
    </button>
    <!-- <button
    type="submit"
    class="p-2 rounded-full text-xs bg-gray-100 hover:opacity-90 focus:outline-none border-2 border-gray-300 disabled:opacity-50 w-full"
  >
    Sign up
  </button> -->
</form>
