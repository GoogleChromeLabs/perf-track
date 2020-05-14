<script>
  export let data;
  export let containerHeight;
  export let graph;

  import Doughnut from "../graphs/Doughnut.svelte";
  import Pie from "../graphs/Pie.svelte";
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
      <Pie data={data} />
    {/if}
  </div>
  <ul class="legend">
    <li>
      <div class="info">
        <span class="square green" />
        Less than 200KB
      </div>
      <span class="value">20%</span>
    </li>
    <li>
      <div class="info">
        <span class="square light-green" />
        200 - 400 KB
      </div>
      <span class="value">20%</span>
    </li>
    <li>
      <div class="info">
        <span class="square yellow" />
        400 - 600 KB
      </div>
      <span class="value">20%</span>
    </li>
    <li>
      <div class="info">
        <span class="square orange" />
        600 - 800 KB
      </div>
      <span class="value">20%</span>
    </li>
    <li>
      <div class="info">
        <span class="square red" />
        800 - 1000 KB
      </div>
      <span class="value">20%</span>
    </li>
    <li>
      <div class="info">
        <span class="square brown" />
        Greater than 1MB
      </div>
      <span class="value">20%</span>
    </li>
  </ul>
</div>
