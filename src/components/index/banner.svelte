<style>
    .banner {
        width: 100%;
        background-image: linear-gradient(90deg, var(--dark-background), #00000000 70%), url(/images/uploads/banner.jpg);
        /* background-image: linear-gradient(90deg, var(--dark-background), #00000000 70%); */
        background-position: 50% 20%;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: var(--dark-background);
        min-height: calc(100vh - 40px);
        padding: 20px 0;
        display: flex;
        align-items: center;
    }
    .banner p {
        line-height: 155%;
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

                <p>I am a technophile and a full-time "flex machine" from New Delhi. I recently completed my high school from <a href="http://sanskritischool.edu.in" target="_blank" aria-label="Sanskriti School">Sanskriti School, New Delhi</a> and will be joining <a href="https://manipal.edu/mit.html" target="_blank" aria-label="MIT, Manipal">Manipal Institute of Technology</a> for pursuing every Indian dads&apos; dream for their son - <s>MBA</s>  BTech (in Mechatronics) this fall.</p>
                <p>Currently, my interest lies at the intersection of CS, cyber-physical systems, and behavioral psychology alongside startups and finances. During my summer breaks, I occasionally venture into introducing the beautiful intricacies of programming to younger students. Looking at the bigger picture, I aim to eliminate the redundancy of human-computer interactions and develop &quot;smarter&quot; energy sources.</p>

                <Typewriter>
                    <p class="swag">and I am against the degenerates who price Flaming Hot Cheetos in India :)</p>
                </Typewriter>
            </div>
        </div>

    </div>
</section>