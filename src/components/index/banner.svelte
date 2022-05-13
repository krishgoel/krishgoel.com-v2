<style>
    .banner {
        width: 100%;
        /* background-image: linear-gradient(90deg, var(--dark-background), #00000000 70%), url(/images/uploads/banner.png); */
        /* background-image: linear-gradient(90deg, var(--dark-background) 20%, #00000000); */
        background-image: url(/images/uploads/banner.png);
        background-position: 28% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: var(--dark-background);
        min-height: calc(100vh - 40px);
        padding: 20px 0;
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 800px) {
        .banner {
            background-image: linear-gradient(90deg, var(--dark-background) 10%, #00000000 90%), url(/images/uploads/banner.webp);
        }
    }
    .banner p {
        line-height: 155%;
    }
</style>

<script>
    import Space from "../space.svelte"
</script>

<section class="banner">
    <div class="width-restriction">

        <div class="row">
            <div class="col-2"></div>
            <div class="col-2">
                <h3 style="margin-bottom: 5px 0">Hi</h3>
                <h1>I'm Krish</h1>

                <Space height={"12px"}/>
                
                <p>
                    I am a philosophy and business double-major at heart, currently pursuing every Indian dad's dream for their son - <s>MBA</s> BTech at <a href="https://manipal.edu/mit.html" target="_blank" aria-label="MIT, Manipal">Manipal Institute of Technology</a>.
                </p>
                <p>
                    Presently, my curiosity lies at the intersection of CS, behavioral psychology and financial markets. During my summer breaks, I occasionally venture into introducing the beautiful intricacies of programming to younger students.
                </p>
                <p>
                    My vision for the near future holds making it through this semester and exploring more of <a href="https://www.principles.com" target="_blank" aria-label="Principles by Ray Dalio">Ray Dalio's content</a>. Looking at the bigger picture, I aim to recast the education sector.
                </p>
                <p>
                    Welcome to <s>my website</s> the bent side of things (btw irrespective of the <span class="swag">kringe,</span> people <strong>LIKE</strong> to call me <span class="mono">KrishSkywalker</span> &macr;\(ツ)/&macr;. Yes.)
                </p>
                <!-- <p class="swag"><span style="font-style: italic;">"Punishable by fine" essentially translates to "legal for the right price".</span></p> -->
            </div>
        </div>

    </div>
</section>