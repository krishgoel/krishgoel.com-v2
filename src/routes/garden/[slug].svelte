<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`garden/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { plant: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
    import Space from '../../components/space.svelte'

	export let plant

    let title= plant.title + " | krishgoel.com";
    let description = "Digital Garden: " + plant.description;
    let url = "https://krishgoel.com/garden/" + plant.slug;
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
    .tags {
        display: inline-block;
    }
    .tag {
        display: inline-block;
        margin-right: 4px;
        margin-bottom: 3px;
        font-size: 13px;
        padding: 3px 7px 2px 7px;
        border-radius: 5px;
        color: var(--light-text);
    }
    hr {
        background-color: var(--light-text);
    }
</style>

<section class="slim-container post">
    <h1>{plant.title}</h1>
    <blockquote>{plant.description}</blockquote>
    <div class="tags">
        {#each plant.tags as tag}
            <p class="tag {tag.replace(/ /g, "").toLowerCase()}">{tag}</p>
        {/each}
    </div>
    <!-- <Space height={"20px"}/> -->
    <hr/>
	{@html plant.html}
</section>