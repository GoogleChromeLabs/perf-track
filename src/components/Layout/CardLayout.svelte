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
  import Card from "../Card.svelte";
  import Chart from "../Chart.svelte";

  import MetricChartLayout from "./MetricChartLayout.svelte";

  import UsageIcon from "../icons/Usage.svelte";
  import LightningIcon from "../icons/Lightning.svelte";
  import CompressIcon from "../icons/Compress.svelte";
  import ImageIcon from "../icons/Image.svelte";
  import WeightIcon from "../icons/Weight.svelte";
  import GaugeIcon from "../icons/Gauge.svelte";

  export let data;
  export let framework;
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    height: 100%;
  }

  .icon {
    display: flex;
    font-size: 2.5rem;
  }

  .number-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 4rem);
    justify-content: center;
  }

  .number-container p {
    font-size: 7rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.2; 
  }
</style>

<div class="container">
  <Card
    heading="Total sample size"
    centerHeading
    style="grid-column: 1; grid-row: 1;">
    <span class="icon" slot="icon">
      <UsageIcon />
    </span>
    <div class="number-container">
      <p>{data[framework].sampleSize.framework.toLocaleString()}</p>
      <span>{((data[framework].sampleSize.framework / data[framework].sampleSize.all) * 100).toFixed(1)}% of all URLs</span>
    </div>
  </Card>
  <Card heading="Web Vitals" style="grid-column: 2 / 4; grid-row: 1 / 3;">
    <span class="icon" slot="icon">
      <LightningIcon />
    </span>
    <MetricChartLayout 
      fcp={data[framework].fcpCrux} 
      lcp={data[framework].lcpCrux} 
      fid={data[framework].fidCrux} 
      cls={data[framework].clsCrux} 
      ttfb={data[framework].ttfbCrux} 
    />
  </Card>
  <Card heading="Compressed requests" style="grid-column: 1; grid-row: 2;">
    <span class="icon" slot="icon">
      <CompressIcon />
    </span>
    <span slot="number">
      {data[framework].compressedRequests.numUrls.toLocaleString()} urls
    </span>
    <Chart
      graph="pie"
      colors={['#fbbc04', '#34a853', '#e74c3c']}
      labels={['Gzip compressed', 'Brotli compressed', 'Not compressed with Gzip or Brotli']}
      data={[data[framework].compressedRequests.gzipCompressedPercent, data[framework].compressedRequests.brotliCompressedPercent, 100 - data[framework].compressedRequests.gzipCompressedPercent + data[framework].compressedRequests.brotliCompressedPercent]}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
  <Card heading="Total Bytes" style="grid-column: 1; grid-row: 3;">
    <span class="icon" slot="icon">
      <WeightIcon />
    </span>
    <span slot="number">
      {data[framework].totalBytesBreakdown.numUrls.toLocaleString()} urls
    </span>
    <Chart
      graph="doughnut"
      data={data[framework].totalBytesBreakdown.data}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
  <Card heading="JavaScript Bytes" style="grid-column: 2; grid-row: 3;">
    <span slot="number">
      {data[framework].jsBytesBreakdown.numUrls.toLocaleString()} urls
    </span>
    <span class="icon" slot="icon">{'{ }'}</span>
    <Chart
      graph="doughnut"
      data={data[framework].jsBytesBreakdown.data}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
  <Card heading="Image Bytes" style="grid-column: 3; grid-row: 3;">
    <span class="icon" slot="icon">
      <ImageIcon />
    </span>
     <span slot="number">
      {data[framework].imgBytesBreakdown.numUrls.toLocaleString()} urls
    </span>
    <Chart
      graph="doughnut"
      data={data[framework].imgBytesBreakdown.data}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
</div>
