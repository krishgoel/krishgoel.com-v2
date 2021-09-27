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

    let title= "Repertoire | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my repertoire.";
    let url = "https://krishgoel-v4.vercel.app/repertoire";
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
	<div class="row">
        <div class="col-2">
            <h2>Repertoire</h2>
            <p>While programming and design-based problem solving are my métier, I am also looking to venture into the more tangible biomes of technology like cyber-physical systems and will be pursuing my undergrad degree in mechatronics. I eventually aim to work on "smarter" energy sources, brain-computer interfaces, and making STEM education accessible for everyone.</p>
        </div>
    </div>
    <Space height={"25px"}/>
	
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