<script lang="ts">
	export let name: string;
	export let description: string;
	export let source: string | undefined;
	export let live: string | undefined;

	import Launch from "svelte-icons/md/MdLaunch.svelte";
	import Rust from "svelte-icons/di/DiRust.svelte";
	import Nodejs from "svelte-icons/di/DiNodejsSmall.svelte";
	import React from "svelte-icons/di/DiReact.svelte";
	import Python from "svelte-icons/di/DiPython.svelte";
</script>

<div class="card">
	<h2>{name}</h2>
	<p>{description}</p>
	{#if source}
		<a href={source}>source</a>
	{/if}
	{#if live}
		<a href={live}>live</a>
	{/if}
	<div class="icon">
		<Rust />
		<React />
	</div>
</div>

<style lang="scss">
	.icon {
		width: 1em;
	}
	.card {
		border: 1px solid black;
	}
</style>
