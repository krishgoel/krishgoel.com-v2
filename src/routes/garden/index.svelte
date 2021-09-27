<script context="module">
    export async function preload() {
        let plants = await this.fetch(`/data/plants.json`);
        plants = await plants.json()
        
        // Return values
        return {
            plants: plants
        }
    }
</script>

<script>
    import { range } from '../../scripts/range'
    import fetch from 'cross-fetch'

    import Space from '../../components/space.svelte'

    let title= "Digital Garden | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my digital garden.";
    let url = "https://krishgoel-v4.vercel.app/garden";

    export let plants
</script>

<style>
    .card {
        padding-top: 30px
    }
</style>

<section>
    <div class="row">
        <div class="col-2">
            <h2>Thoughts Garden</h2>
            <p>This is a digital garden (more on that <a href="https://cagrimmett.com/notes/2020/11/08/what-are-digital-gardens/" target="_blank"  aria-label="Digital Garden Explanantion">here</a>). It's essentially me publishing my notes and updating them periodically with new ideas and insights I gain on the topic, expectedly about technology, things I am using, or about the time I went backpacking to the foothills of mount Tibidabo ;) <i>This will take some more time for me to fully organize</i></p>          
        </div>
    </div>
    <Space height={"25px"}/>

    <div class="row">
        {#each range(0,2,1) as i, index}
            <div class="col-2">
                {#each plants as blog, p}
                    {#if p%2 == i}
                    <div class="card">
                        <div class="width-restriction">
                            <h3>{blog.fields.title}</h3>
                            <p style="margin-bottom: 10px;">{blog.fields.description}</p>
                            <!-- Links -->
                            <div class="links">
                                <p><a href="/garden/{blog.fields.url}"  aria-label="Read more">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
</section>