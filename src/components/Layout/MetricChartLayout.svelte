<script>
  import MetricChart from "../MetricChart.svelte";

  export let fcp;
  export let lcp;
  export let fid;
  export let cls;
  export let ttfb;

  // let allData = [
  //   {
  //     name: "First Contentful Paint",
  //     shortName: "FCP",
  //     data: fcp.data,
  //     num: fcp.numOrigins,
  //     fastThreshold: "2 s",
  //     poorThreshold: "4 s"
  //   },
  //   {
  //     name: "Largest Contentful Paint",
  //     shortName: "LCP",
  //     data: lcp.data,
  //     num: lcp.numOrigins,
  //     fastThreshold: "2.5 s",
  //     poorThreshold: "4 s"
  //   },
  //   {
  //     name: "Cumulative Layout Shift",
  //     shortName: "CLS",
  //     data: cls.data,
  //     num: cls.numOrigins,
  //     fastThreshold: "0.1",
  //     poorThreshold: "0.25"
  //   },
  //   {
  //     name: "First Input Delay",
  //     shortName: "FID",
  //     data: fid.data,
  //     num: fid.numOrigins,
  //     fastThreshold: "100 ms",
  //     poorThreshold: "300 ms"
  //   },
  //   {
  //     name: "Time To First Byte",
  //     shortName: "TTFB",
  //     data: ttfb.data,
  //     num: ttfb.numOrigins,
  //     fastThreshold: "500 ms",
  //     poorThreshold: "1500 ms"
  //   }
  // ];
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
  <div>
    <div class="metric">
      <h3>First Contentful Paint:</h3>
      <div class="bars-container">
        <MetricChart
          fast={fcp.data[0]}
          average={fcp.data[1]}
          slow={fcp.data[2]}
          fastTooltip="{fcp.data[0]}% of page loads have a fast FCP
          (< 2s)."
          averageTooltip="{fcp.data[1]}% of page loads need to improve FCP
          (2 - 4s)."
          slowTooltip="{fcp.data[2]}% of page loads have a poor FCP
          (> 4s)." />
      </div>
    </div>
    <div class="number">({fcp.numOrigins.toLocaleString()} origins)</div>
  </div>
  <hr />
  <div>
    <div class="metric">
      <h3>Largest Contentful Paint:</h3>
      <div class="bars-container">
        <MetricChart
          fast={lcp.data[0]}
          average={lcp.data[1]}
          slow={lcp.data[2]}
          fastTooltip="{lcp.data[0]}% of page loads have a fast LCP
          (< 2.5s)."
          averageTooltip="{lcp.data[1]}% of page loads need to improve LCP
          (2.5 - 4s)."
          slowTooltip="{lcp.data[2]}% of page loads have a poor LCP
          (> 4s)." />
      </div>
    </div>
    <div class="number">({lcp.numOrigins.toLocaleString()} origins)</div>
  </div>
  <hr />
  <div>
    <div class="metric">
      <h3>Cumulative Layout Shift:</h3>
      <div class="bars-container">
        <MetricChart
          fast={cls.data[0]}
          average={cls.data[1]}
          slow={cls.data[2]}
          fastTooltip="{cls.data[0]}% of page loads have a good CLS
          (< 0.1)."
          averageTooltip="{cls.data[1]}% of page loads need to improve CLS
          (0.1 - 0.25)."
          slowTooltip="{cls.data[2]}% of page loads have a poor CLS
          (> 0.25)." />
      </div>
    </div>
    <div class="number">({cls.numOrigins.toLocaleString()} origins)</div>
  </div>
  <hr />
  <div>
    <div class="metric">
      <h3>First Input Delay:</h3>
      <div class="bars-container">
        <MetricChart
          fast={fid.data[0]}
          average={fid.data[1]}
          slow={fid.data[2]}
          fastTooltip="{fid.data[0]}% of page loads have a fast FID
          (< 100 ms)."
          averageTooltip="{fid.data[1]}% of page loads need to improve FID
          (100 - 300 ms)."
          slowTooltip="{fid.data[2]}% of page loads have a poor FID
          (> 300ms)." />
      </div>
    </div>
    <div class="number">({fid.numOrigins.toLocaleString()} origins)</div>
  </div>
  <hr />
  <div>
    <div class="metric">
      <h3>Time to First Byte:</h3>
      <div class="bars-container">
        <MetricChart
          fast={ttfb.data[0]}
          average={ttfb.data[1]}
          slow={ttfb.data[2]}
          fastTooltip="{ttfb.data[0]}% of page loads have a fast TTFB
          (< 500ms)."
          averageTooltip="{ttfb.data[1]}% of page loads need to improve TTFB
          (500 - 1500ms)."
          slowTooltip="{ttfb.data[2]}% of page loads have a poor TTFB
          (> 1500ms)." />
      </div>
    </div>
    <div class="number">({ttfb.numOrigins.toLocaleString()} origins)</div>
  </div>
</div>
