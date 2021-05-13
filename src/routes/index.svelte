<script>
    let title= "Krish Goel | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigau from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";

    import Typewriter from 'svelte-typewriter/lib/Typewriter.svelte'
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
    .banner {
        width: 100%;
        background-image: linear-gradient(90deg, var(--navy-background), #00000000 70%), linear-gradient(0deg, var(--navy-background) 7%, #00000000 20%), url(/images/banner.jpeg);
        background-position: 60% 20%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 90vh;
        /* width: 100vw; */
        display: flex;
        align-items: center;
    }

    /* .banner-text-flipping h2 {
        float: left;
    } */
</style>

<section>
    <section class="banner">
        <div class="width-restriction">
            <!-- <div class="banner-text-flipping">
                <h2>and manz&nbsp;</h2>
                <Typewriter loop interval={30}>
                    <h2 class="glow-green">a fan of ya mum jokes</h2>
                    <h2 class="glow-pink">against the degenerates who price Flaming Hot Cheetos in India</h2>
                    <h2 class="glow-blue">a web developer</h2>
                    <h2 class="glow-yellow">a financial literacy enthusiast</h2>
                </Typewriter>
            </div> -->

            <br/><br/><br/><br/>

        </div>
    </section>
</section>