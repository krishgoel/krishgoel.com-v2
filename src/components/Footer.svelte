<script>
    export let appearance
</script>

<style>
    footer {
        padding: 20px 0;
    }
    footer .width-restriction {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    footer .links, footer .links p{
        display: inline-block;
    }

    footer .links p {
        margin-left: 10px;
    }
    footer p {
        margin-bottom: 0
    }
</style>

<footer class="{appearance}">
    <div class="width-restriction">
        <p>&copy; Krish Goel<p>
        <div class="links">
            <p><a rel=prefetch href="/colophon">Colophon</a></p>
            <p><a rel=prefetch href="/thanks">Thanks</a></p>
        </div>
    </div>
</footer>