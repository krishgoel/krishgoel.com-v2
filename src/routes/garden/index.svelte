<script>
    import { range } from '../../scripts/range'
    import fetch from 'cross-fetch'

    import Space from '../../components/space.svelte'

    const blogposts = (async () => {
        var response = await fetch(`https://potion-api.vercel.app/table?id=c962b6a899d94ea39739998c6690b54b`)
        return await response.json()
    })()
</script>

<style>
    .card {
        padding-top: 20px
    }
</style>

<section>
    <h2 style="margin-bottom: 5px">Thoughts n dat</h2>
    <p>I casually dab into writing sometimes, usually about technology, things I am using or about the time I went backpacking to the foothills of mount Tibidabo. Here are 2 of my latest posts, I'd really appreciate it if you could check them out.</p>
    <Space/>

    <div class="row">
        {#await blogposts}
        <!-- Loading -->
        {:then data}
        {#each range(0,3,1) as i, index}
            <div class="col-3">
                {#each data as blog, p}
                {#if p%3 == i}
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
        {:catch error}
        <!-- Throw error -->
        {/await}
    </div>
</section>