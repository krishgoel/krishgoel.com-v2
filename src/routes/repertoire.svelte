<script context="module">
    export async function preload() {
        let repertoire = await this.fetch('/data/repertoire.json');
        repertoire = await repertoire.json();
        return {
            repertoire: repertoire
        }
    }
</script>

<script>
    import { range } from '../scripts/range'
    
    import Space from '../components/space.svelte'

    export let repertoire

    let title= "Krish Goel | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigai from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";
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

<section>
	<h1>Repertoire</h1>
	<p>I casually dab into writing sometimes, usually about technology, things I am using or about the time I went backpacking to the foothills of mount Tibidabo. Here are 2 of my latest posts, I'd really appreciate it if you could check them out.</p>
	
    <Space/>
	
    <div class="row">
        {#each range(0,3,1) as i, index}
            <div class="col-3">
                {#each repertoire as skill, p}
                    {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h3>{skill.fields.name}</h3>
                                <p>{@html skill.fields.description}</p>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
	</div>
</section>