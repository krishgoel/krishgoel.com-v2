<script context="module">
    export async function preload() {
        let experience = await this.fetch('/data/experience.json');
        experience = await experience.json();
        return {
            experience: experience
        }
    }
</script>

<script>
    import { range } from '../scripts/range'
    
    import Space from '../components/space.svelte'

    export let experience

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
	<div class="row">
        <div class="col-2">
            <h2>XP</h2>
            <p>I casually dab into writing sometimes, usually about technology, things I am using or about the time I went backpacking to the foothills of mount Tibidabo. Here are 2 of my latest posts, I'd really appreciate it if out.</p>
        </div>
    </div>
    <Space height={"25px"}/>
	
    <div class="row">
        {#each range(0,3,1) as i, index}
            <div class="col-3">
                {#each experience as experience, p}
                    {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h3>{experience.fields.title}</h3>
                                <p class="mono" style="margin-bottom: 10px; font-size: 14px">{experience.fields.date}</p>
                                <p style="margin-bottom: 10px;">{experience.fields.description}</p>
                                <!-- Links -->
                                <div class="links">
                                    {#if experience.fields.link1 != undefined}
                                        <p><a href="{experience.fields.url1}">{experience.fields.link1}</a></p>
                                    {/if}
                                    {#if experience.fields.link2 != undefined}
                                        <p><a href="{experience.fields.url2}">{experience.fields.link2}</a></p>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
	</div>
</section>