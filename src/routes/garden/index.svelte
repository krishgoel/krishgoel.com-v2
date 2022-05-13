<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`garden.json`).then(r => r.json()).then(garden => {
			return { garden };
		});
	}
</script>

<script>
    export let garden

    // In case of switching from CMS functionality to typed-in JS Objects
    // let garden = [
    //     {
    //         "title": "",
    //         "description": "",
    //         "url": ""
    //     }
    // ]

    import { range } from '../../scripts/range'

    import Space from '../../components/space.svelte'
    
    let title= "Digital Garden | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my digital garden.";
    let url = "https://krishgoel.com/garden";
</script>

<style>
    .card {
        padding: 25px 0;
    }
    .card a {
        color: var(--dark-text)
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

    <!-- For loading FA Icons -->
    <script src='https://kit.fontawesome.com/2fe9fae216.js' crossorigin='anonymous'></script>
</svelte:head>

<section>
    <div class="row">
        <div class="col-2">
            <h2>Garden of Thoughts</h2>
            <p>Under maintenance, considering checking out <a href="/blog" aria-label="Blog">/blog</a> in the meanwhile.</p>
            <!-- <p>
                This is a digital garden (more on that <a href="https://cagrimmett.com/notes/2020/11/08/what-are-digital-gardens/" target="_blank" aria-label="Digital Garden Explanantion">here</a>). It's essentially me publishing my notes and updating them periodically with new ideas and insights I gain on the topic, which can lie anywhere on the spectrum between behaviorism and design.
            </p>
            <p>
                <i>It will take me some time to fully organise this section. I tend to push more furnished ideas to <a href="/blog" target="_blank" aria-label="Blog">/blog</a>, considering checking them out in the meanwhile.</i> Inspired by <a href="https://kabirgoel.com" aria-label="Kabir Goel's Digital Garden" target="_blank">Kabir Goel's Garden</a>.
            </p>
        </div>
    </div>
    
    <Space height={"25px"}/>

    <div class="large-view tablet-view">
        <div class="row">
            {#each range(0,3,1) as i, index}
                <div class="col-3">
                    {#each garden as plant, p}
                        {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h4>
                                    <a href="{plant.url}" target="_blank" aria-label="Link to {plant.title}">
                                        {plant.title} 
                                        <i class='fas fa-external-link-alt' style="font-size: 12px; position: relative; bottom: 2px"></i>
                                    </a>
                                </h4>
                                <p>{plant.description}</p>
                            </div>
                        </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="mobile-view">
        {#each garden as plant, p}
        <div class="card">
            <div class="width-restriction">
                <h4>
                    <a href="{plant.url}" target="_blank" aria-label="Link to {plant.title}">{plant.title} <i class='fas fa-external-link-alt' style="font-size: 12px; position: relative; bottom: 2px"></i></a>
                </h4>
                <p>{plant.description}</p>
            </div>
        </div>
        {/each}
    </div> -->
</section>