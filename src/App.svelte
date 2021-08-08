<script lang="ts">
	import Main from "./pages/Main.svelte";
	import Projects from "./pages/Projects.svelte";

    const Pages = [
        "Main", "Projects", "Contact",
    ];

	let currentPage = Pages[0];

	const handlePageClick = (page: string) => {
		currentPage = page;
	};
</script>

<svelte:head>
    <title>{currentPage}</title>
</svelte:head>
<main>
	<header>
		<div class="menu">
			{#each Pages as page}
				<button class="menuButton" on:click={() => handlePageClick(page)}>
					{page}
				</button>
			{/each}
		</div>
	</header>
	{#if currentPage === "Main"}
		<Main />
	{:else if currentPage === "Projects"}
		<Projects />
	{:else}
		<p>contact</p>
	{/if}
	<footer>
		<p />
	</footer>
</main>

<style lang="scss">
	.menu {
		display: flex;
		flex-direction: row;
		justify-content: center;
		min-width: 40%;
		//margin: 0 auto;
	}

	.menuButton {
		margin: 1em;
	}

	main {
		text-align: center;
		padding: 1em;
		//max-width: 240px;
		min-height: 100%;
		box-sizing: border-box;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	//@media (min-width: 640px) {
	//	main {
	//		max-width: none;
	//	}
	//}
</style>
