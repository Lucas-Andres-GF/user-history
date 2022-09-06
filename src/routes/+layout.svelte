<script lang="ts">
  import '../app.css';
</script>

<header>
  <nav />
</header>

<main>
  <slot />
</main>

<footer>
  <a href="https://github.com/Lucas-Andres-GF/user-history">Build for fun</a>
</footer>

<style>
  header {
    display: flex;
    margin-inline: 1rem;
  }
  main {
    margin-inline: auto;
    max-width: 95vw;
    height: 100%;
  }
  @media screen and (min-width: 688px) {
    main {
      max-width: 90vw;
    }
  }
  @media screen and (min-width: 992px) {
    main {
      max-width: 80vw;
    }
  }
  @media screen and (min-width: 1312px) {
    main {
      max-width: 70vw;
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  a {
    width: fit-content;
    font-size: 0.75rem;
    margin: 0.25rem;
    font-style: italic;
  }
</style>
