<script lang="ts">
  let scenaries = [
    {
      title: 'Test 1',
      context: 'Test context for the test',
      situation: 'Test situation for test the test',
      response: 'Test response for the test',
    },
  ];
</script>

<div class="container">
  <div class="card">
    <h1>Criterios de Negocio</h1>
    {#each scenaries as scenarie, i}
      <form action="">
        <div class="field">
          <label for="title">Escenario {i + 1}:</label>
          <input type="text" name="title" id="" bind:value={scenarie.title} />
        </div>
        <div class="field">
          <label for="context">Dado</label>
          <input
            type="text"
            name="context"
            id=""
            bind:value={scenarie.context}
          />
        </div>
        <div class="field">
          <label for="situation">Cuando</label>
          <input type="text" name="" id="" bind:value={scenarie.situation} />
        </div>
        <div class="field">
          <label for="response">Entonces</label>
          <input
            type="text"
            name="response"
            id=""
            bind:value={scenarie.response}
          />
        </div>
      </form>
    {:else}
      <p>Ningun escenario añadido</p>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: fit-content;
    padding: 2rem;
    border-radius: 1rem;
    background-color: hsl(45 50% 50%);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
