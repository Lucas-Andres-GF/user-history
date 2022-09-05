<script lang="ts">
  import CardBack from "./CardBack.svelte";
  import CardFront from "./CardFront.svelte";

  let side : 'front' | 'back' = 'front';

  const toggleSide = () => {
    side = side == 'back'? 'front': 'back';
  }
</script>

<div>
  {#if side=='front'}
    <CardFront />
  {:else}
    <CardBack />
  {/if}
  
  <button on:click={toggleSide}>Cambiar lado</button>  
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  button {
    width: fit-content;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
</style>