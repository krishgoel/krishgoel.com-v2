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
</script>

<style>
    .card {
        padding-top: 0px
    }
</style>

<section>
	<h1>Test</h1>
	<p>I casually dab into writing sometimes, usually about technology, things I am using or about the time I went backpacking to the foothills of mount Tibidabo. Here are 2 of my latest posts, I'd really appreciate it if you could check them out.</p>
	
    <Space/>
	
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
                                    <h3 style="padding-top: 30px">{project.fields.name}</h3>
                                {:else}
                                    <h3>{project.fields.name}</h3>
                                {/if}
                                <p class="mono" style="margin-bottom: 10px; font-size: 14px">{project.fields.date}</p>
                                <p style="margin-bottom: 10px;">{project.fields.description}</p>
                                <!-- Links -->
                                <div class="links">
                                    {#if project.fields.link1 != undefined}
                                        <p><a href="{project.fields.url1}">{project.fields.link1}</a></p>
                                    {/if}
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
        <!-- {#await fetchProjects}
        {:then projects}
        <p>{projects}</p>
        {:catch error}
            <p>{error}</p>
        {/await} -->
	</div>
</section>