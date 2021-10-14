<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
    import Space from '../../components/space.svelte'

	export let post

    let title= post.title + " | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my blog.";
    let url = "https://krishgoel.com/blog/" + post.slug;
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

<section class="slim-container post">
    <p>{post.date} · {post.readtime}</p>
    <Space/>
	{@html post.html}
</section>