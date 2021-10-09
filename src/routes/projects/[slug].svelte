<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`projects/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { project: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
    import Space from '../../components/space.svelte'

	export let project

    let title= project.title + " | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is the documentation to my Project " + project.title;
    let url = "https://krishgoel.com/projects/" + project.slug;
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

<section class="slim-container">
	{@html project.html}
</section>