<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Historie, HSLColor } from '$lib/types';
  import { pageMetada } from '$lib/stores/pageData';
  import StickyNoteContainer from '$cmps/stickynote/StickyNoteContainer.svelte';
  import Card from '$cmps/card/Card.svelte';

  // export let data:Historie;

  const data = {
    slug: 'test_1',
    id: 'Test 1',
    title: 'Test context for the test',
    color: 'hsl(133 85% 78%)' as HSLColor,
    rules: [
      'Test situation for test the test - 1',
      'Test situation for test the test - 2',
      'Test situation for test the test - 3',
    ],
    scenaries: [
      {
        title: 'Test 1',
        context: 'Test context for the test',
        situation: 'Test situation for test the test',
        response: 'Test response for the test',
      },
    ],
  };
  $pageMetada.title = `Historia: ${data.id}`;
  const newSystem = () => {
    alert('Not implemented');
  };
</script>

<svelte:head>
  <title>{data.id}</title>
</svelte:head>

<article>
  <StickyNoteContainer color={data.color} rotate={false}>
    <Card />
  </StickyNoteContainer>
  <section />
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
</style>
