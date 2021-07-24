<script context="module">
    export async function preload(page, session) {
        const res = await this.fetch("https://potion-api.vercel.app/html?id=4a3cc84785654ec687c0c4b2559e2834")
        const colophon = await res.text()

        return { colophon: colophon }
    }
</script>

<script>
    export let colophon

    let title= "Colophon | krishgoel.com";
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

<section class="thanks">
    <div class="width-restriction">
        <h1>Colophon</h1>
        <br/>
        {@html colophon}
    </div>
</section>