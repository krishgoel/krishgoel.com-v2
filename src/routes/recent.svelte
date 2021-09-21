<script>
	import fetch from 'cross-fetch'

    import Space from '../components/space.svelte'

    const topTracks = (async () => {
        let response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&period=7day&user=KrishSkywalker&api_key=faa73d570313176a337af4dea9827765&format=json&limit=5`)
        response = await response.json()
        return response.toptracks.track
    })()

    let title= "Colophon | krishgoel.com";
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

<style>
    .inline * {
        display: inline
    }
    .inline p a {
        margin-left: 15px
    }
    hr {
        background-color: var(--dark-text);
        border: none;
        height: 1px;
        opacity: 0.4;
        margin-top: 15px;
        margin-bottom: 20px
    }
    h4 {
        font-size: clamp(18px, 2.4vw, 22px);
    }
</style>

<section class="recent slim-container">
    <h1>Recent Activityx</h1>
    <Space height={"25px"}/>
    <div class="row">
        <div class="col-2">
            <h2>Top Tracks</h2>
            <div class="inline">
                <p>From this week</p>
                <p><a href="https://last.fm/user/KrishSkywalker" target="_blank">Last.fm ></a></p>
            </div>
            <Space height={"10px"}/>
            <div class="card">
                <div class="width-restriction">
                    {#await topTracks}
                    <!--  -->
                    {:then data}
                        {#each data as track, i}
                            <h4>{track.name}</h4>
                            <p>by {track.artist.name}</p>
                            {#if i != 4}
                                <hr/>
                            {/if}
                        {/each}
                    {/await}
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="card">
                <div class="width-restriction">
                    <p>Hmmmm, let's see what else we can add here</p>
                </div>
            </div>
        </div>
    </div>
    <!-- {#await colophon}
    {:then data}
        {@html data}
    {/await} -->
</section>