<script context="module">
    export async function preload() {
        // Projects
        let projects = await this.fetch(`/data/projects.json`);
        projects = await projects.json()
        let eliminateProjects = []
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].fields.showonindex == undefined) {
                eliminateProjects.push(i)
            }
        }
        eliminateProjects = eliminateProjects.reverse()
        for (let i = 0; i < eliminateProjects.length; i++) {
            projects.splice(eliminateProjects[i], 1)
        }

        // Garden
        let plants = await this.fetch(`/data/plants.json`);
        plants = await plants.json()
        let eliminatePlants = []
        for (let i = 0; i < plants.length; i++) {
            if (plants[i].fields.showonindex == undefined) {
                eliminatePlants.push(i)
            }
        }
        eliminatePlants = eliminatePlants.reverse()
        for (let i = 0; i < eliminatePlants.length; i++) {
            plants.splice(eliminatePlants[i], 1)
        }

        // Socials
        let socials = await this.fetch(`/data/socials.json`);
        socials = await socials.json()

        // Commit details
        let commitID = await this.fetch(`https://api.github.com/repos/KrishSkywalker/krishgoel.com-v4/git/refs/heads/main`);
        commitID = await commitID.json();
        // commitID = commitID.object.sha

        let commit = await this.fetch(`https://api.github.com/repos/KrishSkywalker/krishgoel.com-v4/git/commits/` + commitID);
        commit = await commit.json()
        
        // Return values
        return {
            projects: projects,
            plants: plants,
            socials: socials,
            commit: commit
        }
    }
</script>

