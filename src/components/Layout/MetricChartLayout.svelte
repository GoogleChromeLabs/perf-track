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
  import { beforeUpdate } from "svelte";

  import MetricChart from "../MetricChart.svelte";

  export let fcp;
  export let lcp;
  export let fid;
  export let cls;
  export let ttfb;

  let allData;

  const updateData = () => {
    allData = [
      {
        name: "First Contentful Paint",
        shortName: "FCP",
        data: fcp.data,
        num: fcp.numOrigins,
        fastThreshold: "1.5s",
        poorThreshold: "2.5s"
      },
      {
        name: "Largest Contentful Paint",
        shortName: "LCP",
        data: lcp.data,
        num: lcp.numOrigins,
        fastThreshold: "2.5s",
        poorThreshold: "4s"
      },
      {
        name: "Cumulative Layout Shift",
        shortName: "CLS",
        data: cls.data,
        num: cls.numOrigins,
        fastThreshold: "0.1",
        poorThreshold: "0.25"
      },
      {
        name: "First Input Delay",
        shortName: "FID",
        data: fid.data,
        num: fid.numOrigins,
        fastThreshold: "100ms",
        poorThreshold: "300ms"
      },
      {
        name: "Time To First Byte",
        shortName: "TTFB",
        data: ttfb.data,
        num: ttfb.numOrigins,
        fastThreshold: "500ms",
        poorThreshold: "1500ms"
      }
    ];
  };

  beforeUpdate(() => updateData());
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
  }

  .metric {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .metric h3 {
    flex: 1;
    font-size: clamp(1.6rem, 1vw, 3rem);
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
    font-size: clamp(1.3rem, 1vw, 1.7rem);
  }

  @media (min-width: 1241px) {
    .container {
      padding: 2rem 0 4rem;
    }

    .large {
      display: block;
    }

    .small {
      display: none;
    }
  }

  @media (max-width: 1240px) {
    .metric {
      flex-direction: column;
      padding: 2rem 0;
    }

    .bars-container {
      width: 100%;
      margin-top: 1rem;
    }

    .large {
      display: none;
    }

    .small {
      display: block;
      margin-bottom: 1rem;
    }
  }
</style>

<div class="container">
  {#each allData as metric}
    <div>
      <div class="metric">
        <h3>{metric.name}:</h3>
        <div class="number small">({metric.num.toLocaleString()} origins)</div>
        <div class="bars-container">
          <MetricChart
            fast={metric.data[0]}
            average={metric.data[1]}
            slow={metric.data[2]}
            fastTooltip="{metric.data[0]}% of page loads have a good { metric.shortName } (< {metric.fastThreshold})."
            averageTooltip="{metric.data[1]}% of page loads need to improve { metric.shortName }
            ({metric.fastThreshold} - {metric.poorThreshold})."
            slowTooltip="{metric.data[2]}% of page loads have a poor { metric.shortName } (> {metric.poorThreshold})." />
        </div>
      </div>
      <div class="number large">({metric.num.toLocaleString()} origins)</div>
    </div>
    <hr />
  {/each}
</div>
