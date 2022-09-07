<script lang="ts">
  import StickyNote from '$components/StickyNote.svelte';
  import { mapSystems } from '$lib/api';
  import type { System } from '$lib/types';

  type SystemPreview = {
    id: string;
    title: string;
    description: string;
  };

  let systems = mapSystems<SystemPreview>((system: System) => {
    return {
      id: system.id,
      title: system.title,
      description: system.description,
    };
  });
</script>

<svelte:head>
  <title>Practica 2</title>
</svelte:head>

<article>
  <div>
    <h1>Sistemas Elicitados</h1>
    <div style:padding-block="2rem">
      <div class="systems-container">
        {#each systems as { id, title, description } (id)}
          <StickyNote link={'/system/' + id} {title} {description} />
        {:else}
          <h2 class="fallback">
            No se agrego ningun sistema,<br />
            comienze agregando uno
          </h2>
        {/each}
      </div>
      <button>Añadir Sistema</button>
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
  h2 {
    margin-top: 2rem;
    background-color: inherit;
  }
  .systems-container {
    position: relative;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
    justify-items: center;
    max-width: 80vw;
    margin-top: 1rem;
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
