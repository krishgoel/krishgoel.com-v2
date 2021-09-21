<script context="module">
    export async function preload() {
        let socials = await this.fetch(`/data/socials.json`);
        socials = await socials.json()

        // Return values
        return {
            socials: socials
        }
    }
</script>

<script>
    import { range } from '../scripts/range'
    import fetch from 'cross-fetch'

    import Space from '../components/space.svelte'

    let title= "Krish Goel | krishgoel.com";
    let description = "Hi, I'm Krish, a technophile on a journey to find and fulfill my Ikigai from New Delhi.";
    let url = "https://krishgoel-v4.vercel.app";

    export let socials
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
    /* Socials */
    .socials, .socials p {
        display: inline-block
    }
    .socials p {
        margin-right: 10px;
        margin-bottom: 10px
    }
    /* Form */
    form input, form textarea {
        width: calc(100% - 20px);
        color: var(--light-text);
        background-color: rgba(147, 147, 147, 0.404);
        border: 2px solid var(--light-background);
        margin-top: 5px;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 10px;
        font-family: "Akkurat";
    }
    form input:active, form input:focus, form textarea:active, form textarea:focus {
        outline: none;
        background-color: var(--light-background);
        color: var(--dark-text)
    }
    form button {
        padding: 10px 25px;
        border: 2px solid var(--light-background);
        font-weight: bold;
        border-radius: 10px;
        margin-bottom: 20px;
        background-color: rgba(147, 147, 147, 0.404);
        color: var(--light-text);
        box-shadow: var(--light-card-shadow);
        transition: 0.2s
    }
    form button:hover {
        background-color: var(--light-background);
        color: var(--dark-text)
    }
</style>

<section class="contact slim-container">
    <h1>Contact me</h1>
    <Space height={"25px"}/>

    <p>I can be found on most social media platforms by <span class="mono">@krishskywalker7</span></p>
    <div class="socials">
        {#each socials as social, i}
            <p><a aria-label="Link to my {social.fields.platform}" href="{social.fields.url}" target="_blank">{social.fields.platform}</a></p>
        {/each}
    </div>

    <Space height={"25px"}/>

    <form action="https://formspree.io/f/xzbyokzy" method="POST">
        <h3>Name</h3>
        <input type="text" placeholder="Enter you name" name="name" required/>
        <Space height={"15px"}/>
        <h3>Email</h3>
        <input type="email" placeholder="Enter your email" name="_replyto" required/>
        <Space height={"15px"}/>
        <h3>Message</h3>
        <textarea name="message" placeholder="Enter you message" style="height: 200px" required/>
        <Space height={"10px"}/>
        <button type="submit">Send</button>
    </form>
</section>