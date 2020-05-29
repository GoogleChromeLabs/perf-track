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

  import Card from "../Card.svelte";
  import Chart from "../Chart.svelte";

  import MetricChartLayout from "./MetricChartLayout.svelte";

  import UsageIcon from "../icons/Usage.svelte";
  import LightningIcon from "../icons/Lightning.svelte";
  import CompressIcon from "../icons/Compress.svelte";
  import ImageIcon from "../icons/Image.svelte";
  import WeightIcon from "../icons/Weight.svelte";
  import GaugeIcon from "../icons/Gauge.svelte";

  import frameworkInfo from "../../utils/framework-info.json";

  export let data;
  export let topLevelFramework;
  export let framework;

  let percent;
  let detectorIcon;

  const updateData = () => {
    percent = (data[framework].sampleSize.framework / data[framework].sampleSize.all) * 100;

    const frameworkObj = frameworkInfo[framework] || frameworkInfo[topLevelFramework].variations[framework];
    detectorIcon = frameworkObj.detector === 'wappalyzer' ? "/images/wappalyzer-logo.jpeg" : "/images/library-detector-logo.png";
  }

  beforeUpdate(() => updateData());
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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

  .number-container .heading {
    font-size: clamp(5rem, 4vw, 9rem);
    font-weight: 600;
    margin: 0;
    line-height: 1.2; 
  }

  .number-container .subheading {
    font-size: clamp(1.3rem, 1vw, 1.7rem);
  }

  img.header-logo {
    max-width: 30px;
    max-height: 30px;
  }

  @media (min-width: 1240px) {
    .spacer {
      display: none;
    }
  }
  
  @media (max-width: 1240px) {
    .container {
      margin-top: 7rem;
    }

    .number-container {
      margin: 2rem 0;
    }

    .spacer {
      height: 10rem;
    }
  }

  @media (max-width: 715px) {
    .container {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
</style>

<div class="container">
  <Card
    heading="Total sample size"
    centerHeading
    style="grid-column: 1; grid-row: 1;">
    <span class="icon" slot="icon">
			<img class="header-logo" src={detectorIcon} alt="{data[framework].detector} logo (all detections are from {data[framework].detector})"/>
    </span>
    <div class="number-container">
      <p class="heading">{data[framework].sampleSize.framework.toLocaleString()}</p>
      <span class="subheading">{percent.toFixed(1) === "0.0" ? percent.toFixed(2) : percent.toFixed(1)}% of all URLs</span>
    </div>
  </Card>
  <Card heading="Web Vitals" style="grid-column: 2 / 4; grid-row: 1 / 3;">
    <span class="icon" slot="icon">
      <LightningIcon />
    </span>
    <span slot="number">
      Origin-aggregated (3G + mobile)
    </span>
    <MetricChartLayout 
      bind:fcp={data[framework].fcpCrux} 
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
  <div class="spacer"></div>
</div>
