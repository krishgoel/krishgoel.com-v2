<script>
    import {range} from '../../scripts/range'

    import fetch from 'cross-fetch'
    import sortJsonArray from 'sort-json-array'

    // const fetchBlogposts = (async () => {
    //     var response = await fetch('https://potion-api.vercel.app/table?id=c962b6a899d94ea39739998c6690b54b')
    //     var responseJSON = await response.json()
    //     responseJSON = sortJsonArray(responseJSON, "fields.showonindex")
    //     return responseJSON
    // })()
    
    // Localising JSON for dev
    const fetchBlogposts = (async () => {
        return ([{"fields":{"description":"I mean, the title's pretty self explanatory. Read this shit to be revered by the GeoGuesser/Risk Mandem.","showonindex":true,"title":"Aversed: A mathematical model to beat Risk everytime"},"id":"c3de8131-6022-4b54-9c65-cd6453a6c0d5","created":1621366631940,"last_edited":1621372200000},{"fields":{"description":"I mean, the title's pretty self explanatory. Read this shit to be revered by the GeoGuesser/Risk Mandem.","showonindex":true,"title":"Aversed: A mathematical model to beat Risk everytime"},"id":"b55ddfe2-0f89-4642-99ac-a317b1a6404b","created":1621372200000,"last_edited":1621372200000}])
    })()

</script>

<section class="blog">
    <div class="width-restriction">
        <h2>Thots n dat</h2>
        <p>I casually dab into writing sometimes, usually about technology, things I am using or about the time I went backpacking to the foothills of mount Tibidabo. Here are 2 of my latest posts, I'd really appreciate it if you could check them out.</p>
        <br/>

        {#await fetchBlogposts}
        {:then data}
        <div class="row">
            {#each range(0,2,1) as i, index}
                <div class="col-2">
                    {#each data as blogpost, p}
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
        {:catch error}
        <p class="mono">There has been an error due to the <a href="https://potion-api.vercel.app/" target="_blank">Potion API</a> (third party) used</p>
        {/await}

        <!-- <div class="row">
            <div class="col-2">

                <div class="card">
                    <div class="width-restriction">
                        <br/>
                        <h3>Aversed: A mathematical model to beat Risk everytime</h3>
                        <p>I mean, the title's pretty self explanatory. Read this shit to be revered by the GeoGuesser/Risk Mandem.</p>
                        <br/>
                        <p><a href="">Read now</a></p>
                        <br/>
                    </div>
                </div>
            
            </div>
        </div> -->
    </div>
</section>