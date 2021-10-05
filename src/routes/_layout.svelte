<script>
	import Nav from '../components/Topnav.svelte'
    import Footer from '../components/Footer.svelte'

    import Banner from '../components/index/banner.svelte'

	import { stores } from '@sapper/app';
	const { page } = stores();
	$: console.log($page.path);

</script>

<style>
	.width-restriction {
		padding: 30px 0;
	}
</style>

<main>
	{#if $page.path != "/"}
	<Nav appearance={"light"}/>
	<div class="width-restriction">
		<slot>
			<!-- The shit is injected here noice -->
		</slot>
	</div>
	<Footer appearance={"light"}/>
	{:else}
	<slot>
		<!-- The shit is injected here -->
	</slot>
	{/if}
</main>