<script context="module">
    export async function preload(page, session) {
        const res = await this.fetch("https://potion-api.vercel.app/table?id=5856546a8a954678937de8e1d91d99d7")
        const projects = await res.json()

        return { projects: projects }
    }
</script>

<script>
    import { range } from '../scripts/range'

    export let projects // Importing projects from preload

    let title= "Projects | krishgoel.com";
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

<section class="projects">
    <div class="width-restriction">
        <h1>Projects</h1>
        <p>A lot of things that been dun by urs truly</p>
        <br/>
        <div class="row dark">
            {#each range(0,3,1) as i, index}
                <div class="col-3">
                    {#each projects as project, p}
                    {#if p%3 == i}
                    <div class="card">
                        {#if project.fields.cover != undefined}
                        <img src="{project.fields.cover}" alt="Cover image for {project.fields.name}"/>
                        {/if}
                        <div class="width-restriction">
                            {#if project.fields.cover == undefined}
                            <h3 style="padding-top: 25px">{project.fields.name}</h3>
                            {:else}
                            <h3>{project.fields.name}</h3>
                            {/if}
                            <p class="mono" style="margin-bottom: 10px;">{project.fields.date}</p>
                            <p>{@html project.fields.description}</p>
                            <br/>
                            <div class="links">
                                <p><a href="{project.fields.url1}">{project.fields.link1}</a></p>
                                {#if project.fields.link2 != undefined}
                                <p><a href="{project.fields.url2}">{project.fields.link2}</a></p>
                                {/if}
                                {#if project.fields.link3 != undefined}
                                <p><a href="{project.fields.url3}">{project.fields.link3}</a></p>
                                {/if}
                            </div>
                        </div>
                    </div>
                    {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</section>