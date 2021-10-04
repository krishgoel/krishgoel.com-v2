<script context="module">
    export async function preload() {
        const response = await this.fetch('/data/projects.json');
        const responseJson = await response.json();
        return {
            projects: responseJson
        }
    }
</script>

<script>
    import { range } from '../../scripts/range'
    
    import Space from '../../components/space.svelte'

    export let projects

    let title= "Projects | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is a comprehensive list of all my projects.";
    let url = "https://krishgoel-v4.vercel.app/projects";
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

<style>
    .card {
        padding-top: 0px
    }
</style>

<section>
    <div class="row">
        <div class="col-2">
            <h2>Projects Portfolio</h2>
            <p>This is a detailed list of all the projects I've worked on so far, it includes my hackathon submissions, side tinkers, failed startup ideas, and non-profits</p>
        </div>
    </div>
    <Space height={"25px"}/>

    <div class="large-view">
        <div class="row">
            {#each range(0,3,1) as i, index}
                <div class="col-3">
                    {#each projects as project, p}
                        {#if p%3 == i}
                        <div class="card">
                            {#if project.fields.cover != undefined}
                                <img src="{project.fields.cover}" alt="Cover image for {project.fields.name}" style="margin-bottom: 20px; width: calc(100% - 20px); margin-left: 10px; margin-top: 10px; "/>
                            {/if}
                            <div class="width-restriction">
                                {#if project.fields.cover == undefined}
                                    <h3 style="padding-top: 30px; margin-bottom: 0">{project.fields.name}</h3>
                                {:else}
                                    <h3 style="margin-bottom: 0">{project.fields.name}</h3>
                                {/if}
                                <p class="mono" style="font-size: 14px; margin-bottom: 10px">{project.fields.date} </p>
                                <p style="font-weight: bold; margin-bottom: 10px">{project.fields.type}</p>
                                <p style="margin-bottom: 10px;">{@html project.fields.description}</p>
                                <!-- Links -->
                                <div class="links">
                                    {#if project.fields.link1 != undefined}
                                        <p><a href="{project.fields.url1}" target="_blank" aria-label="{project.fields.link1}">{project.fields.link1}</a></p>
                                    {/if}
                                    {#if project.fields.link2 != undefined}
                                        <p><a href="{project.fields.url2}" target="_blank" aria-label="{project.fields.link2}">{project.fields.link2}</a></p>
                                    {/if}
                                    {#if project.fields.link3 != undefined}
                                        <p><a href="{project.fields.url3}" target="_blank" aria-label="{project.fields.link3}">{project.fields.link3}</a></p>
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
    <div class="tablet-view">
        <div class="row">
            {#each range(0,2,1) as i, index}
                <div class="col-2">
                    {#each projects as project, p}
                        {#if p%2 == i}
                        <div class="card">
                            {#if project.fields.cover != undefined}
                                <img src="{project.fields.cover}" alt="Cover image for {project.fields.name}" style="margin-bottom: 20px; width: calc(100% - 20px); margin-left: 10px; margin-top: 10px; "/>
                            {/if}
                            <div class="width-restriction">
                                {#if project.fields.cover == undefined}
                                    <h3 style="padding-top: 30px; margin-bottom: 0">{project.fields.name}</h3>
                                {:else}
                                    <h3 style="margin-bottom: 0">{project.fields.name}</h3>
                                {/if}
                                <p class="mono" style="font-size: 14px; margin-bottom: 10px">{project.fields.date} </p>
                                <p style="font-weight: bold; margin-bottom: 10px">{project.fields.type}</p>
                                <p style="margin-bottom: 10px;">{@html project.fields.description}</p>
                                <!-- Links -->
                                <div class="links">
                                    {#if project.fields.link1 != undefined}
                                        <p><a href="{project.fields.url1}" target="_blank" aria-label="{project.fields.link1}">{project.fields.link1}</a></p>
                                    {/if}
                                    {#if project.fields.link2 != undefined}
                                        <p><a href="{project.fields.url2}" target="_blank" aria-label="{project.fields.link2}">{project.fields.link2}</a></p>
                                    {/if}
                                    {#if project.fields.link3 != undefined}
                                        <p><a href="{project.fields.url3}" target="_blank" aria-label="{project.fields.link3}">{project.fields.link3}</a></p>
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
    <div class="mobile-view">
        {#each projects as project, p}
            <div class="card">
                {#if project.fields.cover != undefined}
                    <img src="{project.fields.cover}" alt="Cover image for {project.fields.name}" style="margin-bottom: 20px; width: calc(100% - 20px); margin-left: 10px; margin-top: 10px; "/>
                {/if}
                <div class="width-restriction">
                    {#if project.fields.cover == undefined}
                        <h3 style="padding-top: 30px; margin-bottom: 0">{project.fields.name}</h3>
                    {:else}
                        <h3 style="margin-bottom: 0">{project.fields.name}</h3>
                    {/if}
                    <p class="mono" style="font-size: 14px; margin-bottom: 10px">{project.fields.date} </p>
                    <p style="font-weight: bold; margin-bottom: 10px">{project.fields.type}</p>
                    <p style="margin-bottom: 10px;">{@html project.fields.description}</p>
                    <!-- Links -->
                    <div class="links">
                        {#if project.fields.link1 != undefined}
                            <p><a href="{project.fields.url1}" target="_blank" aria-label="{project.fields.link1}">{project.fields.link1}</a></p>
                        {/if}
                        {#if project.fields.link2 != undefined}
                            <p><a href="{project.fields.url2}" target="_blank" aria-label="{project.fields.link2}">{project.fields.link2}</a></p>
                        {/if}
                        {#if project.fields.link3 != undefined}
                            <p><a href="{project.fields.url3}" target="_blank" aria-label="{project.fields.link3}">{project.fields.link3}</a></p>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>