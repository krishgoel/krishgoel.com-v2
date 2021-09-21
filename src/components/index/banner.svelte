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
</style>

<script>
    import Typewriter from 'svelte-typewriter/lib/Typewriter.svelte'

    import Space from "../space.svelte"
</script>

<section class="banner">
    <div class="width-restriction">

        <div class="row">
            <div class="col-2">
                <h3 style="margin-bottom: 5px 0">Hi</h3>
                <h1>I'm Krish</h1>

                <Space height={"12px"}/>

                <p>I am a technophile and a full-time "flex machine" from New Delhi. I am currently completing my high schooling from <a href="http://sanskritischool.edu.in" target="_blank">Sanskriti School</a> and will be joining <a href="#" target="_blank">Some University</a> for pursuing every Indian dads&apos; dream for their son - <s>MBA</s>  Engineering Major (+ Elective) this fall.</p>
                <p>While web-development and programming is my m&eacute;tier, I&rsquo;m currently in the search for my Ikigai.</p>
                <p>I occasionally venture into introducing the beautiful intricacies of programming to the younger students during my summer breaks and looking at the bigger picture, I aspire to develop &quot;smarter energy sources&quot;.</p>
                <p>Welcome to <s>my website/secret base</s> Jaku! &nbsp;(btw irrespective of the <em>kringe,</em> people <strong>LIKE</strong> to call me <span class="mono">KrishSkywalker</span> &macr;\(ツ)/&macr;. <span class="swag">Yes</span> 😤)</p>

                <Space height={"15px"}/>

                <Typewriter>
                    <p class="swag">and I am against the degenerates who price Flaming Hot Cheetos in India</p>
                </Typewriter>
            </div>
        </div>

    </div>
</section>