<script lang="ts">
  import { goto } from '$app/navigation';
  import { pageMetada } from '$lib/stores/pageData';
  import type { CompactSystem } from '$lib/types';

  import StickyNoteContainer from '$cmps/stickynote/StickyNoteContainer.svelte';
  import WhiteBoardContainer from '$cmps/whiteboard/WhiteBoardContainer.svelte';

  export let data: { systems: CompactSystem[] };

  $pageMetada.title = 'Sistemas Elicitados';

  const newSystem = () => {
    alert('Not implemented');
  };
</script>

<svelte:head>
  <title>Practica 2</title>
</svelte:head>

<article>
  <section>
    {#each data.systems as { id, title, histories } (id)}
      <WhiteBoardContainer onClick={() => goto(`/sistemas/${id}`)}>
        <div class="system">
          <h2>{title}</h2>
          <div class="system-histories">
            {#each histories as { color, slug }}
              <StickyNoteContainer {color} link={`/sistemas/${id}/${slug}`} />
            {/each}
          </div>
          {#if histories.length === 0}
            <p>Ninguna historia a sido agregada</p>
          {/if}
        </div>
      </WhiteBoardContainer>
    {/each}

    <div class="new-system">
      {#if data.systems.length === 0}
        <h2>No se agrego ningun sistema, comienze agregando uno</h2>
      {/if}
      <button on:click={newSystem}>
        <img src="/add-icon.svg" alt="Simbolo de agregar" />
      </button>
    </div>
  </section>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    overflow-y: visible;
  }
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-auto-rows: minmax(255px, 1fr);
    justify-items: center;
    width: 100%;
    gap: 2rem;
    margin-top: 1rem;
    padding: 1rem;
    overflow-y: auto;
  }
  .system {
    height: 100%;
  }
  .system-histories {
    display: grid;
    grid-template-columns: repeat(auto-fit, 3.5rem);
    grid-auto-rows: 3.5rem;
    place-items: center;
    width: 100%;
    margin-top: 0.5rem;
  }
  .system-histories > :global(*:hover) {
    scale: 1.2;
    z-index: 1;
    transition: all 0.6s ease;
  }
  .system p {
    margin-left: 1rem;
    margin-top: 0.5rem;
    font-size: 1.1rem;
  }

  .new-system {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    border-radius: 2.5%;
    transition: border 2s ease;
    border: 1px solid transparent;
  }
  .new-system:hover {
    border: 1px solid hsl(0, 0%, 75%);
  }
  .new-system h2 {
    max-width: 24ch;
    font-size: 1.25rem;
    text-align: center;
  }
  button {
    width: 4rem;
    border: none;
  }
  button:hover {
    scale: 1.1;
    z-index: 1;
    transition: all 1s ease;
  }
  button img {
    width: 100%;
  }
</style>