<script>
    import { range } from '../scripts/range'
    import fetch from 'cross-fetch'

    import Nav from '../components/Topnav.svelte'
    import Footer from '../components/Footer.svelte'
    import Space from '../components/space.svelte'

    import Banner from '../components/index/banner.svelte'

    let title= "Krish Goel | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";

    const livelistening = (async () => {
        var response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=KrishSkywalker&api_key=faa73d570313176a337af4dea9827765&format=json&limit=1`)
        return await response.json()
    })()

    export let projects
    export let commit
    export let plants
    export let socials
</script>

<style>
    main {
        background-size: 120px 120px;
        background-image:
            linear-gradient(to right, rgba(60, 60, 60, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(60, 60, 60, 0.7) 1px, transparent 1px);
    }
    section {
        padding: 40px 0;
    }
    /* Inline display for "see all" links */
    .inline * {
        display: inline
    }
    .inline p {
        margin-left: 15px
    }
    /* Project Cards */
    .projects .card {
        padding-top: 0px
    }
    /* Socials */
    .socials, .socials p {
        display: inline-block
    }
    .socials p {
        margin-right: 5px;
        margin-bottom: 10px
    }
</style>

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

<main>
    <Banner/>

    <Nav appearance={"light"}/>

    <section class="projects ">
        <div class="width-restriction">
            <div class="row">
                <div class="col-2">
                    <div class="inline">
                        <h2>Featured Projects</h2>
                        <p><a href="/projects" aria-label="See all projects">See all ></a></p>
                    </div>
                    <Space height={"5px"}/>
                    <p>Below are some of my favourite projects I've worked on so far, this includes my hackathon submissions, side tinkers, failed startup ideas, and non-profits</p>
                </div>
            </div>
            <Space height={"25px"}/>

            <div class="large-view">
                <div class="row">
                    {#each range(0,3,1) as i, index}
                        <div class="col-3">
                            {#each projects as project, p}
                                {#if project.fields.showonindex}
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
                                {#if project.fields.showonindex}
                                    {#if p%2 == i}
                                    <div class="card">
                                        {#if project.fields.cover != undefined}
                                            <img src="{project.fields.cover}" alt="Cover image for {project.fields.name}" style="margin-bottom: 20px; width: calc(100% - 20px); margin-left: 10px; margin-top: 10px; "/>
                                        {/if}
                                        <div class="width-restriction">
                                            {#if project.fields.cover == undefined}
                                                <h3 style="margin-top: 30px; margin-bottom: 0">{project.fields.name}</h3>
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
                                {/if}
                            {/each}
                        </div>
                    {/each}
                </div>
            </div>
            <div class="mobile-view">
                {#each projects as project, p}
                    {#if project.fields.showonindex}
                        <div class="card">
                            {#if project.fields.cover != undefined}
                                <img src="{project.fields.cover}" alt="Cover image for {project.fields.name}" style="margin-bottom: 20px; width: calc(100% - 20px); margin-left: 10px; margin-top: 10px; "/>
                            {/if}
                            <div class="width-restriction">
                                {#if project.fields.cover == undefined}
                                    <h3 style="margin-top: 30px; margin-bottom: 0">{project.fields.name}</h3>
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
        </div>
    </section>

    <section class="blog light">
        <div class="width-restriction">
            <div class="row">
                <div class="col-2">
                    <div class="inline">
                        <h2>Tho(ugh)t Garden</h2>
                        <p><a href="/garden">See all ></a></p>
                    </div>
                    <Space height={"5px"}/>
                    <p>This is a digital garden (more on that <a href="https://cagrimmett.com/notes/2020/11/08/what-are-digital-gardens/" target="_blank" aria-label="Digital Garden Explanation">here</a>). It's essentially me publishing my notes and updating them periodically with new ideas and insights I gain on the topic, expectedly about technology, things I am using, or about the time I went backpacking to the foothills of mount Tibidabo ;) <i>This will take some more time for me to fully organize</i></p>                        
                </div>
            </div>
            <Space height={"25px"}/>
            <div class="large-view tablet-view">
                <div class="row">
                    {#each range(0,2,1) as i, index}
                        <div class="col-2">
                            {#each plants as blog, p}
                                {#if blog.fields.showonindex}
                                    {#if p%2 == i}
                                    <div class="card">
                                        <div class="width-restriction">
                                            <h3>{blog.fields.title}</h3>
                                            <p style="margin-bottom: 10px;">{blog.fields.description}</p>
                                            <!-- Links -->
                                            <div class="links">
                                                <p><a href="/garden/{blog.fields.url}" aria-label="Link to blog">Read more</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/if}
                                {/if}
                            {/each}
                        </div>
                    {/each}
                </div>
            </div>
            <div class="mobile-view">
                {#each plants as blog, p}
                    {#if blog.fields.showonindex}
                        <div class="card">
                            <div class="width-restriction">
                                <h3>{blog.fields.title}</h3>
                                <p style="margin-bottom: 10px;">{blog.fields.description}</p>
                                <!-- Links -->
                                <div class="links">
                                    <p><a href="/garden/{blog.fields.url}" aria-label="Link to blog">Read more</a></p>
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>

    </section>
    <section class="reachme">
        <div class="width-restriction">
            <div class="row">
                <div class="col-2">
                    {#await livelistening}
                        <!--  -->
                    {:then data}
                    <div class="card">
                        <div class="width-restriction">
                            {#if data.recenttracks.track[0].hasOwnProperty("@attr")}
                                <p>Currently listening to</p>
                            {:else}
                                <p>Last listened to</p>
                            {/if}
                            <Space height={"10px"}/>
                            <h3>{data.recenttracks.track[0].name}</h3>
                            <p>by <strong>{data.recenttracks.track[0].artist["#text"]}</strong></p>
                            <Space height={"10px"}/>
                            <p>Here's what <a aria-label="Recent Listening" href="/recent">I been up to lately</a></p>
                        </div>
                    </div>
                    {:catch error}
                            <!--  -->
                    {/await}
                </div>
                <div class="col-2 socials">
                    <Space height={"10px"}/>
                    <div class="inline">
                        <h2>Reach Me</h2>
                        <p><a href="/contact">Contact Form ></a></p>
                    </div>
                    <p>I can be found on most social media platforms by <span class="mono">@krishskywalker7</span></p>
                    {#each socials as social, i}
                        <p><a aria-label="Link to my {social.fields.platform}" href="{social.fields.url}" target="_blank">{social.fields.platform}</a></p>
                    {/each}
                    <Space height={"10px"}/>
                    <p>
                        <!-- Last commit:   -->
                        <!-- <span class="mono">{commit.committer.date}</span> <a href="https://github.com/KrishSkywalker/krishgoel.com-v4/commit/{commit.sha}" target="_blank" aria-label="Link to the commit">"{commit.message}"</a> -->
                    </p>
                </div>
            </div>
        </div>

    </section>
    <Footer appearance={"light"}/>
</main>