<script context="module">
    export async function preload(page, session) {
        const projectsFetch = await this.fetch("https://potion-api.vercel.app/table?id=5856546a8a954678937de8e1d91d99d7")
        const projects = await projectsFetch.json()

        const blogpostsFetch = await this.fetch("https://potion-api.vercel.app/table?id=c962b6a899d94ea39739998c6690b54b")
        const blogposts = await blogpostsFetch.json()

        const socialsFetch = await this.fetch("https://potion-api.vercel.app/table?id=fe3fe0e8c9e54061b7412307da4c035f")
        const socials = await socialsFetch.json()

        return { 
            projects: projects,
            blogposts: blogposts,
            socials: socials
        }
    }
</script>

<script>
    import { range } from '../scripts/range'

    export let projects
    export let blogposts
    export let socials

    let title= "Krish Goel | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigai from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";

	import Nav from '../components/Topnav.svelte';

    import Banner from '../components/index/banner.svelte'
    import Intro from '../components/index/intro.svelte'
    import YouTube from '../components/index/youtube.svelte'
    import Colophon from './colophon.svelte'

    import fetch from 'cross-fetch'
    const liveListening = (async () => {
        try {
            var response = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=KrishSkywalker&api_key=faa73d570313176a337af4dea9827765&format=json&limit=1')
            return await response.json()
        }
        catch(err){
            console.log(err)
        }
    })()
</script>

<style>
    /* Color scheming */
    .dark, .light {
        padding: 40px 0;
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

<section>

    <Banner/>

    <Nav/>

    <div class="dark">
        <Intro/>
    </div>
    <div class="light">
        <YouTube/>
    </div>
    <div class="dark">
        <section class="projects">
            <div class="width-restriction">
                <h2>My Projects</h2>
                <br/>
                <div class="row">
                    {#each range(0,3,1) as i, index}
                        <div class="col-3">
                            {#each projects as project, p}
                            {#if project.fields.showonindex}
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
                                    <p>{project.fields.description}</p>
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
                            {/if}
                            {/each}
                        </div>
                    {/each}
                </div>
            </div>
        </section>
    </div>
    <div class="light">
        <section class="blog">
            <div class="width-restriction">
                <h2>Thots n dat</h2>
                <p>I casually dab into writing sometimes, usually about technology, things I am using or about the time I went backpacking to the foothills of mount Tibidabo. Here are 2 of my latest posts, I'd really appreciate it if you could check them out.</p>
                <br/>

                <div class="row">
                {#each range(0,2,1) as i, index}
                <div class="col-2">
                    {#each blogposts as blogpost, p}
                    {#if blogpost.fields.showonindex}
                    {#if p%2 == i}
                    <div class="card">
                        <div class="width-restriction">
                            <h3 style="padding-top: 30px">{blogpost.fields.title}</h3>
                            <p>{blogpost.fields.description}</p>
                            <br/>
                            <p><a href="{blogpost.fields.url}">Read now</a></p>
                        </div>
                    </div>
                    {/if}
                    {/if}
                    {/each}
                </div>
                {/each}
                </div>
            </div>
        </section>
    </div>
    <div class="dark">
        <section class="reachme">
            <div class="width-restriction">
                <div class="row">
                    <div class="col-2 live-listening">
                        <div class="card" style="padding-top: 30px">
                            <div class="width-restriction">
                                {#await liveListening}
                                <p>Data loading...</p>
                                {:then data}
                                {#if data.recenttracks.track[0].hasOwnProperty("@attr")}
                                <p>Currently listening to</p>
                                {:else}
                                <p>Last listened to</p>
                                {/if}
                                <h3>{data.recenttracks.track[0].name}</h3>
                                <p>by <strong>{data.recenttracks.track[0].artist["#text"]}</strong></p>
                                {:catch error}
                                <p class="mono">There has been an error due to the <a href="https://potion-api.vercel.app/" target="_blank">Potion API</a> (third party) used</p>
                                {/await}
                                <br/>
                                <p>Here's what <a href="/recent">I been listening to lately</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="contact col-2">
                        <br/>
                        <h2>Reach me</h2>
                        <p>I can be found on most social media platforms by <span class="mono">@krishskywalker7</span></p>
                        <br/>
                        <div class="socials">
                            {#each socials as social, i}
                                <p><a href="{social.fields.url}" target="_blank">{social.fields.platform}</a></p>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</section>