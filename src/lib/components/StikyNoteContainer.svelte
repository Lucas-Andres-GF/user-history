<script lang="ts">
  import type { HSLColor } from '$lib/types';

  export let link: string | null = null;
  export let hslColor: HSLColor;
</script>

<div>
  {#if link}
    <a
      href={link}
      class="note-wrap"
      style:rotate={`${Math.random() * 10 - 5}deg`}
      style:background-color={hslColor}
    >
      <slot />
    </a>
  {:else}
    <div class="note-wrap"
    style:rotate={`${Math.random() * 10 - 5}deg`}
    style:background-color={hslColor}
    >
      <slot />
    </div>
  {/if}
</div>

<style>
  div {
    width: 50px;
    height: 50px;
  }
  .note-wrap {
    width: 100%;
    padding: 50%;
    margin: 0;
    position: relative;
    vertical-align: top;
    display: inline-block;
    font-family: Englebert, Arial;
    color: #4b453c;
    background: hsl(51, 85%, 78%);
    line-height: 34px;
    text-align: center;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  .note-wrap:before {
    display: block;
    content: '';
    background: rgba(227, 200, 114, 0.4);
    width: 54%;
    height: 12%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 6px/18px 0;
    position: absolute;
    top: -10%;
    left: 20%;
    -webkit-transform: rotate(-2deg);
    -moz-transform: rotate(-2deg);
    -o-transform: rotate(-2deg);
    -ms-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  .note-wrap:hover {
    scale: 1.2;
    z-index: 1;
    transition: all 0.6s ease;
  }
</style>
