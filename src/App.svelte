<script lang="ts">
	import Main from "./pages/Main.svelte";
	import Projects from "./pages/Projects.svelte";
	//export let name: string;
	enum Page {
		Main,
		Projects,
		Contact,
	}
	let PageTypeIterable = Object.values(Page).filter(val => typeof val !== "number");
	let currentPage = Page.Main;

	const handlePageClick = (page: Page) => {
		currentPage = page;
	};
</script>

<main>
	<header>
		<div class="menu">
			{#each PageTypeIterable as page}
				<button class="menuButton" on:click={() => handlePageClick(Page[page])}>
					{page}
				</button>
			{/each}
		</div>
	</header>
	{#if currentPage === Page.Main}
		<Main />
	{:else if currentPage === Page.Projects}
		<Projects />
	{:else}
		<p>contact</p>
	{/if}
	<footer>
		<p>foot</p>
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
