<script>
	import Nav from '../components/Topnav.svelte'
    import Footer from '../components/Footer.svelte'

	import { stores } from '@sapper/app';
	const { page } = stores();
	$: console.log($page.path);

</script>

<!-- <Nav/> -->

<main>
	{#if $page.path != "/"}
	<Nav/>
	{/if}
	<slot>
		<!-- The shit is injected here -->
	</slot>
	<div class="light" style="padding: 0">
        <Footer/>
    </div>
</main>