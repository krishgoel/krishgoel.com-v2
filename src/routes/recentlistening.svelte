<script context="module">
    export async function preload(page, session) {
        const liveFetch = await this.fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=KrishSkywalker&api_key=faa73d570313176a337af4dea9827765&format=json&limit=1")
        const live = await liveFetch.json()
        
        const playlistsFetch = await this.fetch("https://potion-api.vercel.app/table?id=050a58e2eb48411b8c21d867d566be1e")
        const playlists = await playlistsFetch.json()

        const songsFetch = await this.fetch("https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=KrishSkywalker&api_key=faa73d570313176a337af4dea9827765&period=7day&limit=12&format=json")
        const songs = await songsFetch.json()

        const artistsFetch = await this.fetch("https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=KrishSkywalker&api_key=faa73d570313176a337af4dea9827765&period=7day&limit=12&format=json")
        const artists = await artistsFetch.json()

        return { 
            live: live,
            playlists: playlists,
            songs: songs.toptracks.track,
            artists: artists.topartists.artist
        }
    }
</script>

<script>
    import { range } from '../scripts/range'

    export let live
    export let playlists
    export let songs
    export let artists

    let title= "Recent Listening | krishgoel.com";
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
    .card {
        padding: 20px 0;
    }
    .card h3 {
        font-size: 22px
    }
</style>

<section class="recent-listening">
    <div class="width-restriction">
        <div class="row">
            <div class="col-2">
                <div class="card dark" style="background-color: #000000">
                    <div class="width-restriction">
                        <iframe src="https://open.spotify.com/embed/playlist/{playlists[0].fields.link}?theme=0" width="100%" height="300px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>
            <div class="col-2">

                <!-- Live listening card -->
                <div class="card light">
                    <div class="width-restriction">
                        {#if live.recenttracks.track[0].hasOwnProperty("@attr")}
                        <p>Currently listening to</p>
                        {:else}
                        <p>Last listened to</p>
                        {/if}
                        <h3>{live.recenttracks.track[0].name}</h3>
                        <p>by <strong>{live.recenttracks.track[0].artist["#text"]}</strong></p>
                    </div>
                </div>
                <br/>

                <!-- Playlists -->
                <h2>Checkout <a href="https://open.spotify.com/user/39emqovi90p90iq1sfbczkan0/playlists">my other playlists</a></h2>
                <br/>
                <div class="row">
                    <div class="col-2">
                        <div class="card light">
                            <div class="width-restriction">
                                <h3>{playlists[1].fields.playlist}</h3>
                                <p>{playlists[1].fields.description}</p>
                                <br>
                                <p><a href="https://open.spotify.com/playlist/{playlists[1].fields.link}" target="_blank">Listen now</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="card light">
                            <div class="width-restriction">
                                <h3>{playlists[2].fields.playlist}</h3>
                                <p>{playlists[2].fields.description}</p>
                                <br>
                                <p><a href="https://open.spotify.com/playlist/{playlists[2].fields.link}" target="_blank">Listen now</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <br/>
        <!-- <h1>Recent Listening Activity</h1>
        <p>A lot of things that learnt dun by urs truly</p>
        <br/><br/> -->
        
        <!-- Top tracks -->
        <h2>This week in music</h2>
        <br/>

        <div class="row">
            {#each range(0,4,1) as i, index}
            <div class="col-4">
                {#each songs as song, s}
                {#if s%4 == i}
                <div class="card light">
                    <div class="width-restriction">
                        <h3>{song.name}</h3>
                        <p>by <strong>{song.artist.name}</strong></p>
                        <br/>
                        <p>Played {song.playcount} times</p>
                    </div>
                </div>
                {/if}
                {/each}
            </div>
            {/each}
        </div>

        <br/><br/>

        <!-- Top artists -->
        <h2>Top artists</h2>
        <br/>

        <div class="row">
            {#each range(0,4,1) as i, index}
            <div class="col-4">
                {#each artists as artist, a}
                {#if a%4 == i}
                <div class="card light">
                    <div class="width-restriction">
                        <h3>{artist.name}</h3>
                        <p>Played {artist.playcount} times</p>
                    </div>
                </div>
                {/if}
                {/each}
            </div>
            {/each}
        </div>

    </div>
</section>