<script>
    import Typewriter from 'svelte-typewriter/lib/Typewriter.svelte'
</script>

<style>
    .banner {
        width: 100%;
        background-image: linear-gradient(90deg, var(--navy-background), #00000000 70%), linear-gradient(0deg, var(--navy-background) 5%, #00000000 20%), url(/images/banner.jpeg);
        background-position: 60% 20%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 90vh;
        /* width: 100vw; */
        display: flex;
        align-items: center;
    }

    .banner-text-flipping h2 {
        float: left;
        overflow-wrap: break-word;
    }
</style>

<section>

    <section class="banner">
        <div class="width-restriction">
            <h2>Hi, I'm</h2>

            <h1 style="font-size: calc(3rem + 2vw)">Krish</h1>

            <p class="mono">(short for Krishnamangalrathnamiyer Amanunununununununu)</p>
            <!-- <Typewriter cascade>
            </Typewriter> -->

            <br/>

            <div class="banner-text-flipping">
                <h2>and manz&nbsp;</h2>
                <Typewriter loop interval={30}>
                    <!-- <div></div> -->
                    <h2 class="glow-green">a fan of ya mum jokes</h2>
                    <h2 class="glow-pink">against the degenerates who price Flaming Hot Cheetos in India</h2>
                    <h2 class="glow-blue">a web developer</h2>
                    <h2 class="glow-yellow">a financial literacy enthusiast</h2>
                </Typewriter>
            </div>

            <br/><br/><br/>

        </div>
    </section>
    
    <section>
        <div class="width-restriction">
            <h3>Test</h3>
        </div>
    </section>

</section>