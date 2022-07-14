<script context="module">
    export async function preload() {
        let plants = await this.fetch(`/data/plants.json`);
        plants = await plants.json()

        // Return values
        return {
            plants: plants.results
        }
    }
</script>

<script>
    export let plants
    
    plants = plants.sort((a, b) => (new Date(a.last_edited_time) > new Date(b.last_edited_time)) ? -1 : 1)

    let garden = [];
    for (let i = 0; i < plants.length; i++) {
        plants[i].url = plants[i].url.replace("www.notion.so", "krishgoel.notion.site");
        if (plants[i].properties.Description.rich_text[0] != undefined) {
            garden.push({
                "title": plants[i].properties.Name.title[0].text.content,
                "description": plants[i].properties.Description.rich_text[0].text.content,
                "tags": plants[i].properties.Topic.multi_select,
                "link": plants[i].url
            })
        } else (
            garden.push({
                "title": plants[i].properties.Name.title[0].text.content,
                "description": "",
                "tags": plants[i].properties.Topic.multi_select,
                "link": plants[i].url
            })
        )
    }
    // console.log("Garden: " + JSON.stringify(garden));

    import { range } from '../../scripts/range'

    import Space from '../../components/space.svelte'
    
    let title= "Digital Garden | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my digital garden.";
    let url = "https://krishgoel.com/garden";
</script>

<style>
    .card {
        padding-top: 30px;
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
    <!-- <script src='https://kit.fontawesome.com/2fe9fae216.js' crossorigin='anonymous'></script> -->
</svelte:head>

<section>
    <div class="row">
        <div class="col-2">
            <h2>Garden of Thoughts</h2>
            <!-- <p>Under maintenance, considering checking out <a href="/blog" aria-label="Blog">/blog</a> in the meanwhile.</p> -->
            <p>
                This is my digital garden <i>(~ dynamic blog )</i>. These are essentialy my published notes on things I am thinking about, updated periodically with any showcase worthy ideas/thoughts I gain on the topic.
            </p>
            <p>
                While I am still underway organising this section, it's currently hosted on Notion and I wish to make it collaborative. If you have anything you'd like to add to my notes (including falsification), feel free to do so by <a href="/contact" aria-label="Contact">reaching out to me</a>.
            </p>
        </div>
    </div>
    
    <Space height={"25px"}/>

    <div class="large-view">
        <div class="row">
            {#each range(0,3,1) as i, index}
                <div class="col-3">
                    {#each garden as plant, p}
                        {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h4>{plant.title}</h4>
                                <Space height={"10px"}/>
                                <p style="margin-bottom: 10px;">{plant.description}</p>
                                <Space height={"10px"}/>
                                <div class="tags">
                                    {#each plant.tags as tag}
                                        <p class="tag {tag.name.replace(/ /g, "").toLowerCase()}">{tag.name}</p>
                                    {/each}
                                </div>
                                <Space height={"6px"}/>
                                <!-- Links -->
                                <div class="links">
                                    <p><a rel="prefetch" target="_blank" href="{plant.link}"  aria-label="Read more">Read more</a></p>
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
                    {#each garden as plant, p}
                        {#if p%2 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h4>{plant.title}</h4>
                                <Space height={"10px"}/>
                                <p style="margin-bottom: 10px;">{plant.description}</p>
                                <Space height={"10px"}/>
                                <div class="tags">
                                    {#each plant.tags as tag}
                                        <p class="tag {tag.name.replace(/ /g, "").toLowerCase()}">{tag.name}</p>
                                    {/each}
                                </div>
                                <Space height={"6px"}/>
                                <!-- Links -->
                                <div class="links">
                                    <p><a rel="prefetch" target="_blank" href="{plant.link}"  aria-label="Read more">Read more</a></p>
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
        {#each garden as plant, p}
        <div class="card">
            <div class="width-restriction">
                <h4>{plant.title}</h4>
                <Space height={"10px"}/>
                <p style="margin-bottom: 10px;">{plant.description}</p>
                <Space height={"10px"}/>
                                <div class="tags">
                    {#each plant.tags as tag}
                        <p class="tag {tag.name.replace(/ /g, "").toLowerCase()}">{tag.name}</p>
                    {/each}
                </div>
                <Space height={"6px"}/>
                <!-- Links -->
                <div class="links">
                    <p><a rel="prefetch" target="_blank" href="{plant.link}"  aria-label="Read more">Read more</a></p>
                </div>
            </div>
        </div>
        {/each}
    </div>
</section>