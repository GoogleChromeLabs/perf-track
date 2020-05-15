<script>
  import MetricChart from "../MetricChart.svelte";

  export let fcpData;
  export let lcpData;
  export let fidData;
  export let clsData;
  export let ttfbData;

  let data = [
    { name: "First Contentful Paint", data: fcpData },
    { name: "Largest Contentful Paint", data: lcpData },
    { name: "Cumulative Layout Shift", data: clsData },
    { name: "First Input Delay", data: fidData },
    { name: "Time To First Byte", data: ttfbData }
  ];
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 2rem 0 4rem;
  }

  .metric {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .metric h3 {
    flex: 1;
    font-size: 1.8rem;
  }

  .bars-container {
    flex: 0 0 75%;
  }

  .container > hr:not(:last-child) {
    border: 2px solid #f1f1f1;
  }

  .container > hr:last-child {
    display: none;
  }
</style>

<div class="container">
  {#each data as metric}
    <div class="metric">
      <h3>{metric.name}:</h3>
      <div class="bars-container">
        <MetricChart
          fast={metric.data[0]}
          average={metric.data[1]}
          slow={metric.data[2]}
          fastTooltip="{metric.data[0]}% of loads for these origins have a fast
          (< 1 s) FCP."
          averageTooltip="{metric.data[1]}% of loads for these origins have an
          average (1 s ~ 2.5 s) FCP."
          slowTooltip="{metric.data[2]}% of loads for these origins have a slow
          (> 2.5 s) FCP." />
      </div>
    </div>
    <hr />
  {/each}
</div>
