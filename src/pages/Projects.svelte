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
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
