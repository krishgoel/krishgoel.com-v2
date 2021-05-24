<script>
    import fetch from 'cross-fetch'

    // const fetchSocials = (async () => {
    //     try {
    //         var response = await fetch('https://potion-api.vercel.app/table?id=fe3fe0e8c9e54061b7412307da4c035f')
    //         return await response.json()
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // })()
    
    // Localising JSON for dev
    const fetchSocials = (async () => {
        return ([{"fields":{"platform":"Instagram"},"id":"3f34a1c4-af11-4f85-a0a1-42275eca96ee","created":1621407985020,"last_edited":1621407960000},{"fields":{"platform":"Facebook"},"id":"1ef38292-f8e1-47de-9b75-c790dda53490","created":1621407985020,"last_edited":1621407960000},{"fields":{"platform":"Twitter"},"id":"fb119c3c-e199-4e9d-abe0-fa00fb221f6e","created":1621407985020,"last_edited":1621407960000},{"fields":{"platform":"Clubhouse"},"id":"99ab2e2e-3d65-4564-b1cd-ec933ca40457","created":1621408587272,"last_edited":1621408680000},{"fields":{"platform":"GitHub"},"id":"c68c5627-ee66-4efc-99a8-6d71f82bae23","created":1621408587272,"last_edited":1621408680000},{"fields":{"platform":"Email"},"id":"a0ceb512-d290-4835-a61c-c5adf93cc6d9","created":1621408587270,"last_edited":1621408680000}])
    })()

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
    .socials, .socials p {
        display: inline-block
    }
    .socials p {
        margin-right: 5px;
        margin-bottom: 10px
    }
</style>

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
                        <p>by <a href="{data.recenttracks.track[0].url}" target="_blank "style="font-weight: 700">{data.recenttracks.track[0].artist["#text"]}</a></p>
                        {:catch error}
                        <p class="mono">There has been an error due to the <a href="https://potion-api.vercel.app/" target="_blank">Potion API</a> (third party) used</p>
                        {/await}
                        <br/>
                        <p>Here's what <a hef="/recent">I been listening to lately</a></p>
                    </div>
                </div>
            </div>
            <div class="contact col-2">
                <br/>
                <h2>Reach me</h2>
                <p>I can be found on most of the social media platforms by @krishskywalker7</p>
                <br/>
                <div class="socials">
                    {#await fetchSocials}
                    <p>Data loading...</p>
                    {:then data}
                    {#each data as social}
                        <p><a href="{social.fields.url}" target="_blank">{social.fields.platform}</a></p>
                    {/each}
                    {:catch error}
                    <p class="mono">There has been an error due to the <a href="https://potion-api.vercel.app/" target="_blank">Potion API</a> (third party) used</p>
                    {/await}
                </div>
            </div>
        </div>
    </div>
</section>