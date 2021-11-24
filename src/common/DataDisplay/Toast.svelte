<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let toasts = []; 
	let retainMs = 3500; 
  let classes = '';

	let toastId = 0;
	const pushToast = (msg = '', status = 'success') => {
		toasts = [...toasts, {
			_id : ++toastId,
			msg,
      status
		}]; 
		setTimeout(() => {
			unshiftToast();
		}, retainMs);
	};

	const unshiftToast = () => {
		toasts = toasts.filter((a, i) => i > 0); 
	};

	onMount(() => {
		window.pushToast = pushToast;
	});
</script>

<div class="block fixed top-0 right-0 mr-4 mt-4 mb-3 z-30">
	{#each toasts as toast (toast._id)}
	<div class="toast-item {toast.status == 'success' ? 'bg-green-500 text-white' : toast.status == 'info' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'} px-4 py-2 rounded-md" in:fly="{{delay: 0, duration: 300, x: 0, y: 50, opacity: 0.1, easing: backOut}}" out:fade={{duration:500, opacity: 0}}>
		{toast.msg}
	</div>
	{/each}
</div>