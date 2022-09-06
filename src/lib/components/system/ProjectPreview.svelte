<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let id: string;
  export let title: string;
  export let description: string;

  let isHovered = false;

  const dispatch = createEventDispatcher<{ remove: { id: string } }>();
</script>

<div
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
>
  {#if isHovered}
    <button on:click={() => dispatch('remove', { id })}>X</button>
  {/if}
  <a href="/system/{id}">
    <h1>{title}</h1>
    <p>{description}</p>
  </a>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    width: fit-content;
    margin: 0.5rem;
    padding: 1rem;
    background-color: hsl(0, 0%, 85%, 0.5);
  }
  button {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
    border: 1px solid black;
    background-color: hsl(0, 100%, 70%);
  }
</style>
