<script>
  export let data;
  export let containerHeight;
  export let graph;

  import Doughnut from "../graphs/Doughnut.svelte";
  import Pie from "../graphs/Pie.svelte";

  const { datasets, labels } = data;
</script>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chart {
    flex: 1;
    max-width: 30%;
    max-height: 70%;
  }

   ul {
    list-style-type: none;
    margin-left: 5rem;
    padding: 0;
    font-size: 1.5rem;
  }

  li {
    margin: 0.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

   li .value {
    font-weight: 600;
  }

   li .info {
    display: flex;
    align-items: center;
  }

   li .square {
    height: 1.5rem;
    width: 1.5rem;
    display: block;
    margin-right: 1rem;
  }

  .square.green {
    background-color: #34a853;
  }

  .square.light-green {
    background-color: #93c47d;
  }

  .square.yellow {
    background-color: #fbbc04;
  }
  
  .square.orange {
    background-color: #ff6d01;
  }

  .square.red {
    background-color: #ea4335;
  }

  .square.brown {
    background-color: #980000;
  }

  .legend {
    flex : 2;
  }
</style>

<div class="container" style="height: { containerHeight }">
  <div class="chart">
    {#if graph === 'doughnut'}
      <Doughnut data={data} />
    {:else if graph === 'pie'}
      <Pie data={data} labels={["Gzip", "Brotli", "None"]} colors={["#fbbc04", "#34a853", "#ea4335"]}/>
    {/if}
  </div>
  <ul class="legend">
    {#if graph === 'doughnut'}
      {#each datasets[0].data as value, i}
        <li>
          <div class="info">
            <span class="square" style="background-color: {datasets[0].backgroundColor[i]}" />
            {labels[i]}
          </div>
          <span class="value">{Math.round(value)}%</span>
        </li>
      {/each}
    {:else if graph === 'pie'}
     <li>
        <div class="info">
          <span class="square yellow" />
          Gzip compressed
        </div>
        <span class="value">{data[0]}%</span>
      </li>
      <li>
        <div class="info">
          <span class="square green" />
          Brotli compressed
        </div>
        <span class="value">{data[1]}%</span>
      </li>
      <li>
        <div class="info">
          <span class="square red" />
          Not compressed
        </div>
        <span class="value">{data[2]}%</span>
      </li>
    {/if}
  </ul>
</div>
