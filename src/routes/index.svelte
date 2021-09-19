<script context="module">
    export async function preload() {
        // Projects
        let projects = await this.fetch(`/data/projects.json`);
        projects = await projects.json()

        // Garden
        let plants = await this.fetch(`/data/plants.json`);
        plants = await plants.json()

        // Socials
        let socials = await this.fetch(`/data/socials.json`);
        socials = await socials.json()

        // Commit details
        let commitID = await this.fetch(`https://api.github.com/repos/KrishSkywalker/krishgoel.com-v4/git/refs/heads/main`);
        commitID = await commitID.json();
        commitID = commitID.object.sha

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
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigai from New Delhi.";
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
    section {
        padding: 40px 0;
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
    <section class="intro">
        <div class="width-restriction">
            <div class="row">
                <div class="col-2">
                    <img src="/images/profile.jpeg"/>
                </div>
                <div class="col-2">
                    <div class="width-restriction">
                        <h2>KrishSkywalker aka <span class="swag">kringefest</span></h2>
                        <p>I am a technophile and a full-time "flex machine" from New Delhi. I am currently completing my high schooling from <a href="http://sanskritischool.edu.in" target="_blank">Sanskriti School</a> and will be joining <a href="#" target="_blank">Some University</a> for pursuing every Indian dads&apos; dream for their son - <s>MBA</s>  Engineering Major (+ Elective) this fall.</p>
                        <p>While web-development and programming is my m&eacute;tier, I&rsquo;m currently in the search for my Ikigai.</p>
                        <p>I occasionally venture into introducing the beautiful intricacies of programming to the younger students during my summer breaks and looking at the bigger picture, I aspire to develop &quot;smarter energy sources&quot;.</p>
                        <p>Welcome to <s>my website/secret base</s> Jaku! &nbsp;(btw irrespective of the <em>kringe,</em> people <strong>LIKE</strong> to call me <span class="mono">KrishSkywalker</span> &macr;\(ツ)/&macr;. <span class="swag">Yes</span> 😤)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="projects light">
        <div class="width-restriction">
            <h2>Projec</h2>
            <p>I casually dab into writing sometimes, usually about technology, things I am using or about the time I went backpacking to the foothills of mount Tibidabo. Here are 2 of my latest posts, I'd really appreciate it if you could check them out.</p>
            <Space/>

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
                            {/if}
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <section class="blog">
        <div class="width-restriction">
            <h2>Thoughts n dat</h2>
            <p>I casually dab into writing sometimes, usually about technology, things I am using or about the time I went backpacking to the foothills of mount Tibidabo. Here are 2 of my latest posts, I'd really appreciate it if you could check them out.</p>
            <Space/>
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
                                            <p><a href="/garden/{blog.fields.url}">Read more</a></p>
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
    <section class="reachme light">
        <div class="width-restriction">
            <div class="row">
                <div class="col-2">
                    <div class="card">
                        <div class="width-restriction">
                            {#await livelistening}
                                <!--  -->
                            {:then data}
                                {#if data.recenttracks.track[0].hasOwnProperty("@attr")}
                                    <p>Currently listening to</p>
                                {:else}
                                    <p>Last listened to</p>
                                {/if}
                                <Space height={"10px"}/>
                                <h3>{data.recenttracks.track[0].name}</h3>
                                <p>by <strong>{data.recenttracks.track[0].artist["#text"]}</strong></p>
                                <Space height={"10px"}/>
                                <p>Here's what <a aria-label="Recent Listening" href="/recentlistening">I been listening to lately</a></p>
                            {:catch error}
                                    <!--  -->
                            {/await}
                        </div>
                    </div>
                </div>
                <div class="col-2 socials">
                    <Space height={"10px"}/>
                    <h2>Reach me</h2>
                    <p>I can be found on most social media platforms by <span class="mono">@krishskywalker7</span></p>
                    {#each socials as social, i}
                        <p><a aria-label="Link to my {social.fields.platform}" href="{social.fields.url}" target="_blank">{social.fields.platform}</a></p>
                    {/each}
                    <Space height={"10px"}/>
                    <p>
                        Last commit:  
                        <span class="mono">{commit.committer.date}</span> <a href="https://github.com/KrishSkywalker/krishgoel.com-v4/commit/{commit.sha}" target="_blank">"{commit.message}"</a></p>
                </div>
            </div>
        </div>

    </section>
    <Footer appearance={"dark"}/>
</main>