<script>
	import fetch from 'cross-fetch'

    const colophon = (async () => {
        var response = await fetch(`https://potion-api.vercel.app/html?id=4a3cc84785654ec687c0c4b2559e2834`)
        return await response.text()
    })()

    let title= "Colophon | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is the colophon to the 4th edition of my portfolio website.";
    let url = "https://krishgoel-v4.vercel.app/colophon";
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="title" content="{title}" />
    <meta name="description" content="{description}" />
    <meta property="og:title" content="{title}" />
    <meta property="og:url" content="{url}" />
    <meta property="og:description" content="{description}" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:url" content="{url}" />
    <meta name="twitter:description" content="{description}" />
</svelte:head>

<section class="colophon slim-container">
    {#await colophon}
        <!--  -->
    {:then data}
        {@html data}
    {/await}
</section>