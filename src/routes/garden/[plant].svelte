<script>
    import Space from '../../components/space.svelte'

    import { stores } from '@sapper/app';
    const {page} = stores();
    const id = $page.path.replace("/garden/", "");

    import fetch from 'cross-fetch'
    const postFetch = (async () => {
        var response = await fetch(`https://potion-api.vercel.app/table?id=c962b6a899d94ea39739998c6690b54b`)

        const blogposts = await response.json()
        const blogIndex = blogposts.findIndex(item => item.fields.url == id)

        // if index != -1
        if (blogIndex != -1) {
            const post = await fetch("https://potion-api.vercel.app/html?id=" + blogposts[blogIndex].id)
            const postContent = await post.text()
            const datePublished = blogposts[blogIndex].fields.date
            const readTime = blogposts[blogIndex].fields.readtime
            return {
                readTime,
                datePublished,
                postContent
            }
        }
        else {
            return undefined
        }
    })()

    let title= "Digital Garden | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my digital garden.";
    let url = "https://krishgoel.com/garden/";
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
    {#await postFetch}
        <!--  -->
    {:then data}
        {#if data != undefined}
            <p>{data.datePublished} · {data.readTime}</p>
            <Space/>
            {@html data.postContent}
        {:else}
            <p>An error occured</p>
        {/if}
    {:catch error}
        <!--  -->
    {/await}
</section>