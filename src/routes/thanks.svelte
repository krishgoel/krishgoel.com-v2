<script>
	import fetch from 'cross-fetch'

    const thanks = (async () => {
        var response = await fetch(`https://potion-api.vercel.app/html?id=8c5410f76b7444179afdfd874665a9b5`)
        return await response.text()
    })()

    let title= "Thanks | krishgoel.com";
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

<section class="thanks slim-container">
    {#await thanks}
        <!--  -->
    {:then data}
        {@html data}
    {/await}
</section>