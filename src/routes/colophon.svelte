<script>
	import fetch from 'cross-fetch'

    const colophon = (async () => {
        var response = await fetch(`https://potion-api.vercel.app/html?id=4a3cc84785654ec687c0c4b2559e2834`)
        return await response.text()
    })()

    let title= "Colophon | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigai from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";
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

<section class="colphon">
    <div class="width-restriction">
        {#await colophon}
            <!--  -->
        {:then data}
            {@html data}
        {/await}
    </div>
</section>