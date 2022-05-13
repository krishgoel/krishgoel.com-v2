<script>
	// import fetch from 'cross-fetch'

    // const thanks = (async () => {
    //     var response = await fetch(`https://potion-api.vercel.app/html?id=8c5410f76b7444179afdfd874665a9b5`)
    //     return await response.text()
    // })()

    let title= "Thanks | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is a thank you to everyone who's helped me in my journey.";
    let url = "https://krishgoel.com/thanks";
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

<section class="thanks slim-container post">
    <h1>Thanks</h1>
    <p>This is a page dedicated to thank everyone who's been an absolute madlad</p>
    <h2>Development of this website</h2>
    <ul>
        <li><a href="https://ishaandas.com/" target="_blank">Ishaan Das</a> made some fantastic <a href="https://www.figma.com/file/ys6XyJryfwtPeraRADHH0R/" target="_blank">Figma mockups</a>, gratis. He's also the guy behind the grid on the index page, make sure you check out his work. </li>
        <li><a href="https://www.mahmoudashraf.dev/" target="_blank">Mahmoud Ashraf</a> for writing <a href="https://www.mahmoudashraf.dev/blog/build-a-blog-with-svelte-and-markdown/" target="_blank">this article</a> on adding highlighting to markdown rendered Svelte.</li>
        <li><a href="https://github.com/ayushashi11" target="_blank">Prabhakar Dev</a> writing the <a href="https://github.com/KrishSkywalker/krishgoel.com-v2/blob/main/static/images/uploads/convert-to-web.py" target="_blank">Python script to convert all image files</a> to .webp format.</li>
    </ul>
    <h2>General note of thanks</h2>
    <ul>
        <li>The fam gang for not disowning me</li>
        <li>The entire fookin Mandem, for more check out <a href="/bigdonmegaladon">/bigdonmegaladon</a></li>
    </ul>
</section>