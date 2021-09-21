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
</script>

<style>
    .blog-container {
        width: 100%;
        max-width: 700px;
        display: block;
        margin: 0 auto
    }
</style>

<section class="blog-container">
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