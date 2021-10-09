<script context="module">
    export async function preload() {
        let socialservices = await this.fetch(`experience/socialservice.json`);
        socialservices = await socialservices.json()

        // let socialservice = await this.fetch('/data/socialservice.json')
        // socialservice = await socialservice.json()

        let dubs = await this.fetch('experience/dubs.json')
        dubs = await dubs.json()

        let leadership = await this.fetch('experience/leadership.json')
        leadership = await leadership.json()

        return {
            socialservices: socialservices,
            dubs: dubs,
            leadership: leadership
        }
    }
</script>

<script>
    import { range } from '../../scripts/range'
    
    import Space from '../../components/space.svelte'

    export let socialservices
    export let dubs
    export let leadership

    let title= "Experience | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile and maker from New Delhi and this is my XP.";
    let url = "https://krishgoel.com/experience";
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

    <div class="large-view">
        <div class="row">
            {#each range(0,3,1) as i, index}
                <div class="col-3">
                    {#each socialservices as service, p}
                        {#if p%3 == i}
                            <div class="card">
                                <div class="width-restriction">
                                    <h3>{service.title}</h3>
                                    <p class="mono" style="margin-bottom: 10px; font-size: 14px">{service.date}</p>
                                    {#if service.description != undefined}
                                        <p>{service.description}</p>
                                    {/if}
                                    
                                    <div class="links">
                                        {#if service.link1 != undefined}
                                            <p><a href="{service.url1}" aria-label="{service.link1}" style="margin-top: 10px;">{service.link1}</a></p>
                                        {/if}
                                        {#if service.link2 != undefined}
                                            <p><a href="{service.url2}" aria-label="{service.link2}">{service.link2}</a></p>
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="tablet-view">
        <div class="row">
            {#each range(0,2,1) as i, index}
                <div class="col-2">
                    {#each socialservices as service, p}
                        {#if p%2 == i}
                            <div class="card">
                                <div class="width-restriction">
                                    <h3>{service.title}</h3>
                                    <p class="mono" style="margin-bottom: 10px; font-size: 14px">{service.date}</p>
                                    {#if service.description != undefined}
                                        <p>{service.description}</p>
                                    {/if}
                                    
                                    <div class="links">
                                        {#if service.link1 != undefined}
                                            <p><a href="{service.url1}" aria-label="{service.link1}" style="margin-top: 10px;">{service.link1}</a></p>
                                        {/if}
                                        {#if service.link2 != undefined}
                                            <p><a href="{service.url2}" aria-label="{service.link2}">{service.link2}</a></p>
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="mobile-view">
        {#each socialservices as service, p}
            <div class="card">
                <div class="width-restriction">
                    <h3>{service.title}</h3>
                    <p class="mono" style="margin-bottom: 10px; font-size: 14px">{service.date}</p>
                    {#if service.description != undefined}
                        <p>{service.description}</p>
                    {/if}
                    
                    <div class="links">
                        {#if service.link1 != undefined}
                            <p><a href="{service.url1}" aria-label="{service.link1}" style="margin-top: 10px;">{service.link1}</a></p>
                        {/if}
                        {#if service.link2 != undefined}
                            <p><a href="{service.url2}" aria-label="{service.link2}">{service.link2}</a></p>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <Space height={"25px"}/>

    <h2>Victories and Participations</h2>
    <Space height={"25px"}/>

    <div class="large-view">
        <div class="row">
            {#each range(0,3,1) as i, index}
                <div class="col-3">
                    {#each dubs as dub, p}
                        {#if p%3 == i}
                            <div class="card">
                                <div class="width-restriction">
                                    <h3>{dub.title}</h3>
                                    <p class="mono" style="margin-bottom: 10px; font-size: 14px">{dub.date}</p>
                                    {#if dub.description != undefined}
                                        <p>{dub.description}</p>
                                    {/if}
                                    
                                    <div class="links">
                                        {#if dub.link1 != undefined}
                                            <p><a href="{dub.url1}" aria-label="{dub.link1}" style="margin-top: 10px;">{dub.link1}</a></p>
                                        {/if}
                                        {#if dub.link2 != undefined}
                                            <p><a href="{dub.url2}" aria-label="{dub.link2}">{dub.link2}</a></p>
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="tablet-view">
        <div class="row">
            {#each range(0,2,1) as i, index}
                <div class="col-2">
                    {#each dubs as dub, p}
                        {#if p%2 == i}
                            <div class="card">
                                <div class="width-restriction">
                                    <h3>{dub.title}</h3>
                                    <p class="mono" style="margin-bottom: 10px; font-size: 14px">{dub.date}</p>
                                    {#if dub.description != undefined}
                                        <p>{dub.description}</p>
                                    {/if}
                                    
                                    <div class="links">
                                        {#if dub.link1 != undefined}
                                            <p><a href="{dub.url1}" aria-label="{dub.link1}" style="margin-top: 10px;">{dub.link1}</a></p>
                                        {/if}
                                        {#if dub.link2 != undefined}
                                            <p><a href="{dub.url2}" aria-label="{dub.link2}">{dub.link2}</a></p>
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="mobile-view">
        {#each dubs as dub, p}
            <div class="card">
                <div class="width-restriction">
                    <h3>{dub.title}</h3>
                    <p class="mono" style="margin-bottom: 10px; font-size: 14px">{dub.date}</p>
                    {#if dub.description != undefined}
                        <p>{dub.description}</p>
                    {/if}
                    
                    <div class="links">
                        {#if dub.link1 != undefined}
                            <p><a href="{dub.url1}" aria-label="{dub.link1}" style="margin-top: 10px;">{dub.link1}</a></p>
                        {/if}
                        {#if dub.link2 != undefined}
                            <p><a href="{dub.url2}" aria-label="{dub.link2}">{dub.link2}</a></p>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>

    
    <Space height={"25px"}/>
    
    <h2>Leadership and Positions Held</h2>
    <Space height={"25px"}/>

    <div class="large-view">
        <div class="row">
            {#each range(0,3,1) as i, index}
                <div class="col-3">
                    {#each leadership as leadership, p}
                        {#if p%3 == i}
                            <div class="card">
                                <div class="width-restriction">
                                    <h3>{leadership.title}</h3>
                                    <p class="mono" style="margin-bottom: 10px; font-size: 14px">{leadership.date}</p>
                                    {#if leadership.description != undefined}
                                        <p>{leadership.description}</p>
                                    {/if}
                                    
                                    <div class="links">
                                        {#if leadership.link1 != undefined}
                                            <p><a href="{leadership.url1}" aria-label="{leadership.link1}" style="margin-top: 10px;">{leadership.link1}</a></p>
                                        {/if}
                                        {#if leadership.link2 != undefined}
                                            <p><a href="{leadership.url2}" aria-label="{leadership.link2}">{leadership.link2}</a></p>
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="tablet-view">
        <div class="row">
            {#each range(0,2,1) as i, index}
                <div class="col-2">
                    {#each leadership as leadership, p}
                        {#if p%2 == i}
                            <div class="card">
                                <div class="width-restriction">
                                    <h3>{leadership.title}</h3>
                                    <p class="mono" style="margin-bottom: 10px; font-size: 14px">{leadership.date}</p>
                                    {#if leadership.description != undefined}
                                        <p>{leadership.description}</p>
                                    {/if}
                                    
                                    <div class="links">
                                        {#if leadership.link1 != undefined}
                                            <p><a href="{leadership.url1}" aria-label="{leadership.link1}" style="margin-top: 10px;">{leadership.link1}</a></p>
                                        {/if}
                                        {#if leadership.link2 != undefined}
                                            <p><a href="{leadership.url2}" aria-label="{leadership.link2}">{leadership.link2}</a></p>
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </div>
    </div>
    <div class="mobile-view">
        {#each leadership as leadership, p}
            <div class="card">
                <div class="width-restriction">
                    <h3>{leadership.title}</h3>
                    <p class="mono" style="margin-bottom: 10px; font-size: 14px">{leadership.date}</p>
                    {#if leadership.description != undefined}
                        <p>{leadership.description}</p>
                    {/if}
                    
                    <div class="links">
                        {#if leadership.link1 != undefined}
                            <p><a href="{leadership.url1}" aria-label="{leadership.link1}" style="margin-top: 10px;">{leadership.link1}</a></p>
                        {/if}
                        {#if leadership.link2 != undefined}
                            <p><a href="{leadership.url2}" aria-label="{leadership.link2}">{leadership.link2}</a></p>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>

    
</section>