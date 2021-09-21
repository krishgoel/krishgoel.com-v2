<script>
    import Space from '../../components/space.svelte'

    import { stores } from '@sapper/app';
    const {page} = stores();
    const id = $page.path.replace("/projects/", "");

    import fetch from 'cross-fetch'
    const projectFetch = (async () => {
        let response = await fetch(`https://potion-api.vercel.app/table?id=5856546a8a954678937de8e1d91d99d7`)

        const projects = await response.json()
        const projectIndex = projects.findIndex(item => item.fields.url1 == "/projects/"+id)

        // if index != -1
        if (projectIndex != -1) {
            let content = await fetch("https://potion-api.vercel.app/html?id=" + projects[projectIndex].id)
            content = await content.text()
            let date = projects[projectIndex].fields.date
            return {
                date,
                content
            }
        }
        else {
            return undefined
        }
    })()
</script>

<section class="slim-container">
    {#await projectFetch}
        <!--  -->
    {:then data}
        {#if data != undefined}
            <p>{data.date}</p>
            <Space/>
            {@html data.content}
        {:else}
            <p>An error occured</p>
        {/if}
    {:catch error}
        <!--  -->
    {/await}
</section>