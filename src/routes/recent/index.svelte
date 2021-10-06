<script>
	import fetch from 'cross-fetch'

    import Space from '../../components/space.svelte'

    const topTracks = (async () => {
        let response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&period=7day&user=KrishSkywalker&api_key=faa73d570313176a337af4dea9827765&format=json&limit=5`)
        response = await response.json()
        return response.toptracks.track
    })()

    const readlist = (async () => {
        let response = await fetch(`https://potion-api.vercel.app/table?id=ed5a59a2d5924e6f81044a1ac9247f97`)
        response = await response.json()
        return response
    })()

    let title= "Recent Activity | krishgoel.com";
    let description = "Hi, this page reflects the recent activities of Krish, a technophile and maker from New Delhi.";
    let url = "https://krishgoel.com/recent";
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
    <h1>Recent Activity</h1>
    <Space height={"25px"}/>
    <div class="row">
        <div class="col-2">
            <div class="inline">
                <h2>Top Tracks</h2>
                <p><a href="https://last.fm/user/KrishSkywalker" target="_blank" aria-label="My Last.fm">Last.fm ></a></p>
            </div>
            <Space height={"10px"}/>
            <div class="card">
                <div class="width-restriction">
                    {#await topTracks}
                    <!--  -->
                    {:then data}
                        {#each data as track, i}
                            {#if i != 4}
                                <h4>{track.name}</h4>
                                <p>by {track.artist.name}</p>
                                <hr/>
                            {:else}
                                <h4>{track.name}</h4>
                                <p style="margin-bottom: 0">by {track.artist.name}</p>
                            {/if}
                        {/each}
                    {/await}
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="inline">
                <h2>Reading</h2>
                <p><a href="https://krishgoel.notion.site/ed5a59a2d5924e6f81044a1ac9247f97?v=6f977945ff954f4e91c1be3a4ea83295" target="_blank" aria-label="My Read List">My Read List ></a></p>
            </div>
            <Space height={"10px"}/>
            <div class="card">
                <div class="width-restriction">
                    <p>Currently reading</p>
                    <Space height={"10px"}/>
                    {#await readlist}
                        <!--  -->
                    {:then data}
                        {#each data as book, i}
                            {#if book.fields.Status == "Currently reading"}
                                <h4>{book.fields.Book}</h4>
                                <Space height={"10px"}/>
                                <p>by <strong>{book.fields.Author}</strong></p>
                            {/if}
                        {/each}
                    {/await}
                </div>
            </div>
            <div class="inline">
                <h2>Learning</h2>
                <p><a href="https://krishgoel.notion.site/Learn-List-39a102bb06044a3cbd0830cd6555b6ca" target="_blank" aria-label="My Learn List">My Learn List ></a></p>
            </div>
        </div>
    </div>
</section>