<script lang="ts">
	import LinkedIn from "../components/LinkedIn.svelte";
	import GitHub from "../components/GitHub.svelte";
</script>

<article>
	<h1>Yuto Nishida</h1>
	<p>Software Engineer</p>
	<div>
		<GitHub />
		<LinkedIn />
	</div>
</article>

<style lang="scss">
	a {
		margin-right: 0.5em;
		margin-left: 0.5em;
	}
	h1 {
		color: #ff3e00;
		margin: 0.5em;
		text-transform: uppercase;
		font-size: 5em;
		font-weight: 400;
	}
	p {
		font-size: 2em;
		margin-top: 0;
	}
	article {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
