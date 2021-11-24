<script>
	import Util from "../Util/Utility";
	export let label = "";
	export let placeholder = "";
	export let value = "";
	export let name = "";
	export let form;
	export let maxlength = 10;

	if (form && $form.fields[name]) {
		$form.fields[name].errors = "";
	}

	function handleInput(e) {
		if (value.length <= maxlength) {
			value = e.target.value;
		}
	}
</script>

<label
	class="block tracking-wide text-primary text-sm font-bold mb-2 dark:text-white"
	for="{value}"
>
	{label}
</label>
<textarea
	value="{value || ''}"
	class="appearance-none block w-full text-sm text-dark-second border dark:text-white dark:bg-dark-third rounded py-2 px-3 focus:ring-transparent 
      {form && Util.validateErrorField($form.fields, name)
		? 'border-red-500'
		: 'border-gray-800'} focus:border-gray-800"
	rows="3"
	maxlength="{maxlength != 10 ? maxlength : ''}"
	placeholder="{placeholder}"
	on:input="{handleInput}"></textarea>
{#if maxlength != 10}
	<p
		class="{value.length == maxlength
			? 'text-red-500'
			: 'text-gray-600'} text-xs italic text-right">{value.length} / {maxlength}</p
	>
{/if}
{#if form}
	{#if Util.validateInput($form.fields, name, "required")}
		<p class="text-red-500 text-xs italic">Please fill out this field.</p>
	{/if}
	{#if Util.validateInput($form.fields, name, "max")}
		<p class="text-red-500 text-xs italic text-right">Max {maxlength} char.</p>
	{/if}
{/if}
