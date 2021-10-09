<script>
	// import fetch from 'cross-fetch'

    // const colophon = (async () => {
    //     var response = await fetch(`https://potion-api.vercel.app/html?id=4a3cc84785654ec687c0c4b2559e2834`)
    //     return await response.text()
    // })()

    let title= "Colophon | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is the colophon to the 4th edition of my portfolio website.";
    let url = "https://krishgoel.com/colophon";
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

<section class="colophon slim-container">
	<h1>Colophon</h1>

	<p>I built <a href="https://v0.krishgoel.com">my first portfolio webpage</a> in 2018, welcome to its 2nd iteration. </p>

	<h2>Tech stack</h2>
	
    <p>This version of the website is built using <a href="https://svelte.dev/">Svelte</a> (+ <a href="https://sapper.svelte.dev/">Sapper</a> for routing) and is hosted on <a href="https://vercel.com/">Vercel</a>. It takes advantage of <a href="https://github.com/KrishSkywalker/krishgoel.com-v4/actions">Github Actions</a> for pulling ~<em>live</em> data from various APIs and updating the corresponding JSON files. </p>
	
    <p>In the backend, the website uses <a href="https://notion.so">Notion</a> as its CMS, this is made possible by <a href="https://github.com/benborgers/potion">Potion API</a> (developed by <a href="https://github.com/benborgers">Ben Borgers</a>) that converts all published Notion documents into API-served data.</p>
	
    <h2>Style Guide</h2>
	
    <p>I wanted this version of the website to be minimalistic and scalable for years to come and I've tried my best to keep the design somewhat evergreen. </p>
	
    <h3>Typefaces</h3>
	
    <ul>
		<li><a href="https://www.typewolf.com/akkurat">Akkurat</a> for the main body and content</li>
		<li><a href="https://developer.apple.com/fonts/">SF Mono</a> for code snippets and other highlighted details</li>
		<li><a href="https://www.myfonts.com/fonts/latinotype/recoleta/">Recoleta</a> for <em>sweg</em> 😎</li>
	</ul>
	
    <h3>CSS Palette</h3>
	
    <pre>
        <code class="language-css">
            <span class="token selector">:root</span> <span class="token punctuation">{</span>
            <span class="token comment">/* Backgrounds */</span>
            <span class="token property">--dark-background</span><span class="token punctuation">:</span> #161616<span class="token punctuation">;</span>
            <span class="token property">--light-background</span><span class="token punctuation">:</span> #dadada<span class="token punctuation">;</span>

            <span class="token comment">/* Text colours */</span>
            <span class="token property">--dark-text</span><span class="token punctuation">:</span> #2B2B2B<span class="token punctuation">;</span>
            <span class="token property">--light-text</span><span class="token punctuation">:</span> #dadada<span class="token punctuation">;</span>

            <span class="token comment">/* Link underline and hover background */</span>
            <span class="token property">--link-underline</span><span class="token punctuation">:</span> inset 0 -8px 0<span class="token punctuation">;</span>
            <span class="token property">--link-background</span><span class="token punctuation">:</span> inset 0 -20px 0<span class="token punctuation">;</span>

            <span class="token property">--dark-link-color</span><span class="token punctuation">:</span> #353535<span class="token punctuation">;</span>
            <span class="token property">--dark-link-underline</span><span class="token punctuation">:</span> #93939388<span class="token punctuation">;</span>
            <span class="token property">--dark-link-hover-bg</span><span class="token punctuation">:</span> #939393b7<span class="token punctuation">;</span>
            <span class="token property">--dark-link-hover</span><span class="token punctuation">:</span> #313131<span class="token punctuation">;</span>

            <span class="token property">--light-link-color</span><span class="token punctuation">:</span> #e2e2e2<span class="token punctuation">;</span>
            <span class="token property">--light-link-underline</span><span class="token punctuation">:</span> #81818171<span class="token punctuation">;</span>
            <span class="token property">--light-link-hover-bg</span><span class="token punctuation">:</span> #666666<span class="token punctuation">;</span>
            <span class="token property">--light-link-hover</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>

            <span class="token comment">/* Blockquote background */</span>
            <span class="token property">--dark-blockquote-background</span><span class="token punctuation">:</span> #dadada28<span class="token punctuation">;</span>
            <span class="token property">--light-blockquote-background</span><span class="token punctuation">:</span> #2B2B2B28<span class="token punctuation">;</span>

            <span class="token comment">/* Card shadows */</span>
            <span class="token property">--light-card-shadow</span><span class="token punctuation">:</span> 7px 7px 21px -10px #000000<span class="token punctuation">;</span>
            <span class="token property">--dark-card-shadow</span><span class="token punctuation">:</span> 7px 7px 21px -10px #252525<span class="token punctuation">;</span>

            <span class="token comment">/* Selection colour */</span>
            <span class="token property">--selection-font</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
            <span class="token property">--selection-background</span><span class="token punctuation">:</span> #00415f73<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        </code>
    </pre>
	<h2>Licenses</h2>
	<ul>
		<li>The complete <a href="https://github.com/KrishSkywalker/krishgoel.com-v4">source-code</a> is li­censed un­der the <a href="https://github.com/KrishSkywalker/krishgoel.com-v4/blob/main/LICENSE">MIT li­cense</a></li>
		<li>All the text con­tent is li­censed un­der <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution International 4.0 li­cense</a> (CC-BY 4.0)</li>
		<li>The website is also copyrighted</li>
	</ul>
</section>