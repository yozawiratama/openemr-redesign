<script>
  import DatePicker from './DatePicker.svelte';
  export let from = new Date();
  export let to = new Date();
</script>
<DatePicker bind:from={from} bind:to={to} ranged={true} smallLabel="Date Range"/>