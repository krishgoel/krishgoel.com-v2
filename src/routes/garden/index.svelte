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
    /* .card a {
        display: flex;
        justify-content: space-between;
        align-items: center;
    } */
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

<section class="slim-container">
    <h2>Garden of Thoughts</h2>
    <p>This is a digital garden (more on that <a href="https://cagrimmett.com/notes/2020/11/08/what-are-digital-gardens/" target="_blank"  aria-label="Digital Garden Explanantion">here</a>). It's essentially me publishing my notes and updating them periodically with new ideas and insights I gain on the topic, which can lie anywhere on the spectrum between behaviorism and design.</p>
    
    <p><i>This will take some more time for me to fully organize. Meanwhile you can check out more furnished ideas at <a href="/blog" aria-label="Blog">/blog</a>. </i>Inspired by <a href="https://kabirgoel.com/garden" aria-label="Kabir Goel's Digital Garden" target="_blank">Kabir Goel's Garden</a>.</p>
    <Space height={"25px"}/>

    <div class="large-view tablet-view">
        <div class="row">
            {#each range(0,2,1) as i, index}
                <div class="col-2">
                    {#each garden as plant, p}
                        {#if p%2 == i}
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
    </div>
</section>