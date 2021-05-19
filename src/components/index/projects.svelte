<script>
    import {range} from '../../scripts/range'

    import fetch from 'cross-fetch'
    import sortJsonArray from 'sort-json-array'

    // const fetchProjects = (async () => {
    //     try {
    //         var response = await fetch('https://potion-api.vercel.app/table?id=5856546a8a954678937de8e1d91d99d7')
    //         var responseJSON = await response.json()
    //         responseJSON = sortJsonArray(responseJSON, "fields.showonindex")
    //         return responseJSON
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // })()
    
    // Localising JSON for dev
    const fetchProjects = (async () => {
        return ([{"fields":{"showonindex":true,"date":"April 2021","link":"Webapp","url":"https://covaid.vercel.app","description":"helped the dead n dat","name":"CovAID"},"id":"de81f8ac-6a51-4632-8fe3-6254918c4540","created":1621262820000,"last_edited":1621267380000},{"fields":{"showonindex":true,"date":"September 2019","link":"Project Documentation","url":"javascript:void(0)","description":"dun this been there dat mad","name":"BinaryBox"},"id":"6be3f1f0-1dbd-4406-a55e-446eb17b3f02","created":1621262760000,"last_edited":1621267380000}])
    })()

</script>

<section class="projects">
    <div class="width-restriction">
        <h2>My Projects</h2>
        <br/>
        {#await fetchProjects}
        <p>Projects loading...</p>
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
                            <!-- Add padding if there's no image-->
                            {#if project.fields.cover == undefined}
                            <h3 style="padding-top: 25px">{project.fields.name}</h3>
                            {:else}
                            <h3>{project.fields.name}</h3>
                            {/if}
                            <p class="mono" style="margin-bottom: 10px;">{project.fields.date}</p>
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