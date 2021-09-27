<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
    <title>{status} | krishgoel.com</title>
    <meta name="title" content="{status} | krishgoel.com" />
    <meta name="description" content="Status: {status}" />
    <meta property="og:title" content="{status} | krishgoel.com" />
    <!-- <meta property="og:url" content="{url}" /> -->
    <meta property="og:description" content="{status}" />
    <meta name="twitter:title" content="{status} | krishgoel.com" />
    <!-- <meta name="twitter:url" content="{url}" /> -->
    <meta name="twitter:description" content="{status}" />
</svelte:head>

<section class="slim-container">
	<h1>Error {status}</h1>
	
	<p>{error.message}</p>
	
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</section>
