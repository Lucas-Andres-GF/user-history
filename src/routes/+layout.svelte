<script lang="ts">
  import '../app.css';
  import { supabase } from '$lib/supabaseClient';
  import { loadSystems } from '$stores/systemsStore';
  import { user } from '$stores/sessionStore';

  import Auth from '$cmps/Auth.svelte';
  import Navbar from '$cmps/Navbar.svelte';

  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    if (!session?.user) return user.set(null);

    user.set(session.user);
    loadSystems();
  });
</script>

{#if $user}
  <Navbar />

  <main>
    <slot />
  </main>

  <footer>
    <a href="https://github.com/Lucas-Andres-GF/user-history">Build for fun</a>
  </footer>
{:else}
  <main>
    <Auth />
  </main>
{/if}

<style>
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
