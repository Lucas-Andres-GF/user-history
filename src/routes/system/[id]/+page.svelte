<script lang="ts">
  import { page } from '$app/stores';
  import StickyNote from '$components/StickyNote.svelte';

  import type { System } from '$lib/types';

  export let data: System;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<article>
  <div>
    <h1>Historias de usuario: {data.title}</h1>
    <p>{data.description}</p>
    <div style:padding-block="2rem">
      <div class="projects-container">
        {#each data.histories as history (history.id)}
          <StickyNote
            link={`/system/${$page.params.id}/${history.slug}`}
            title={history.id}
            description={history.title}
          />
        {:else}
          <h2 class="fallback">
            No se agrego ningun sistema,<br />
            comienze agregando uno
          </h2>
        {/each}
      </div>
      <button>Añadir Historia</button>
    </div>
  </div>
</article>

<style>
  article {
    display: flex;
    justify-content: space-around;
    padding-block: 5vh;
  }
  article > div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    margin-top: 2rem;
    max-width: 32ch;
    text-align: center;
  }
  article > div > p {
    padding-top: 0.5rem;
  }
  h2 {
    background-color: inherit;
  }
  .projects-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    max-width: 80vw;
  }
  h2.fallback {
    display: flex;
    padding: 1rem;
    text-align: center;
  }
  button {
    display: flex;
    margin-inline: auto;
    margin-top: 2rem;
    font-size: 1.5rem;
    padding: 0.75rem;
  }
</style>
