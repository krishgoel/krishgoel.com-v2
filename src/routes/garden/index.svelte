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

    let title= "Krish Goel | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigai from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";

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
            <h2>Thoughts n dat</h2>
            <p>I casually dab into writing sometimes, usually about technology, things I am using or about the time I went backpacking to the foothills of mount Tibidabo. Here are 2 of my latest posts, I'd really appreciate it if you could check</p>
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
                                <p><a href="/garden/{blog.fields.url}">Read more</a></p>
                            </div>
                        </div>
                    </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
</section>