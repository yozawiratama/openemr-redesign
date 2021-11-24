<script>
	import ImageKit from 'imagekit-javascript';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Button from '../control/Button.svelte';

	export let title = '';
	export let size = 'medium';
	export let image = '';
	let noImg = 'https://bit.ly/3pPY1jc';
	export let description = '';
	export let action = true;
	export let actionType;
	export let actionLabel = actionType == 'file' ? 'Upload File' : 'Add';
	export let actionStatus = 'primary';

	let uploading = false;

	let classes = '';

	if (size === 'small') {
		classes = 'w-15 h-15';
	} else if (size === 'medium') {
		classes = 'w-24 h-24';
	} else if (size === 'large') {
		classes = 'w-50 h-50';
	}

	function handleSectionImageUpload(files) {
		uploading = true;
		var imagekit = new ImageKit({
			publicKey: 'public_Yq/EBehF/1Xwmc+XjZGkEqsSh6w=',
			urlEndpoint: 'https://ik.imagekit.io/78p1kjbqlaj/',
			authenticationEndpoint: 'https://dev-admin.kopibajawaflores.id/imgkit',
		});
		imagekit.upload(
			{
				file: files[0],
				fileName: `ERAPI_IMAGE_${Math.random(5)}`,
				tags: ['user', 'profile', 'erapi', 'photo'],
			},
			function (err, result) {
				if (err) {
					console.log('error upload image');
				} else {
					uploading = false;
					image = result.url;
				}
				// dispatch('click', result.url);
			},
		);
	}
</script>

<div class="flex flex-1 flex-col items-center justify-center">
	<img class="{classes} object-cover" src="{image ? image : noImg}" alt="..." />
	{#if title != ''}
		<h4 class="text-md font-medium mt-2">{title}</h4>
	{/if}
	<span class="text-sm mb-2 mt-1">{description}</span>
	{#if uploading}
		<p>Loading ...</p>
	{:else if action}
		{#if actionType == 'file'}
			<label
				class="flex items-center justify-center py-2 px-3 bg-white text-blue-500 tracking-wide rounded border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
			>
				<span class="ml-2 text-sm"
					><i class="bx bx-upload"></i> {actionLabel}</span
				>
				<input
					type="file"
					accept=".jpg, .jpeg, .png"
					on:change="{(e) => handleSectionImageUpload(e.target.files)}"
					class="hidden"
				/>
			</label>
		{:else}
			<Button on:click="{() => dispatch('click')}" status="{actionStatus}"
				>{actionLabel}</Button
			>
		{/if}
	{/if}
</div>
