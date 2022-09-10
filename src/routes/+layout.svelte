<script lang="ts">
  import { page } from '$app/stores';
  import { pageMetada } from '$lib/stores/pageData';

  import '../app.css';
</script>

{#if $page.url.pathname !== '/'}
  <header>
    <h1>{$pageMetada.title}</h1>
  </header>
{/if}

<main>
  <slot />
</main>

<footer>
  <a href="https://github.com/Lucas-Andres-GF/user-history">Build for fun</a>
</footer>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  header::before {
    content: '';
    position: fixed;
    align-self: center;
    justify-self: center;
    top: 0;
    left: -10vw;
    width: 110vw;
    height: var(--header-height);
    background-color: hsla(0, 0%, 95%, 0.75);
    backdrop-filter: blur(var(--layout-blur));
    box-shadow: inset 5px 0 10px 1px hsl(0, 0%, 80%);
  }
  header h1 {
    margin-top: 1.5rem;
    font-size: 2rem;
    z-index: 1;
  }

  main {
    padding-top: var(--header-height);
    margin-inline: auto;
    width: 100%;
    max-width: 95%;
    overflow-y: scroll;
    grid-column: 1/ -1;
    grid-row: 1 / -1;
    padding-bottom: 2rem;
  }
  main::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 688px) {
    main {
      max-width: 90%;
    }
  }
  @media screen and (min-width: 992px) {
    main {
      max-width: 80%;
    }
  }
  @media screen and (min-width: 1312px) {
    main {
      max-width: 70%;
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: inset 5px 0 10px 1px hsl(0, 0%, 80%);
    background-color: hsla(0, 0%, 95%, 0.4);
    backdrop-filter: blur(2px);
  }
  a {
    width: fit-content;
    font-size: 0.75rem;
    margin: 0.25rem;
    font-style: italic;
  }
</style>
