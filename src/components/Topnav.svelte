<script>
    import { stores } from '@sapper/app';
	const { page } = stores();
	$: console.log($page.path);
</script>

<style>
    .dark {
        padding: 20px 0; 
        z-index: 2;
        position: sticky;
        top: -1px;
        white-space: nowrap;
        overflow-x: auto;
        margin-bottom: 20px
    }
    nav .width-restriction {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    /* nav h2 {
        margin-right: 30px
    } */
    nav .links {
        white-space: nowrap;
        overflow-x: auto;
        /* Hiding scrollbar */
        -ms-overflow-style: none;
        scrollbar-width: none; 
    }
    nav .links::-webkit-scrollbar {
        /* Hiding scrollbar */
        display: none;
    }
    nav .links, nav p {
        display: inline-block
    }
</style>

<div class="dark">
    <nav>
        <div class="width-restriction">
            {#if $page.path != "/"}
            <h3 style="padding-right: 20px"><a aria-label="Home Page" href="/">Krish Goel</a></h3>
            {/if}
            <div class="links">
                {#if $page.path != "/"}
                <p><a aria-label="Home Page" href="/">Home</a></p>
                {/if}
                <!-- <p><a aria-label="YouTube" href="/youtube">YouTube</a></p> -->
                <p><a aria-label="Thoughts" href="/thoughts">Thoughts</a></p>
                <p><a aria-label="Projects" href="/projects">Projects</a></p>
                <p><a aria-label="Experience" href="/experience">Experience</a></p>
                <p><a aria-label="Repertoire" href="/repertoire">Repertoire</a></p>
            </div>
        </div>
    </nav>
</div>
