<script>
    import { stores } from '@sapper/app';
	const { page } = stores();
	$: console.log($page.path);

    export let appearance
</script>

<style>
    nav {
        padding: 20px 0; 
        z-index: 2;
        position: sticky;
        top: -1px;
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        box-shadow: var(--dark-card-shadow);
    }
    nav .width-restriction {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav .links {
        white-space: nowrap;
        overflow-x: auto;
        /* Hiding scrollbar */
        -ms-overflow-style: none;
        scrollbar-width: none; 
    }
    
    nav .links::-webkit-scrollbar {
        display: none;
    }
    nav .links, nav p {
        display: inline-block
    }
    nav .links p {
        margin-right: 10px;
        margin-bottom: 0
    }
</style>

<nav class="{appearance}">
    <div class="width-restriction">
        {#if $page.path != "/"}
            <h3 style="padding-right: 20px; color: #353535; margin-bottom: 0"><a rel=prefetch aria-label="Home Page" href="/" style="color: #353535">Krish Goel</a></h3>
        {/if}
        <div class="links">
            {#if $page.path != "/"}
            <p><a rel=prefetch aria-label="Home Page" href="/">Home</a></p>
            {/if}
            <!-- <p><a rel=prefetch aria-label="YouTube" href="/youtube">YouTube</a></p> -->
            <p><a rel=prefetch aria-label="Garden" href="/garden">Garden</a></p>
            <p><a rel=prefetch aria-label="Projects" href="/projects">Projects</a></p>
            <p><a rel=prefetch aria-label="Experience" href="/experience">Experience</a></p>
            <p><a rel=prefetch aria-label="Repertoire" href="/repertoire">Repertoire</a></p>
            <p><a rel=prefetch aria-label="Contact" href="/contact">Contact</a></p>
        </div>
    </div>
</nav>