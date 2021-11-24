<script lang="ts">
	import Login from "./templates/Login.svelte";
	import ForgotPassword from "./templates/ForgotPassword.svelte";
	import Main from "./templates/Main.svelte";
	export let name: string;

	let state = "MAIN";
</script>

<main>
	{#if state == "LOGIN"}
		<Login />
	{:else if state == "FORGOT_PASSWORD"}
		<ForgotPassword />
	{:else}
		<Main />
	{/if}
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
