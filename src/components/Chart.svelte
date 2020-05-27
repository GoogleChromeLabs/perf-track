<!-- Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. -->

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
    font-size: clamp(1.3rem, 1vw, 1.5rem);
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

  .square.yellow {
    background-color: #fbbc04;
  }
  
  .square.red {
    background-color: #ea4335;
  }

  .legend {
    flex : 2;
  }

  @media (min-width: 1800px) {
    ul {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 1240px) {
    .container {
      flex-direction: column;
      width: 100%;
    }

    .chart {
      max-width: 60%;
      max-height: auto;
    }

    ul {
      margin: 0;
      width: 100%;
    }
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
      {#each data.datasets[0].data as value, i}
        <li>
          <div class="info">
            <span class="square" style="background-color: {data.datasets[0].backgroundColor[i]}" />
            {data.labels[i]}
          </div>
          <span class="value">{value.toFixed(1)}%</span>
        </li>
      {/each}
    {:else if graph === 'pie'}
     <li>
        <div class="info">
          <span class="square yellow" />
          Gzip compressed
        </div>
        <span class="value">{data[0].toFixed(1)}%</span>
      </li>
      <li>
        <div class="info">
          <span class="square green" />
          Brotli compressed
        </div>
        <span class="value">{data[1].toFixed(1)}%</span>
      </li>
      <li>
        <div class="info">
          <span class="square red" />
          Not compressed
        </div>
        <span class="value">{(100 - (data[0] + data[1])).toFixed(1)}%</span>
      </li>
    {/if}
  </ul>
</div>
