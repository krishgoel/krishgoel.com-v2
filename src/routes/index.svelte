<script>
    let title= "Krish Goel | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigai from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";

    import Typewriter from 'svelte-typewriter/lib/Typewriter.svelte'

    import {range} from '../scripts/range'

    import fetch from 'cross-fetch'
    import sortJsonArray from 'sort-json-array'

    // const fetchProjects = (async () => {
    //     var response = await fetch('https://potion-api.vercel.app/table?id=5856546a8a954678937de8e1d91d99d7')
    //     var responseJSON = await response.json()
    //     responseJSON = sortJsonArray(responseJSON, "fields.showonindex")
    //     return responseJSON
    // })()
    
    // Localising JSON for dev
    const fetchProjects = (async () => {
        return ([{"fields":{"showonindex":true,"date":"April 2021","link":"Webapp","url":"https://covaid.vercel.app","description":"helped the dead n dat","name":"CovAID"},"id":"de81f8ac-6a51-4632-8fe3-6254918c4540","created":1621262820000,"last_edited":1621267380000},{"fields":{"showonindex":true,"date":"September 2019","link":"Project Documentation","url":"javascript:void(0)","description":"dun this been there dat mad","name":"BinaryBox"},"id":"6be3f1f0-1dbd-4406-a55e-446eb17b3f02","created":1621262760000,"last_edited":1621267380000}])
    })()

</script>

<style>
    .banner {
        width: 100%;
        /* background-image: linear-gradient(90deg, var(--dark-background), #00000000 70%), linear-gradient(0deg, var(--dark-background) 5%, #00000000 20%), url(/images/banner.jpeg); */
        background-image: linear-gradient(90deg, var(--dark-background), #00000000 70%), url(/images/banner.gif);
        background-position: 50% 20%;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: var(--dark-background);
        height: 95vh;
        display: flex;
        align-items: center;
    }

    .banner-text-flipping {
        width: 100%;
        display: block;
        height: 100px
    }
    .banner-text-flipping h3 {
        line-height: 150%;
        margin-bottom: 0
    }

    /* Intro section */
    .intro img {
        box-shadow: 10px 10px 0 0 var(--light-background);
        transition: 0.2s;
    }
    .intro img:hover {
        box-shadow: 5px 5px 0 0 var(--light-background);
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

    <section class="banner">
        <div class="width-restriction">
            <div class="row">
                <div class="col-2">
                    <Typewriter cascade>
                        <h3 style="margin: 5px 0">Hi</h3>
                        <h1>I'm Krish</h1>
                        <p class="mono">(short for Krishnamangalrathnam nunununun)</p>
                    </Typewriter>

        
                    <div class="banner-text-flipping">
                        <Typewriter loop interval={30} delay={2500} scramble>
                            <h3>and manz against the degenerates who price Flaming Hot Cheetos in India</h3>
                            <h3>and manz a web developer</h3>
                            <h3>and manz a fan of ya mum jokes</h3>
                            <h3>and manz a financial literacy enthusiast</h3>
                        </Typewriter>
                    </div>

                </div>
            </div>

        </div>
    </section>

    <br/><br/><br/><br/><br/>
    
    <section class="intro dark">
        <div class="width-restriction">

            <div class="row">

                <div class="col-2">
                    <img src="/images/profile.jpeg"/>
                </div>

                <div class="col-2">
                    <div class="width-restriction">

                        <h2>aka <span class="swag">kringefest</span></h2>
                        <p>I am a technophile and a full-time "flex machine" from New Delhi. I am currently completing my high schooling from <a href="http://sanskritischool.edu.in" target="_blank">Sanskriti School</a> and will be joining <a href="javascript:void(0)" target="_blank">Some University</a> for pursuing every Indian dads&apos; dream for their son - <s>MBA</s>  Engineering (+ Elective) (voluntarily, I'll the CS cutoff) this fall.</p>
                        <p>While web-development and programming is my m&eacute;tier, I&rsquo;m currently in the search for my Ikigai.</p>
                        <p>I occasionally venture into introducing the beautiful intricacies of programming to the younger students during my summer breaks and looking at the bigger picture, I aspire to develop &quot;smarter energy sources&quot;.</p>
                        <p>Welcome to <s>my website/secret base</s> Jaku! &nbsp;(btw irrespective of the <em>kringe,</em> people <strong>LIKE</strong> to call me <span class="mono">KrishSkywalker</span> &macr;\(ツ)/&macr;. <span class="swag">Yes</span> 😤)</p>

                    </div>

                </div>
            </div>
        
        </div>
    </section>

    <br/><br/>

    <section class="light">
        <div class="width-restriction">

            <h1>My Projects</h1>

            {#await fetchProjects}
            {:then data}
            <div class="row">
                {#each range(0,3,1) as i, index}
                    <div class="col-3">
                        {#each data as project, p}
                        {#if project.fields.showonindex}
                        {#if p%3 == i}
                        <div class="card">
                            {#if project.fields.cover != undefined}
                            <img src="{project.fields.cover}" alt="Cover image for {project.fields.name}"/>
                            {/if}
                            <div class="width-restriction">
                                <h2 style="margin-bottom: 5px">{project.fields.name}</h2>
                                <p class="mono">{project.fields.date}</p>
                                <p>{project.fields.description}</p>
                                <br/>
                                <p><a href="{project.fields.url}">{project.fields.link}</a></p>
                            </div>
                        </div>
                        {/if}
                        {/if}
                        {/each}
                    </div>
                {/each}
            </div>
            {:catch error}
            <p class="mono">There has been an error due to the <a href="https://potion-api.vercel.app/" target="_blank">Potion API</a> (third party) used</p>
            {/await}

        </div>
    </section>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

</section>