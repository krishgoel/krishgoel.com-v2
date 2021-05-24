<script>
    import { stores } from '@sapper/app';
	const { page } = stores();
	$: console.log($page.path);
</script>

<style>
    .dark {
        /* background-color: #818181; */
        box-shadow: var(--dark-card-shadow);
        padding: 20px 0; 
        z-index: 2;
        position: sticky;
        top: -1px;
        /* white-space: nowrap;
        overflow-x: auto; */
        margin-bottom: 20px
    }
    nav .width-restriction {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav h2 {
        margin-right: 30px
    }
    nav .links {
        white-space: nowrap;
        overflow-x: auto;
    }
    nav .links, nav p {
        display: inline-block
    }
</style>

<div class="dark">
    <nav>
        <div class="width-restriction">
            {#if $page.path != "/"}
            <h3><a href="">Krish Goel</a></h3>
            {/if}
            <div class="links">
                {#if $page.path != "/"}
                <p><a href="">Home</a></p>
                {/if}
                <p><a href="/youtube">YouTube</a></p>
                <p><a href="/projects">Projects</a></p>
                <p><a href="/experience">Experience</a></p>
                <p><a href="/repertoire">Repertoire</a></p>
                <p><a href="/thoughts">Thoughts</a></p>
            </div>
        </div>
    </nav>
</div>
