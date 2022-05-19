<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts

    import { range } from '../../scripts/range'
    import fetch from 'cross-fetch'
    
    import Space from '../../components/space.svelte'
    
    let title= "Blog | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my blog.";
    let url = "https://krishgoel.com/blog";
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
    .card {
        padding-top: 30px
    }
</style>

<section class="slim-container">
    <h2>web.log(thoughts)</h2>
    <p>Welcome to my blog. I plan on updating it periodically with any showcase worthy ideas/thoughts I have, expectedly about technology, things I am using, or about the time I went backpacking to the foothills of mount Tibidabo ;) <i>For a more recent insight into my current thoughts, check out <a rel="prefetch" href="/garden" aria-label="Digital Garden">/garden</a>.</i></p>
    <Space height={"25px"}/>

    <div class="large-view tablet-view">
        <div class="row">
            {#each range(0,2,1) as i, index}
                <div class="col-2">
                    {#each posts as post, p}
                        {#if p%2 == i}
                            <div class="card">
                                <div class="width-restriction">
                                    <h3>{post.title}</h3>
                                    <p>{post.readtime}</p>
                                    <Space height={"10px"}/>
                                    <p style="margin-bottom: 10px;">{post.description}</p>
                                    <!-- Links -->
                                    <div class="links">
                                        <p><a rel="prefetch" href="blog/{post.slug}" aria-label="Read more">Read more</a></p>
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
        {#each posts as post, p}
            <div class="card">
                <div class="width-restriction">
                    <h3>{post.title}</h3>
                    <p>{post.readtime}</p>
                    <Space height={"10px"}/>
                    <p style="margin-bottom: 10px;">{post.description}</p>
                    <!-- Links -->
                    <div class="links">
                        <p><a rel="prefetch" href="blog/{post.slug}" aria-label="Read more">Read more</a></p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>