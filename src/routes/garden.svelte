<script>
    import Space from '../components/space.svelte'
    
    let title= "Digital Garden | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my digital garden.";
    let url = "https://krishgoel.com/garden";
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
            <h2>Thoughts Garden</h2>
            <p>This is a digital garden (more on that <a href="https://cagrimmett.com/notes/2020/11/08/what-are-digital-gardens/" target="_blank"  aria-label="Digital Garden Explanantion">here</a>). It's essentially me publishing my notes and updating them periodically with new ideas and insights I gain on the topic, expectedly about technology, things I am using, or about the time I went backpacking to the foothills of mount Tibidabo ;) <i>This will take some more time for me to fully organize</i></p>          
        </div>
    </div>
</section>