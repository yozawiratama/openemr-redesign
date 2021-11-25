<script lang="ts">
	import { pages } from "./store";
	import Login from "./templates/Login.svelte";
	import ForgotPassword from "./templates/ForgotPassword.svelte";
	import Main from "./templates/Main.svelte";
	import { onMount } from "svelte";
	export let name: string;

	let state = "MAIN";

	onMount(() => {
		pages.set([
			{
				text: "Calendar",
				value: "CALENDAR",
				lock: false,
			},
		]);
	});
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

	body {
		padding: 0;
	}
</style>
