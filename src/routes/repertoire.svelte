<script context="module">
    export async function preload(page, session) {
        const res = await this.fetch("https://potion-api.vercel.app/table?id=0eae798749454e2a83065701c8ab4c33")
        const repertoire = await res.json()

        return { repertoire: repertoire }
    }
</script>

<script>
    import { range } from '../scripts/range'

    export let repertoire

    let title= "Repertoire | krishgoel.com";
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

<section class="repertoire">
    <div class="width-restriction">
        <h1>Repertoire</h1>
        <p>A lot of things that learnt dun by urs truly</p>
        <br/>
        <div class="row dark">
            {#each range(0,3,1) as i, index}
                <div class="col-3">
                    {#each repertoire as skill, p}
                    {#if p%3 == i}
                    <div class="card">
                        <div class="width-restriction">
                            <h3 style="padding-top: 25px">{skill.fields.name}</h3>
                            <p>{@html skill.fields.description}</p>
                            <!-- <div class="links">
                                {#if experience.fields.link1 != undefined}
                                <p><a href="{experience.fields.url1}">{experience.fields.link1}</a></p>
                                {/if}
                                {#if experience.fields.link2 != undefined}
                                <p><a href="{experience.fields.url2}">{experience.fields.link2}</a></p>
                                {/if}
                            </div> -->
                        </div>
                    </div>
                    {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</section>