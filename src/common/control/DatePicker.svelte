<script>
	import { format, parse } from 'date-fns';
	import Util from '../Util/Utility.ts';
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	export let form = undefined;
	export let name = undefined;
	export let pattern = 'dd MMM yyyy';
	export let patternTime = 'H:i';

	export let value = null;
	export let from = null;
	export let to = null;

	export let smallLabel = '';
	export let label = undefined;
	export let circle = undefined;
	export let ranged = false;
	export let isTime = false;
	export let isDate = true;
	export let disabled = false;
	export let noIcon = false;
	export let textSize = 'sm';

	let element;

	function formatDate(value1, value2) {
		return `${format(value1, pattern)} to ${format(value2, pattern)}`;
	}

	let formattedValue = ranged
		? formatDate(from, to)
		: isTime
		? value
		: format(value, pattern);

	if (form && $form.fields[name]) {
		$form.fields[name].errors = '';
	}

	onMount(() => {
		if (ranged) {
			if (!from) {
				from = new Date();
			}
			if (!to) {
				to = new Date();
			}
		} else {
			if (!isTime && !value) {
				value = new Date();
			}
		}

		if (element) {
			const options = ranged
				? {
						onChange: (selectedDates, dateStr, instance) => {
							if (selectedDates.length < 2) {
								return;
							}
							const fromDate = new Date(selectedDates[0]);
							const toDate = new Date(selectedDates[1]);
							fromDate.setHours(0, 0, 1);
							toDate.setHours(23, 59, 59);
							from = fromDate;
							to = toDate;
						},
						parseDate: (datestr) => {
							return parse(datestr, pattern, new Date());
						},
						formatDate: (date, _pattern, locale) => {
							return format(date, pattern);
						},
						mode: 'range',
				  }
				: isDate && isTime
				? {
						enableTime: true,
						dateFormat: 'd M Y H:i',
						time_24hr: true,
						defaultDate: value,
						onChange: (selectedDates, dateStr, instance) => {
							value = new Date(selectedDates[0]);
						},
				  }
				: !isDate && isTime
				? {
						enableTime: true,
						noCalendar: true,
						time_24hr: true,
						dateFormat: 'H:i',
						onChange: (val) => {
							const newDate = new Date(val);
							value = format(newDate, 'HH:mm');
						},
				  }
				: {
						onChange: (selectedDates, dateStr, instance) => {
							value = new Date(selectedDates[0]);
						},
						parseDate: (datestr) => {
							return parse(datestr, pattern, value);
						},
						formatDate: (date, _pattern, locale) => {
							return format(date, pattern);
						},
				  };
			flatpickr(
				element,
				disabled ? { ...options, clickOpens: false } : options,
			);
		}
	});
</script>

<div>
	{#if label}
		<label class="block text-primary text-sm font-bold mb-2" for="{value}">
			{label}
		</label>
	{/if}
	<div class="relative">
		<input
			type="text"
			bind:this="{element}"
			value="{formattedValue}"
			class="{form && Util.validateErrorField($form.fields, name)
				? 'border-red-500'
				: 'border-gray-800'} 
          {circle ? 'rounded-full' : 'rounded'} {disabled
				? 'opacity-50'
				: ''} relative block w-full text-left text-{textSize} text-dark-second border dark:text-white dark:bg-dark-third py-2 px-3 cursor-pointer hover:bg-gray-100"
			placeholder="{ranged
				? 'Select date range'
				: isTime && isDate
				? 'Select Date'
				: 'Select Time'}"
		/>
		{#if smallLabel}
			<span class="absolute -top-2.5 left-1 text-xs bg-white px-1"
				>{smallLabel}</span
			>
		{/if}
		{#if !noIcon}
			<div class="absolute top-1.5 right-2">
				<i class="bx bx-calendar bx-sm text-primary"></i>
			</div>
		{/if}
	</div>
	{#if form && Util.validateInput($form.fields, name, 'required')}
		<p class="text-red-500 text-xs italic">Please fill out this field.</p>
	{/if}
</div>
