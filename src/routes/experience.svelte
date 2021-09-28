<script context="module">
    export async function preload() {
        let socialservice = await this.fetch('/data/socialservice.json')
        socialservice = await socialservice.json()

        let dubs = await this.fetch('/data/dubs.json')
        dubs = await dubs.json()

        let leadership = await this.fetch('/data/leadership.json')
        leadership = await leadership.json()

        let courses = await this.fetch('/data/courses.json')
        courses = await courses.json()

        return {
            socialservice: socialservice,
            dubs: dubs,
            leadership: leadership,
            courses: courses
        }
    }
</script>

<script>
    import { range } from '../scripts/range'
    
    import Space from '../components/space.svelte'

    export let socialservice
    export let dubs
    export let leadership
    export let courses

    let title= "Experience | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my XP.";
    let url = "https://krishgoel-v4.vercel.app/experience";
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

<section>
	<div class="row">
        <div class="col-2">
            <h1>Experience Portfolio</h1>
            <p>This page is a log of all the events and activities that I believe have helped me gain insights into various domains that would otherwise be unreachable, ranging from rural sensitization trips focused around STEM education to introducing 280+ teachers at my school to AI and its applications.</p>
        </div>
    </div>
    <Space height={"15px"}/>
	
    <h2>Social Service</h2>
    <Space height={"25px"}/>
    <div class="row">
        {#each range(0,3,1) as i, index}
            <div class="col-3">
                {#each socialservice as service, p}
                    {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h3>{service.fields.title}</h3>
                                <p class="mono" style="margin-bottom: 10px; font-size: 14px">{service.fields.date}</p>
                                {#if service.fields.description != undefined}
                                    <p>{service.fields.description}</p>
                                {/if}
                                <!-- Links -->
                                <div class="links">
                                    {#if service.fields.link1 != undefined}
                                        <p><a href="{service.fields.url1}" aria-label="{service.fields.link1}" style="margin-top: 10px;">{service.fields.link1}</a></p>
                                    {/if}
                                    {#if service.fields.link2 != undefined}
                                        <p><a href="{service.fields.url2}" aria-label="{service.fields.link2}">{service.fields.link2}</a></p>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
	</div>

    <Space height={"25px"}/>

    <h2>Victories and Participations</h2>
    <Space height={"25px"}/>
    <div class="row">
        {#each range(0,3,1) as i, index}
            <div class="col-3">
                {#each dubs as dub, p}
                    {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h3>{dub.fields.title}</h3>
                                <p class="mono" style="margin-bottom: 10px; font-size: 14px">{dub.fields.date}</p>
                                {#if dub.fields.description != undefined}
                                    <p>{dub.fields.description}</p>
                                {/if}
                                <!-- Links -->
                                <div class="links">
                                    {#if dub.fields.link1 != undefined}
                                        <p><a href="{dub.fields.url1}" aria-label="{dub.fields.link1}" style="margin-top: 10px;">{dub.fields.link1}</a></p>
                                    {/if}
                                    {#if dub.fields.link2 != undefined}
                                        <p><a href="{dub.fields.url2}" aria-label="{dub.fields.link2}">{dub.fields.link2}</a></p>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
	</div>
    
    <Space height={"25px"}/>
    
    <h2>Leadership and Positions Held</h2>
    <Space height={"25px"}/>
    <div class="row">
        {#each range(0,3,1) as i, index}
            <div class="col-3">
                {#each leadership as leadership, p}
                    {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h3>{leadership.fields.title}</h3>
                                <p class="mono" style="margin-bottom: 10px; font-size: 14px">{leadership.fields.date}</p>
                                {#if leadership.fields.description != undefined}
                                    <p>{leadership.fields.description}</p>
                                {/if}
                                <!-- Links -->
                                <div class="links">
                                    {#if leadership.fields.link1 != undefined}
                                        <p><a href="{leadership.fields.url1}" aria-label="{leadership.fields.link1}" style="margin-top: 10px;">{leadership.fields.link1}</a></p>
                                    {/if}
                                    {#if leadership.fields.link2 != undefined}
                                        <p><a href="{leadership.fields.url2}" aria-label="{leadership.fields.link2}">{leadership.fields.link2}</a></p>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
	</div>

    <!-- <Space height={"25px"}/>
    
    <h2>Courses Portfolio</h2>
    <Space height={"25px"}/>
    <div class="row">
        {#each range(0,3,1) as i, index}
            <div class="col-3">
                {#each courses as course, p}
                    {#if p%3 == i}
                        <div class="card">
                            <div class="width-restriction">
                                <h3>{course.fields.title}</h3>
                                <p class="mono" style="margin-bottom: 10px; font-size: 14px">{course.fields.date}</p>
                                {#if course.fields.description != undefined}
                                    <p>{course.fields.description}</p>
                                {/if}
                                <div class="links">
                                    {#if course.fields.link1 != undefined}
                                        <p><a href="{course.fields.url1}" aria-label="{course.fields.link1}" style="margin-top: 10px;">{course.fields.link1}</a></p>
                                    {/if}
                                    {#if course.fields.link2 != undefined}
                                        <p><a href="{course.fields.url2}" aria-label="{course.fields.link2}">{course.fields.link2}</a></p>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
	</div> -->
</section>