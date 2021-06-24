<script lang="ts">
	import Data from "../data/projects.json";
	import ProjectCard from "../components/ProjectCard.svelte";
</script>

<article>
	{#each Data as datum}
		<ProjectCard {...datum} />
	{/each}
</article>

<style lang="scss">
	article {
		width: 70%;
		max-width: 1000px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}

	@media (max-width: 640px) {
		article {
			grid-template-columns: 1fr;
		}
	}
</style>
