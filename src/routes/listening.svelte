<script context="module">
    export async function preload() {
        let response = await this.fetch('/data/toptracks.json');
        let responseJson = await response.json();
        responseJson = responseJson.toptracks.track
        return {
            toptracks: responseJson
        }
    }
</script>

<script>
	import fetch from 'cross-fetch'

    import Space from '../components/space.svelte'

    const livelistening = (async () => {
        var response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=KrishSkywalker&api_key=faa73d570313176a337af4dea9827765&format=json&limit=1`)
        return await response.json()
    })()

    export let toptracks

    let title= "Top Tracks | krishgoel.com";
    let description = "Hi, this page reflects the recent listening activities of Krish, a technophile and maker from New Delhi.";
    let url = "https://krishgoel.com/listening";
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
    <div class="inline">
        <h1>Top Tracks</h1>
        <p style="margin-left: 5px">From this week</p>
        <p><a href="https://last.fm/user/KrishSkywalker" target="_blank" aria-label="My Last.fm">Last.fm ></a></p>
    </div>
    <Space height={"20px"}/> 
    <div class="card">
        <div class="width-restriction">
            {#await livelistening}
                <p>Loading my listening habits...</p>
                <Space height={"10px"}/>
                <h3>Loading...</h3>
                <p>Loading...</p>
                <Space height={"10px"}/>
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
                <p>This section is supposed to display my recent listening habits</p>
                <Space height={"10px"}/>
                <h3>But</h3>
                <p>the API it relies on crashed</p>
                <Space height={"10px"}/>
            {/await}
        </div>
    </div>
    <Space height={"10px"}/>
    <div class="card">
        <div class="width-restriction">
            {#each toptracks as track, i}
                {#if i != 4}
                    <h4>{track.name}</h4>
                    <p>by {track.artist.name}</p>
                    <hr/>
                {:else}
                    <h4>{track.name}</h4>
                    <p style="margin-bottom: 0">by {track.artist.name}</p>
                {/if}
            {/each}
        </div>
    </div>
</section>