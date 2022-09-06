<script lang="ts">
  import { page } from '$app/stores';

  import type { System } from '$lib/types';

  export let data: System;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<div>
  <h1>{data.title}</h1>
  <p>{data.description}</p>
  <div>
    <div class="projects-container">
      {#each data.histories as history (history.id)}
        <!-- on:remove={removeSystem}  -->
        <div>
          <a href="/system/{$page.params.id}/{history.slug}">
            <h2>{history.id}</h2>
            <h3>{history.title}</h3>
          </a>
        </div>
      {:else}
        <h2 class="fallback">
          No se agrego ningun sistema,<br />
          comienze agregando uno
        </h2>
      {/each}
    </div>
    <button>Crear</button>
  </div>
</div>

<style>
  h2 {
    background-color: inherit;
  }
  .projects-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    max-width: 80vw;
    background-color: blanchedalmond;
  }
  h2.fallback {
    display: flex;
    padding: 1rem;
    text-align: center;
  }
  button {
    display: flex;
    margin-inline: auto;
  }
</style>
