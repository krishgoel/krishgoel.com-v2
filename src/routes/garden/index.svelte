<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`garden.json`).then(r => r.json()).then(plants => {
			return { plants };
		});
	}
	// Change the referred JSON file name
</script>

<script>
    export let plants
	// for (let index = 0; index < plants.length; index++) {
	// 	plants[index].slug = plants[index].title.toLowerCase().replaceAll(" ", "-");
	// }

    import { range } from '../../scripts/range'

    import Space from '../../components/space.svelte'

    let title= "Digital Garden | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my digital garden.";
    let url = "https://krishgoel.com/garden";
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
        padding-top: 30px;
    }
    .card a {
        color: var(--dark-text)
    }
</style>

<section>
    <div class="row">
        <div class="col-2">
            <h2>Garden of Thoughts</h2>
            <p>
                This is my digital garden <i>(~ dynamic blog )</i>. These are essentialy my published notes on things I am thinking about, updated periodically with any showcase worthy ideas/thoughts I gain on the topic.
            </p>
            <p>
                Some of my informally published thoughts can also be seen <a href="https://twitter.com/krshgl" target="_blank" aria-label="Twitter @krshgl">@krshgl on Twitter</a>.
            </p>
        </div>
    </div>
    <Space height={"25px"}/>
	<!-- <p>{JSON.stringify(plants)}</p> -->
	<div class="large-view">
        <div class="row">
            {#each range(0,3,1) as i, index}
                <div class="col-3">
                    {#each plants as plant, p}
                        {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h3 style="margin-bottom: 0px;">{plant.title}</h3>
                                <Space height={"5px"}/>
                                <p style="margin-bottom: 10px;">{plant.description}</p>
                                <Space height={"10px"}/>
                                <div class="tags">
                                    {#each plant.tags as tag}
                                        <p class="tag {tag.replace(/ /g, "").toLowerCase()}">{tag}</p>
                                    {/each}
                                </div>
                                <Space height={"5px"}/>
                                <div class="links">
									{#if plant.notion == false}
                                    <p><a rel="prefetch" href="garden/{plant.slug}"  aria-label="Read more">Read more</a></p>
									{:else}
									<p><a rel="prefetch" target="_blank" href="{plant.notion}"  aria-label="Read more">Notion</a></p>
									{/if}
                                </div>
                            </div>
                        </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>

    <div class="tablet-view">
        <div class="row">
            {#each range(0,2,1) as i, index}
                <div class="col-2">
                    {#each plants as plant, p}
                        {#if p%2 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h3 style="margin-bottom: 0px;">{plant.title}</h3>
                                <Space height={"5px"}/>
                                <p style="margin-bottom: 10px;">{plant.description}</p>
                                <Space height={"10px"}/>
                                <div class="tags">
                                    {#each plant.tags as tag}
                                        <p class="tag {tag.replace(/ /g, "").toLowerCase()}">{tag}</p>
                                    {/each}
                                </div>
                                <Space height={"5px"}/>
                                <div class="links">
									{#if plant.notion == false}
                                    <p><a rel="prefetch" href="garden/{plant.slug}"  aria-label="Read more">Read more</a></p>
									{:else}
									<p><a rel="prefetch" target="_blank" href="{plant.notion}"  aria-label="Read more">Notion</a></p>
									{/if}
                                </div>
                            </div>
                        </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>

    <div class="mobile-view">
        {#each plants as plant, p}
            <div class="card">
                <div class="width-restriction">
                    <h3 style="margin-bottom: 0px;">{plant.title}</h3>
                    <Space height={"5px"}/>
                    <p style="margin-bottom: 10px;">{plant.description}</p>
                    <Space height={"10px"}/>
                    <div class="tags">
                        {#each plant.tags as tag}
                            <p class="tag {tag.replace(/ /g, "").toLowerCase()}">{tag}</p>
                        {/each}
                    </div>
                    <Space height={"5px"}/>
                    <div class="links">
                        {#if plant.notion == false}
                        <p><a rel="prefetch" href="garden/{plant.slug}"  aria-label="Read more">Read more</a></p>
                        {:else}
                        <p><a rel="prefetch" target="_blank" href="{plant.notion}"  aria-label="Read more">Notion</a></p>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>