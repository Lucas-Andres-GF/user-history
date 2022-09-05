<script lang="ts">
  let data = {
    id: "Test 1",
    title: "Test context for the test",
    rules: [
      "Test situation for test the test - 1",
      "Test situation for test the test - 2",
      "Test situation for test the test - 3",
    ],
  };
</script>

<div class="container">
  <div class="card">
    <form action="">
      <div class="field">
        <label for="id">Id:</label>
        <input type="text" name="id" id="" bind:value={data.id} />
      </div>
      <div class="field">
        <label for="title">Titulo</label>
        <input type="text" name="title" id="" bind:value={data.title} />
      </div>

      <h1>Reglas de negocio</h1>
      {#each data.rules as rule, i}
        <div class="field">
          <label for="rule-{i}">Regla {i + 1}:</label>
          <input
            type="text"
            name="rule-{i}"
            id=""
            bind:value={rule}
          />
        </div>
      {:else}
        <p>Ningun escenario añadido</p>
      {/each}
    </form>
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
