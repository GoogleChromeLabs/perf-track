<script>
  import MetricChart from "../MetricChart.svelte";

  export let fcp;
  export let lcp;
  export let fid;
  export let cls;
  export let ttfb;

  let allData = [
    { name: "First Contentful Paint", shortName: 'FCP', data: fcp.data, num: fcp.numOrigins, fastThreshold: '2 s', poorThreshold: '4 s' },
    { name: "Largest Contentful Paint", shortName: 'LCP', data: lcp.data, num: lcp.numOrigins, fastThreshold: '2.5 s', poorThreshold: '4 s' },
    { name: "Cumulative Layout Shift", shortName: 'CLS', data: cls.data, num: cls.numOrigins, fastThreshold: '0.1', poorThreshold: '0.25' },
    { name: "First Input Delay", shortName: 'FID', data: fid.data, num: fid.numOrigins, fastThreshold: '100 ms', poorThreshold: '300 ms' },
    { name: "Time To First Byte", shortName: 'TTFB', data: ttfb.data, num: ttfb.numOrigins, fastThreshold: '100 ms', poorThreshold: '500 ms' },
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

  .number {
    font-size: 1.4rem;
  }
</style>

<div class="container">
  {#each allData as metric}
    <div>
      <div class="metric">
        <h3>{metric.name}:</h3>
        <div class="bars-container">
          <MetricChart
            fast={metric.data[0]}
            average={metric.data[1]}
            slow={metric.data[2]}
            fastTooltip="{metric.data[0]}% of all page loads have a fast { metric.shortName } (< {metric.fastThreshold})."
            averageTooltip="{metric.data[0]}% of all page loads have a { metric.shortName } that needs improvement ({metric.fastThreshold} - {metric.poorThreshold})."
            slowTooltip="{metric.data[0]}% of all page loads have a poor { metric.shortName } (> {metric.poorThreshold})."/>
        </div>
      </div>
      <div class="number">
        ({metric.num.toLocaleString()} urls)
      </div>
    </div>
    <hr />
  {/each}
</div>
