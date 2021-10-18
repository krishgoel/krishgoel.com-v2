<script context="module">
    export async function preload({ params, query }) {
        // Projects
        let projects = await this.fetch(`projects.json`);
        projects = await projects.json()
        let eliminateProjects = []
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].showonindex == false) {
                eliminateProjects.push(i)
            }
        }
        eliminateProjects = eliminateProjects.reverse()
        for (let i = 0; i < eliminateProjects.length; i++) {
            projects.splice(eliminateProjects[i], 1)
        }

        // Blog
        let posts = await this.fetch(`blog.json`);
        posts = await posts.json()
        let eliminatePosts = []
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].showonindex == false) {
                eliminatePosts.push(i)
            }
        }
        eliminatePosts = eliminatePosts.reverse()
        for (let i = 0; i < eliminatePosts.length; i++) {
            posts.splice(eliminatePosts[i], 1)
        }

        // Socials
        let socials = await this.fetch(`/data/socials.json`);
        socials = await socials.json()

        // Commit details
        // let commitID = await this.fetch(`https://api.github.com/repos/KrishSkywalker/krishgoel.com-v2/git/refs/heads/main`);
        // commitID = await commitID.json();
        // if (commitID.object != undefined) {
        //     commitID = commitID.object.sha
        //     console.log(commitID)
        // }
        // else {
        //     console.log("Commit ID not found")
        // }

        // let commit = await this.fetch(`https://api.github.com/repos/KrishSkywalker/krishgoel.com-v2/git/commits/` + commitID);
        // commit = await commit.json()
        
        // Return values
        return {
            projects: projects,
            posts: posts,
            socials: socials
            // commit: commit
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
    let url = "https://krishgoel.com";

    const livelistening = (async () => {
        var response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=KrishSkywalker&api_key=faa73d570313176a337af4dea9827765&format=json&limit=1`)
        return await response.json()
    })()

    export let projects
    export let posts
    export let socials
    // export let commit

</script>

<style>
    main {
        background-size: 100px 100px;
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
                                {#if p%3 == i}
                                <div class="card">
                                    {#if project.cover != undefined && project.cover != ""}
                                        <img src="{project.cover}" alt="Cover image for {project.title}" style="margin-bottom: 20px; width: calc(100% - 20px); margin-left: 10px; margin-top: 10px; "/>
                                    {/if}
                                    <div class="width-restriction">
                                        {#if project.cover == undefined || project.cover == ""}
                                            <h3 style="padding-top: 30px; margin-bottom: 0">{project.title}</h3>
                                        {:else}
                                            <h3 style="margin-bottom: 0">{project.title}</h3>
                                        {/if}
                                        <p class="mono" style="font-size: 14px; margin-bottom: 10px">{project.date} </p>
                                        <p style="font-weight: bold; margin-bottom: 10px">{project.type}</p>
                                        <p style="margin-bottom: 10px;">{@html project.description}</p>
                                        <!-- Links -->
                                        <div class="links">
                                            {#if project.link1 != undefined}
                                                {#if project.documentationAvailable == true}
                                                    <p><a rel="prefetch" href="projects/{project.slug}" aria-label="Project Documentation">{project.link1}</a></p>
                                                {:else}
                                                    <p><a href="{project.url1}" target="_blank" aria-label="{project.link1}">{project.link1}</a></p>
                                                {/if}
                                            {/if}
                                            {#if project.link2 != undefined}
                                                <p><a href="{project.url2}" target="_blank" aria-label="{project.link2}">{project.link2}</a></p>
                                            {/if}
                                            {#if project.link3 != undefined}
                                                <p><a href="{project.url3}" target="_blank" aria-label="{project.link3}">{project.link3}</a></p>
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
                                    {#if project.cover != undefined && project.cover != ""}
                                        <img src="{project.cover}" alt="Cover image for {project.title}" style="margin-bottom: 20px; width: calc(100% - 20px); margin-left: 10px; margin-top: 10px; "/>
                                    {/if}
                                    <div class="width-restriction">
                                        {#if project.cover == undefined || project.cover == ""}
                                            <h3 style="padding-top: 30px; margin-bottom: 0">{project.title}</h3>
                                        {:else}
                                            <h3 style="margin-bottom: 0">{project.title}</h3>
                                        {/if}
                                        <p class="mono" style="font-size: 14px; margin-bottom: 10px">{project.date} </p>
                                        <p style="font-weight: bold; margin-bottom: 10px">{project.type}</p>
                                        <p style="margin-bottom: 10px;">{@html project.description}</p>
                                        <!-- Links -->
                                        <div class="links">
                                            {#if project.link1 != undefined}
                                                {#if project.documentationAvailable == true}
                                                    <p><a rel="prefetch" href="projects/{project.slug}" aria-label="Project Documentation">{project.link1}</a></p>
                                                {:else}
                                                    <p><a href="{project.url1}" target="_blank" aria-label="{project.link1}">{project.link1}</a></p>
                                                {/if}
                                            {/if}
                                            {#if project.link2 != undefined}
                                                <p><a href="{project.url2}" target="_blank" aria-label="{project.link2}">{project.link2}</a></p>
                                            {/if}
                                            {#if project.link3 != undefined}
                                                <p><a href="{project.url3}" target="_blank" aria-label="{project.link3}">{project.link3}</a></p>
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
                        {#if project.cover != undefined && project.cover != ""}
                            <img src="{project.cover}" alt="Cover image for {project.title}" style="margin-bottom: 20px; width: calc(100% - 20px); margin-left: 10px; margin-top: 10px; "/>
                        {/if}
                        <div class="width-restriction">
                            {#if project.cover == undefined || project.cover == ""}
                                <h3 style="padding-top: 30px; margin-bottom: 0">{project.title}</h3>
                            {:else}
                                <h3 style="margin-bottom: 0">{project.title}</h3>
                            {/if}
                            <p class="mono" style="font-size: 14px; margin-bottom: 10px">{project.date} </p>
                            <p style="font-weight: bold; margin-bottom: 10px">{project.type}</p>
                            <p style="margin-bottom: 10px;">{@html project.description}</p>
                            <!-- Links -->
                            <div class="links">
                                {#if project.link1 != undefined}
                                    {#if project.documentationAvailable == true}
                                        <p><a rel="prefetch" href="projects/{project.slug}" aria-label="Project Documentation">{project.link1}</a></p>
                                    {:else}
                                        <p><a href="{project.url1}" target="_blank" aria-label="{project.link1}">{project.link1}</a></p>
                                    {/if}
                                {/if}
                                {#if project.link2 != undefined}
                                    <p><a href="{project.url2}" target="_blank" aria-label="{project.link2}">{project.link2}</a></p>
                                {/if}
                                {#if project.link3 != undefined}
                                    <p><a href="{project.url3}" target="_blank" aria-label="{project.link3}">{project.link3}</a></p>
                                {/if}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
		</div>
	</section>
	<section class="blog light">
		<div class="width-restriction">
			<div class="row">
				<div class="col-2">
					<div class="inline">
						<h2>thoughts.log()</h2>
						<p><a href="/blog" aria-label="See all projects">aka /blog ></a></p>
					</div>
					<Space height={"5px"}/>
					<p>This is my blog. I plan on updating it periodically with any showcase worthy ideas/thoughts I have, expectedly about technology, things I am using, or about the time I went backpacking to the foothills of mount Tibidabo ;) <i>For a more recent insight into my current thoughts, check out <a rel="prefetch" href="/garden" aria-label="Digital Garden">/garden</a>.</i></p>
				</div>
			</div>
			<Space height={"25px"}/>
			<div class="large-view tablet-view">
				<div class="row">
					{#each range(0,2,1) as i, index}
					<div class="col-2">
						{#each posts as post, p}
						{#if p%2 == i}
						<div class="card">
							<div class="width-restriction">
								<h3>{post.title}</h3>
								<p>{post.readtime}</p>
								<Space height={"10px"}/>
								<p style="margin-bottom: 10px;">{post.description}</p>
								<!-- Links -->
								<div class="links">
									<p><a rel="prefetch" href="blog/{post.slug}" aria-label="Read more">Read more</a></p>
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
				{#each posts as post, p}
				<div class="card">
					<div class="width-restriction">
						<h3>{post.title}</h3>
						<p>{post.readtime}</p>
						<Space height={"10px"}/>
						<p style="margin-bottom: 10px;">{post.description}</p>
						<!-- Links -->
						<div class="links">
							<p><a rel="prefetch" href="blog/{post.slug}" aria-label="Read more">Read more</a></p>
						</div>
					</div>
				</div>
				{/each}
			</div>
		</div>
	</section>
	<section class="reachme">
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
                            {:catch error}
                                <!--  -->
                            {/await}
							<p>Here's what <a aria-label="Recent Listening" href="/listening">I been listening to lately</a></p>
						</div>
					</div>
				</div>
				<div class="col-2 socials">
					<Space height={"10px"}/>
					<div class="inline">
						<h2>Reach Me</h2>
						<p><a href="/contact">Contact Form ></a></p>
					</div>
					<p>I can be found on most social media platforms by <span class="mono">@krishskywalker7</span></p>
					{#each socials as social, i}
					<p><a aria-label="Link to my {social.platform}" href="{social.url}" target="_blank">{social.platform}</a></p>
					{/each}
					<Space height={"10px"}/>
					<!-- <p>
						Last commit:  
                        <span class="mono">{commit.committer.date}</span> <a href="https://github.com/KrishSkywalker/krishgoel.com-v2/commit/{commit.sha}" target="_blank" aria-label="Link to the commit">"{commit.message}"</a>
					</p> -->
				</div>
			</div>
		</div>
	</section>
	<Footer appearance={"light"}/>
</main>