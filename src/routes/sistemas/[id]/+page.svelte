<script lang="ts">
  import { pageMetada } from '$lib/stores/pageData';
  import type { System } from '$lib/types';

  import StickyNoteContainer from '$cmps/stickynote/StickyNoteContainer.svelte';
  import WhiteBoardContainer from '$cmps/whiteboard/WhiteBoardContainer.svelte';

  export let data: System;

  $pageMetada.title = 'Historias de Usuarios';

  const newHistorie = () => {
    alert('Not implemented');
  };
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<article>
  <WhiteBoardContainer>
    <div class="summary">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
    <section>
      {#each data.histories as { id, title, color, slug } (slug)}
        <StickyNoteContainer link={`/sistemas/${data.id}/${slug}`} {color}>
          <div class="historie">
            <h2>{id}</h2>
            <p>{title.length < 64 ? title : title.slice(0, 61) + '...'}</p>
          </div>
        </StickyNoteContainer>
      {/each}

      <div class="new-historie">
        {#if data.histories.length === 0}
          <h2>No se agrego ninguna historia, comienze agregando una</h2>
        {/if}
        <button on:click={newHistorie}>
          <img src="/add-icon.svg" alt="Simbolo de agregar" />
        </button>
      </div>
    </section>
  </WhiteBoardContainer>
</article>

<style>
  article {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 0.5rem;
  }
  article > :global(*) {
    min-height: 70vh;
  }
  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(191px, 1fr));
    grid-auto-rows: minmax(207px, 1fr);
    justify-items: center;
    width: 90%;
    gap: 1rem;
    margin-top: 1rem;
    margin-inline: auto;
    margin-bottom: 1rem;
  }
  section > :global(*:hover:not(.new-historie)) {
    scale: 1.2;
    z-index: 1;
    transition: all 0.6s ease;
  }
  .historie {
    padding-top: 1.5rem;
  }

  .new-historie {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    border-radius: 2.5%;
    transition: border 2s ease;
    border: 1px solid transparent;
  }
  .new-historie:hover {
    border: 1px solid hsl(0, 0%, 75%);
  }
  .new-historie h2 {
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
