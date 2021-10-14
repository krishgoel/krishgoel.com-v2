<script>
	// import fetch from 'cross-fetch'

    // const about = (async () => {
    //     var response = await fetch(`https://potion-api.vercel.app/html?id=491e86f5e76b4b048ee3bb6cd7679750`)
    //     return await response.text()
    // })()

    let title= "About | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi.";
    let url = "https://krishgoel.com/about";
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
    <img src="/images/uploads/about.jpg" alt="Krish Goel">

    <p>Hi there, I am Krish. I am a technophile from New Delhi, currently pursuing my BTech in Mechatronics from <a href="https://manipal.edu/mit.html">MIT, Manipal</a>. My Interest lies at the intersection of CS, cyber-physical systems, and behavioral psychology alongside startups and finances.</p>
    
    <p>While programming and design-based problem solving are my métier, I am venturing into the more tangible biomes of technology like cyber-physical systems. My current vision for the future holds working on brain-computer interfaces, developing "smarter" energy sources, and making STEM education accessible for everyone.</p>
    
    <p>I attended <a href="http://sanskritischool.edu.in">Sanskriti School, Chanakyapuri</a> for my high schooling. I was the Vice-President and then HoD AI and IoT at my school's tech and entrepreneurship club - <a href="http://projectbeta.club/">ProjectBeta</a>. My tenure at the club entailed organizing three annual tech symposiums attended by well over 300 students from the most prestigious clubs of the Delhi Tech Circuit and leading the school team to victory at various national and international events in the NCR. I also served as the Director of Technical Operations at Sanskriti Model UN for two consecutive years.</p>

    <p>Welcome to <s>my website</s> the bent side of things (btw irrespective of the <span class="swag">kringe,</span> people <strong>LIKE</strong> to call me <span class="mono">KrishSkywalker</span> &macr;\(ツ)/&macr;. Yes)</p>
    
    <p>Feel free to <a href="http://krishgoel.com/contact">/contact me</a> if you wish to talk about/collaborate on anything.</p>

</section>