<script>
    let title= "Krish Goel | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigai from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";

	import Nav from '../components/Topnav.svelte';

    import Intro from '../components/index/intro.svelte'
    import Banner from '../components/index/banner.svelte'
    import YouTube from '../components/index/youtube.svelte'
    import Projects from '../components/index/projects.svelte'
    import Blog from '../components/index/blog.svelte'
    import Reachme from '../components/index/reachme.svelte'
    // import Footer from '../components/Footer.svelte'

</script>

<style>
    
</style>

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

    <Banner/>

    <Nav/>

    <div class="dark">
        <Intro/>
    </div>
    <div class="light">
        <YouTube/>
    </div>
    <div class="dark">
        <Projects/>
    </div>
    <div class="light">
        <Blog/>
    </div>
    <div class="dark">
        <Reachme/>
    </div>
    
</section>