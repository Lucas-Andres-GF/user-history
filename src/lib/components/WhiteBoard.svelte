<script lang="ts">
  import type { HSLColor } from '$lib/types';
import StikyNoteContainer from './StikyNoteContainer.svelte';

  export let link: string;
  export let title: string;
  export let notesColors: HSLColor[];
</script>

<div class="container">
  <svg
    viewBox="0 0 100 100"
    style="align-self:top; justify-self:left; rotate:0deg;"
  >
    <path d="M50 100 L0 100 L0 0 L100 0 L100 50 Z" />
  </svg>
  <svg
    viewBox="0 0 100 100"
    style="align-self:top; justify-self:right; rotate:90deg;"
  >
    <path d="M50 100 L0 100 L0 0 L100 0 L100 50 Z" />
  </svg>
  <svg
    viewBox="0 0 100 100"
    style="align-self:end; justify-self:right; rotate:180deg;"
  >
    <path d="M50 100 L0 100 L0 0 L100 0 L100 50 Z" />
  </svg>
  <svg
    viewBox="0 0 100 100"
    style="align-self:end; justify-self:left; rotate:270deg;"
  >
    <path d="M50 100 L0 100 L0 0 L100 0 L100 50 Z" />
  </svg>
  <div class="white-board">
    <h1>{title}</h1>
    <div class="note-container">
      {#each notesColors as color}
        <StikyNoteContainer hslColor={color} />
      {/each}
    </div>
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<!-- <div class="container">
  <div class="corner-2" style="align-self:top; justify-self:left;rotate:0deg;" />
  <div
    class="corner"
    style="align-self:top; justify-self:right;rotate:90deg;"
  />
  <div
    class="corner"
    style="align-self:end; justify-self:right;rotate:180deg;"
  />
  <div
    class="corner"
    style="align-self:end; justify-self:left;rotate:270deg;"
  />
  <div class="triangulo" />
  <div class="white-board" />
  <div class="content">
    <slot />
  </div>
</div> -->

<!-- <svg viewBox="0 0 100 100">
  <defs>
    <clipPath clipPathUnits="objectBoundigBox" id="cornerMask">
      <path d="M50 100 L0 100 L0 0 L100 0 L100 50 Z" fill="red" stroke="black"/>
    </clipPath>
  </defs>
</svg> -->
<style>
  .container {
    width: 100%;
    display: grid;
  }
  .container > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
  .container svg {
    width: 20px;
    fill: hsl(0, 0%, 10%);
    stroke: hsl(0, 0%, 25%);
    stroke-width: 5;
    filter: drop-shadow(0 0 1px hsl(0, 0%, 40%));
  }
  .white-board {
    z-index: -1;
    background-color: whitesmoke;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 10px solid lightslategray;
    box-shadow: inset -1px 2px 2px lightgray, 6px 9px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  h1 {
    margin-top: 1rem;
    text-align: center;
  }
  .corner {
    position: relative;
    width: 32px;
    height: 32px;
    background-color: black;
    overflow: hidden;
    /* border: 2px solid hsl(0, 0%, 25%); */
    box-shadow: inset 0px 0px 4px hsl(0, 0%, 35%);
  }
  .corner::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    /* border:2px solid hsl(0, 0%, 25%); */
    box-shadow: inset 0px 0px 2px hsl(0, 0%, 35%);
    background-color: whitesmoke;
    rotate: 45deg;
    left: 50%;
    top: 50%;
  }
  .content {
    display: flex;
    margin: 10px;
    background-color: none;
  }
  .corner-2 {
    position: relative;
    width: 20px;
    height: 20px;
    background-color: black;
    clip-path: url(#cornerMask);
    stroke: green;
    overflow: hidden;
    /* border: 2px solid hsl(0, 0%, 25%); */
    /* box-shadow: inset 0px 0px 4px hsl(0, 0%, 35%); */
  }
  .note-container {
    position: relative;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    justify-items: center;
    max-width: 80vw;
    margin-top: 1rem;
  }
</style>
