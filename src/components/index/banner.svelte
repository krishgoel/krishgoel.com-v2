<style>
    .banner {
        width: 100%;
        background-image: linear-gradient(90deg, var(--dark-background), #00000000 70%), url(/images/banner.jpeg);
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
        height: 60px;
    }
    @media screen and (min-width: 800px) {
        .banner-text-flipping {
            height: 40px;
        }
    }
    .banner-text-flipping h3 {
        line-height: 150%;
        margin-bottom: 0
    }

    .typewriter-intro {
        /* margin-bottom: 20px */
    }
</style>

<script>
    import Typewriter from 'svelte-typewriter/lib/Typewriter.svelte'
</script>

<section class="banner">
    <div class="width-restriction">

        <div class="row">
            <div class="col-2">
                <div class="typewriter-intro">
                    <h3 style="margin-bottom: 5px 0">Hi</h3>
                    <h1>I'm Krish</h1>
                    <!-- <Typewriter cascade>
                        <p class="mono">(short for Krishnamangalrathn-algorithm nunununununununu)</p>
                    </Typewriter> -->
                </div>

                <!-- Typewriter flipping text -->
                <div class="banner-text-flipping swag">
                    <Typewriter loop interval={30} delay={2500} scramble>
                        <p>and I am a web developer</p>
                        <p>and I am against the degenerates who price Flaming Hot Cheetos in India</p>
                        <p>and I am financial literacy enthusiast</p>
                    </Typewriter>
                </div>

                <p>I am a technophile and a full-time "flex machine" from New Delhi. I am currently completing my high schooling from <a href="http://sanskritischool.edu.in" target="_blank">Sanskriti School</a> and will be joining <a href="#" target="_blank">Some University</a> for pursuing every Indian dads&apos; dream for their son - <s>MBA</s>  Engineering Major (+ Elective) this fall.</p>
                <p>While web-development and programming is my m&eacute;tier, I&rsquo;m currently in the search for my Ikigai.</p>
                <p>I occasionally venture into introducing the beautiful intricacies of programming to the younger students during my summer breaks and looking at the bigger picture, I aspire to develop &quot;smarter energy sources&quot;.</p>
                <p>Welcome to <s>my website/secret base</s> Jaku! &nbsp;(btw irrespective of the <em>kringe,</em> people <strong>LIKE</strong> to call me <span class="mono">KrishSkywalker</span> &macr;\(ツ)/&macr;. <span class="swag">Yes</span> 😤)</p>

            </div>
        </div>

    </div>
</section>