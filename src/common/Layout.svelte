<script>
	import Toast from "./Toast.svelte";
	import {
		objOfflineStatus,
		store,
		connection,
		currentReport,
	} from "../stores/store";
	import { location, push } from "svelte-spa-router";
	import { lastUpdate, version } from "../config";
	import { format, addDays } from "date-fns";
	import DateRangePicker from "./control/DateRangePicker.svelte";

	const storedata = $store;

	let now = new Date();

	const defaultRange = {
		from: new Date(now.setHours(0, 0, 0, 0)),
		to: new Date(),
	};
</script>

<div class="relative">
	<slot />
	<Toast />
	{#if $location == "/" && storedata != undefined}
		<div class="absolute top-5 left-5 flex space-x-5">
			<div
				class=" flex items-center justify-center py-2 font-medium rounded-md px-6 bg-primary shadow-lg text-white text-md"
			>
				<i class="bx bx-pin mr-2"></i>
				{storedata.name}
			</div>
			<div class="w-60">
				<DateRangePicker
					bind:from="{defaultRange.from}"
					bind:to="{defaultRange.to}"
				/>
			</div>
			<div
				class="flex items-center justify-center py-2 font-medium rounded-md px-6 bg-primary shadow-lg text-white text-md cursor-pointer"
				on:click="{() => {
					console.log(storedata)
					$connection
						.call('reportings.get', storedata.id || storedata._id, defaultRange)
						.then((data) => {
							currentReport.set(null);
							currentReport.set(data);
							push('/report/print');
						})
						.catch((err) => {
              				console.log(err);
							globalThis.pushToast(
								'Sorry, Cant get Data from Server.',
								'error',
							);
						});
				}}"
			>
				Generate Report
			</div>
			<div
				class="flex items-center justify-center py-2 font-medium rounded-md px-6 bg-primary shadow-lg text-white text-md cursor-pointer"
				on:click="{() => {
					$connection
						.call(
							'reportings.get.byCreator',
							storedata.id || storedata._id,
							defaultRange,
							$connection.userId,
						)
						.then((data) => {
							currentReport.set(null);
							currentReport.set(data);
							push('/report/shiftprint');
						})
						.catch((err) => {
              				console.log(err);
							globalThis.pushToast(
								'Sorry, Cant get Data from Server.',
								'error',
							);
						});
				}}"
			>
				Shift Report
			</div>
		</div>
	{/if}
	{#if $location != "/pos" && $location != "/sync-data" && $location != "/history"}
		<div class="absolute bottom-0 w-full text-center invisible xl:visible ">
			<footer class="h-full border-t">
				<div class="container mx-auto px-5 py-3">
					<!-- <hr class="mb-4 border-b-1 border-gray-300" /> -->
					<div
						class="flex flex-col flex-wrap items-start justify-start w-full text-gray-500 text-xs font-light"
					>
						<p class="font-normal pb-1">Version: {version}</p>
						<p class="font-normal pb-1">Update: {lastUpdate}</p>
						<p class="font-normal pb-1"
							>Network status: <strong class="{$objOfflineStatus.statusColor}"
								>{$objOfflineStatus.status}</strong
							></p
						>
						<p class="font-bold">© PT KST </p>
						<p class="text-gray-400"
							>We're provider of quality IT solutions and reliable service in
							software dev.</p
						>
					</div>
				</div>
			</footer>
		</div>
	{/if}
</div>
