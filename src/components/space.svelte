<script>
    export let height
</script>

<style>
    div {
        width: 100%;
        margin: 10px 0;
    }
</style>

{#if height != undefined}
    <div style="margin: 0; margin-top: {height}"></div>
{:else}
    <div></div>
{/if}