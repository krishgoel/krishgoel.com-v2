<script>
    export let height
</script>

<style>
    div {
        width: 100%;
        padding: 10px 0;
    }
</style>

{#if height != undefined}
    <div style="padding: 0; padding-top: {height}"></div>
{:else}
    <div></div>
{/if}