<script>
	import Util from '../Util/Utility.ts';
	import Cleave from 'cleave.js';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	onMount(() => {
		const inputArr = document.getElementsByClassName('input-money');
		const fields = Array.from(inputArr);

		fields.forEach(function (field) {
			new Cleave(field, {
				numeral: true,
				prefix: 'Rp. ',
				numeralDecimalMark: ',',
				delimiter: '.',
			});
		});
	});

	export let label = '';
	export let placeholder = '';
	export let value;
	// let valueX = 0;
	export let name;
	export let form;
  export let extClass = "";
  export let autofocus = false;
	export let disabled = false;
	export let noLabel = false;
	export let hint = false;
	export let hintText = '';

	if (form && $form.fields[name]) {
		$form.fields[name].errors = '';
	}

	function handleInput(evt) {
		const { target } = evt;
		value = target.value;
	}
</script>

<div class="flex-1 flex flex-col space-y-2">
	{#if !noLabel}
		<label class="block text-dark-second text-xs font-bold uppercase" for="{value}">
			{label}
		</label>
	{/if}

	<div class="relative w-full">
		<!-- svelte-ignore a11y-autofocus -->
		<input
			type="text"
			value="{value}"
			name="{name}"
			step="0.01"
			class="input-money appearance-none {form &&
			Util.validateErrorField($form.fields, name)
				? 'border-red-500'
				: ''} block w-full text-xl font-bold text-dark-second border dark:text-white dark:bg-dark-third rounded py-2 px-3  {disabled
				? ' text-gray-500 border-gray-400'
				: ''} focus:ring-transparent  focus:border-gray-800 {extClass}"
			placeholder="{placeholder}"
			disabled="{disabled}"
      autofocus="{autofocus}"
			on:input="{handleInput}"
			on:change="{dispatch('change', value)}"
		/>
		<div class="absolute top-1.5 right-2">
			<slot />
		</div>
	</div>

	{#if form && Util.validateInput($form.fields, name, 'required')}
		<p class="text-red-500 text-xs italic">Please fill out this field.</p>
	{/if}

	{#if hint}
		<p class="text-gray-600 text-xs italic">{hintText}</p>
	{/if}
</div>
