<script>
	import fetch from 'cross-fetch'

    const colophon = (async () => {
        var response = await fetch(`https://potion-api.vercel.app/html?id=491e86f5e76b4b048ee3bb6cd7679750`)
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

<section class="slim-container">
    {#await colophon}
        <!--  -->
    {:then data}
        {@html data}
    {/await}
</section>