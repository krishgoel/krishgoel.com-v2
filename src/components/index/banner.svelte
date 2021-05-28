<style>
    .banner {
        width: 100%;
        background-image: linear-gradient(90deg, var(--dark-background), #00000000 70%), url(/images/banner.gif);
        background-position: 50% 20%;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: var(--dark-background);
        height: 100vh;
        display: flex;
        align-items: center;
    }

    .banner-text-flipping {
        width: 100%;
        display: block;
        height: 100px
    }
    .banner-text-flipping h3 {
        line-height: 150%;
        margin-bottom: 0
    }
</style>

<script>
    import Typewriter from 'svelte-typewriter/lib/Typewriter.svelte'
</script>

<section class="banner">
    <div class="width-restriction">

        <div class="row">
            <div class="col-2">
                <Typewriter cascade>
                    <h3 style="margin: 5px 0">Hi</h3>
                    <h1>I'm Krish</h1>
                    <p class="mono">(short for Krishnamangalrathn-algorithm nunununununununu)</p>
                </Typewriter>
                <br/>
                <!-- Typewriter flipping text -->
                <div class="banner-text-flipping">
                    <Typewriter loop interval={30} delay={2500} scramble>
                        <h3>and manz against the degenerates who price Flaming Hot Cheetos in India</h3>
                        <h3>and manz a web developer</h3>
                        <h3>and manz a fan of ya mum jokes</h3>
                        <h3>and manz a financial literacy enthusiast</h3>
                    </Typewriter>
                </div>
            </div>
        </div>

    </div>
</section>