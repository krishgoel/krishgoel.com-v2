<script>
    let title= "Krish Goel | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigai from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";

    // import {range} from '../scripts/range'

    // import fetch from 'cross-fetch'
    // import sortJsonArray from 'sort-json-array'

    import Intro from '../components/index/intro.svelte'
    import Banner from '../components/index/banner.svelte'
    import YouTube from '../components/index/youtube.svelte'
    import Projects from '../components/index/projects.svelte'
    import Blog from '../components/index/blog.svelte'

    // const fetchProjects = (async () => {
    //     var response = await fetch('https://potion-api.vercel.app/table?id=5856546a8a954678937de8e1d91d99d7')
    //     var responseJSON = await response.json()
    //     responseJSON = sortJsonArray(responseJSON, "fields.showonindex")
    //     return responseJSON
    // })()
    
    // Localising JSON for dev
    // const fetchProjects = (async () => {
    //     return ([{"fields":{"showonindex":true,"date":"April 2021","link":"Webapp","url":"https://covaid.vercel.app","description":"helped the dead n dat","name":"CovAID"},"id":"de81f8ac-6a51-4632-8fe3-6254918c4540","created":1621262820000,"last_edited":1621267380000},{"fields":{"showonindex":true,"date":"September 2019","link":"Project Documentation","url":"javascript:void(0)","description":"dun this been there dat mad","name":"BinaryBox"},"id":"6be3f1f0-1dbd-4406-a55e-446eb17b3f02","created":1621262760000,"last_edited":1621267380000}])
    // })()

</script>

<style>
    
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

    <Banner/>
    <div class="dark">
        <Intro/>
    </div>
    <div class="light">
        <YouTube/>
    </div>
    <div class="dark">
        <Projects/>
    </div>
    <div class="light">
        <Blog/>
    </div>
    
</section>