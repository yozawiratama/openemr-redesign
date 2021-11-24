<script>
	import { createEventDispatcher } from "svelte";
	import { fade } from "svelte/transition";
	const dispatch = createEventDispatcher();

	export let title = "";
	export let confirm = false;
	export let confirmText = "Are you sure want to delete ?";
	export let loading = false;
	export let size = "default";
	export let index = 1;
	export let closed = false;
	export let withTitle = true;
	export let modalPrint = false;

	let show = false;

	export function toggle() {
		show = !show;
		toggleModal();
	}

	export function close() {
		show = false;
	}

	function toggleModal() {
		const body = document.body;
		body.classList.add("modal-active");
	}

	let classes;

	if (loading) {
		classes =
			"modal-container flex flex-col items-center justify-center dark:bg-dark-main mx-auto rounded-full z-50 overflow-y  max-h-screen overflow-x-auto";
	} else {
		classes =
			"modal-container bg-white dark:bg-dark-main mx-auto rounded shadow-lg z-50 overflow-y border border-white max-h-screen overflow-x-auto";
	}
</script>

{#if show}
	<div
		id="modal"
		class="modal fixed w-full {index == 1
			? 'z-10'
			: `z-${index}`} h-full top-0 left-0 flex items-center justify-center overflow-y-auto"
		in:fade="{{ duration: 250 }}"
		out:fade="{{ duration: 250 }}"
	>
		<div class=" absolute w-full h-full bg-gray-900 opacity-50"></div>
		<div
			class="modal-overlay absolute w-full h-full backdrop-filter backdrop-blur-sm"
		></div>

		<div
			class="{size === 'large'
				? 'w-3/4 lg:w-2/3'
				: size === 'default'
				? 'w-2/4'
				: size === 'small'
				? 'w-full md:w-1/4'
				: 'w-3/4'} {classes}"
		>
			<div class="modal-content {loading ? 'p-6' : 'p-6 text-left'} ">
				{#if !loading}
					<!--Title-->
					{#if withTitle}
						<div class="flex justify-between items-center mb-5">
							<p class="text-lg font-semibold text-dark-second dark:text-white"
								>{title}</p
							>
							<div
								class="modal-close cursor-pointer"
								on:click="{closed ? dispatch('close') : toggle}"
							>
								<svg
									class="fill-current text-dark-second dark:text-white"
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 18 18"
								>
									<path
										d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
									></path>
								</svg>
							</div>
						</div>
						<hr class="mb-5" />
					{/if}
				{/if}
				{#if confirm}
					<div class="p-3 text-xl text-center dark:text-white"
						>{confirmText}</div
					>
					{#if !modalPrint}
						<div class="flex justify-center items-center pt-2">
							<button
								class="px-4 bg-red-500 p-2 rounded-lg text-white hover:opacity-95 outline-none"
								on:click|preventDefault="{() => dispatch('cancel')}">No</button
							>
							<button
								on:click|preventDefault="{() => dispatch('submit')}"
								class="px-4 bg-transparent p-2 rounded-lg text-white bg-green-500 hover:opacity-95 ml-2 outline-none"
							>
								Yes
							</button>
						</div>
					{:else}
						<div class="flex justify-center items-center pt-2">
							<button
								class="px-4 bg-red-500 p-2 rounded-lg text-white hover:opacity-95 outline-none"
								on:click|preventDefault="{() => dispatch('cancel')}">Close</button
							>
              <button
								on:click|preventDefault="{() => dispatch('printCo')}"
								class="px-4 bg-transparent p-2 rounded-lg text-white bg-primary hover:opacity-70 ml-2 outline-none"
							>
								Print CO
							</button>
							<button
								on:click|preventDefault="{() => dispatch('print')}"
								class="px-4 bg-transparent p-2 rounded-lg text-white bg-primary hover:opacity-95 ml-2 outline-none"
							>
								Print Receipt
							</button>
						</div>
					{/if}
				{:else}
					<!--Body-->
					<slot />
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		transition: opacity 0.25s ease;
	}
</style>
