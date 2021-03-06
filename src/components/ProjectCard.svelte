<script lang="ts">
	export let name: string;
	export let description: string;
	export let tech: string | string[] = "Rust";
	export let source: string | undefined;
	export let live: string | undefined;

	if (typeof tech === "string") tech = [tech];

	import Launch from "svelte-icons/md/MdLaunch.svelte";
	import GitHub from "svelte-icons/fa/FaGithub.svelte";
	import Rust from "svelte-icons/di/DiRust.svelte";
	import Nodejs from "svelte-icons/di/DiNodejsSmall.svelte";
	import React from "svelte-icons/di/DiReact.svelte";
	import Python from "svelte-icons/di/DiPython.svelte";
	import JQuery from "svelte-icons/di/DiJqueryLogo.svelte";
	import POVRay from "../components/icons/POVRay.svelte";
	import Svelte from "../components/icons/Svelte.svelte";
	import Nextjs from "../components/icons/Nextjs.svelte";
	import MongoDB from "svelte-icons/di/DiMongodb.svelte";

	let techs = {
		Rust: { component: Rust, css: "rust" },
		Python: { component: Python, css: "python" },
		"Node.js": { component: Nodejs, css: "nodejs" },
		React: { component: React, css: "react" },
		jQuery: { component: JQuery, css: "jquery" },
		"POV-Ray": { component: POVRay, css: "povray" },
		Svelte: { component: Svelte, css: "svelte" },
		"Next.js": { component: Nextjs, css: "nextjs" },
		MongoDB: { component: MongoDB, css: "mongodb" },
	};
</script>

<div class="card">
	<header>
		<h2>{name}</h2>
		{#if live}
			<a href={live} target="_blank"><div class="icon-launch"><Launch /></div></a>
		{/if}
	</header>
	<summary>
		<p class="description">{description}</p>
	</summary>
	<footer>
		<div class="tech-pair">
			{#each tech as tech}
				<div class={`icon ${techs[tech].css}`}>
					<svelte:component this={techs[tech].component} />
				</div>
				<p>{tech}</p>
			{/each}
		</div>
		{#if source}
			<a class="tech-pair" href={source} target="_blank">
				<!--
				<p style="margin-right: 0.3em;">Source</p>
				-->
				<div class="icon-gh">
					<GitHub />
				</div>
			</a>
		{/if}
	</footer>
</div>

<style lang="scss">
	.svelte {
		filter: grayscale(100%);
	}
	.description {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
	.icon-gh {
		width: 1.5em;
		height: 1.5em;
		padding-top: 2px;
	}
	.icon-launch {
		width: 2em;
		height: 2em;
		padding-top: 2px;
		margin-right: -4px;
	}
	.icon {
		width: 2em;
		height: 2em;
		padding-top: 2px;
	}
	.tech-pair {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.card {
		padding: 0.5em;
		padding-left: 1em;
		padding-right: 1em;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.nextjs {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h2,
	p {
		margin: 0;
	}

	header,
	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>
