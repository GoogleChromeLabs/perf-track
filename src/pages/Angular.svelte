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
  import { link } from "svelte-routing";

  import StackedBar from "../graphs/StackedBar.svelte";
  import Doughnut from "../graphs/Doughnut.svelte";
  import Pie from "../graphs/Pie.svelte";

  import Logo from "../components/icons/Logo.svelte";
  import AccessibilityIcon from "../components/icons/Accessibility.svelte";
  import ImageIcon from "../components/icons/Image.svelte";
  import TimerIcon from "../components/icons/Timer.svelte";

  import FrameworkHeader from "../components/FrameworkHeader.svelte";
  import QueryIcon from "../components/QueryIcon.svelte";
  import MetricChart from "../components/MetricChart.svelte";
  import ButtonLink from "../components/ButtonLink.svelte";

  import { headerOptions, data } from "../page-data/angular.js";

  let primaryColor = "#ff6384";
  let selectedOption = headerOptions[0];
</script>

<style>
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #ff6384;
    margin-bottom: 20px;
    height: 80px;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 10px 25px rgba(255, 255, 255, 0.49);
    z-index: 3;
  }

  .header .logo {
    margin-right: 10px;
    transition: all 0.2s ease-in-out;
  }

  .header .logo:hover {
    margin-right: 10px;
    transform: scale(1.1);
  }

  .header .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    max-width: 100%;
  }

  .header .toggles {
    display: flex;
    align-items: center;
  }

  .header .toggle {
    margin-right: 30px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
  }

  .header .toggle input {
    margin: 0 10px 0.25em 0;
  }

  .container {
    max-width: 800px;
    margin: 150px auto;
  }

  .section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }

  .section-title p {
    color: #ff6384;
    margin: 0;
    font-size: 32px;
    font-weight: bold;
    font-family: Caveat, sans-serif;
  }

  .origins-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .origins-header .number {
    color: #ff6384;
    margin: 0;
    font-size: 60px;
    font-weight: bold;
    font-family: Caveat, sans-serif;
  }

  .origins-header .details {
    font-size: 16px;
    margin-top: 20px;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ff5382;
    border-radius: 10px;
    padding: 0 30px;
    height: 100px;
    margin-top: 50px;
  }

  section {
    border-bottom: 3px solid silver;
    padding: 30px 30px 70px;
    position: relative;
  }
  section h3 {
    font-size: 24px;
    font-weight: 600;
  }

  section p,
  ul {
    font-size: 18px;
    list-style-type: none;
    margin-top: 40px;
  }

  ul.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section .graph {
    padding: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-container {
    position: absolute;
    right: 10px;
    bottom: 20px;
    margin-top: 20px;
  }

  .icon-row {
    display: flex;
    justify-content: space-around;
    max-width: 500px;
    align-items: center;
    margin: 0 55px 0;
  }

  .icon-row-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
    text-align: center;
  }

  .icon-row-item p {
    font-family: Caveat, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #ff6384;
    margin: 15px 0 0;
  }

  .metric-chart-container {
    margin-top: 60px;
  }

  .faq-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
</style>

<div class="container">
  <!-- FAQ button -->
  <div class="faq-button">
    <QueryIcon
      href="about"
      routeLink
      background='#6c4cd5'/>
  </div>

  <!-- Header -->
  <div class="header">
    <div class="container">
      <a href="/" use:link class="logo">
        <Logo width="80" height="80" />
      </a>
      <div class="toggles">
        {#each headerOptions as option}
          <label class="toggle">
            <input type="radio" bind:group={selectedOption} value={option} />
            {option}
          </label>
        {/each}
      </div>
    </div>
  </div>

  <section>
    <div class="origins-header">
      <p class="number">
        {data[selectedOption].totalNumOrigins.value} total origins detected
      </p>
      <p class="details">
        For
        <strong>{selectedOption}</strong>
        . Every query below reaches a subset of this dataset.
      </p>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].totalNumOrigins.query} />
    </div>
  </section>

  <!-- Content -->
  <div class="heading">
    <h2>General</h2>
    <ImageIcon color="#fff" />
  </div>

  <section>
    <div class="section-title">
      <h3>Total bytes (percentiles)</h3>
      <p>{data[selectedOption].totalBytesPercentile.numOrigins} origins</p>
    </div>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>
            {data[selectedOption].totalBytesPercentile.data[0]} KB
          </strong>
        </li>
        <li>
          75th percentile:
          <strong>
            {data[selectedOption].totalBytesPercentile.data[1]} KB
          </strong>
        </li>
        <li>
          90th percentile:
          <strong>
            {data[selectedOption].totalBytesPercentile.data[2]} KB
          </strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].totalBytesPercentile.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Total bytes (breakdown)</h3>
      <p>{data[selectedOption].totalBytesBreakdown.numOrigins} origins</p>
    </div>

    <div>
      <p>Percentage of sites that ship a range of total bytes:</p>

      <div class="graph">
        <Doughnut data={data[selectedOption].totalBytesBreakdown.data} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].totalBytesBreakdown.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Total bytes (comparison)</h3>
    </div>

    <div>
      <p>Comparison of total bytes shipped versus other site groups:</p>

      <div class="graph">
        <StackedBar data={data[selectedOption].totalBytesComparison.data} />
      </div>

      <div class="icon-row">
        <div class="icon-row-item">
          <QueryIcon
            background={primaryColor}
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:900ec4f56f3c4e7c9e18c9330799a9de" />
          <p>4,541,194 origins</p>
        </div>
        <div class="icon-row-item">
          <QueryIcon
            background={primaryColor}
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:aadf72e022e44669aef222442aea75d4" />
          <p>452,672 origins</p>
        </div>
        <div class="icon-row-item">
          <QueryIcon
            background={primaryColor}
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:c040f79787cb4639a179af77def45662" />
          <p>155 origins</p>
        </div>
        <div class="icon-row-item">
          <QueryIcon
            background={primaryColor}
            href={data[selectedOption].totalBytesBreakdown.query} />
          <p>{data[selectedOption].totalBytesBreakdown.numOrigins} origins</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Compressed requests</h3>
      <p>{data[selectedOption].compressedRequests.numOrigins} origins</p>
    </div>

    <div>
      <p>Percentage of compressed requests</p>

      <p>
        <strong>
          Total number of requests = {data[selectedOption].compressedRequests.numRequests}
        </strong>
      </p>

      <div class="graph">
        <Pie
          colors={["#fbbc04", "#34a853", "#e74c3c"]}
          labels={['Gzip compressed', 'Brotli compressed', 'Not compressed with Gzip or Brotli']}
          data={[data[selectedOption].compressedRequests.gzipCompressedPercent, data[selectedOption].compressedRequests.brotliCompressedPercent, 100 - data[selectedOption].compressedRequests.gzipCompressedPercent + data[selectedOption].compressedRequests.brotliCompressedPercent]} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].compressedRequests.query} />
    </div>
  </section>

  <div class="heading">
    <h2>State of JavaScript</h2>
    <h2>{'{ }'}</h2>
  </div>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (percentiles)</h3>
      <p>{data[selectedOption].jsBytesPercentile.numOrigins} origins</p>
    </div>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>{data[selectedOption].jsBytesPercentile.data[0]} KB</strong>
        </li>
        <li>
          75th percentile:
          <strong>{data[selectedOption].jsBytesPercentile.data[1]} KB</strong>
        </li>
        <li>
          90th percentile:
          <strong>{data[selectedOption].jsBytesPercentile.data[2]} KB</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].jsBytesPercentile.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (breakdown)</h3>
      <p>{data[selectedOption].jsBytesBreakdown.numOrigins} origins</p>
    </div>

    <div>
      <p>Percentage of sites that ship a range of JS bytes:</p>

      <div class="graph">
        <Doughnut data={data[selectedOption].jsBytesBreakdown.data} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].jsBytesBreakdown.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (comparison)</h3>
    </div>

    <div>
      <p>Comparison of JS bytes shipped versus other site groups:</p>

      <div class="graph">
        <StackedBar data={data[selectedOption].jsBytesComparison.data} />
      </div>

      <div class="icon-row">
        <div class="icon-row-item">
          <QueryIcon
            background={primaryColor}
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:32734a3bae8b487a909c70ee644d58db" />
          <p>4,541,194 origins</p>
        </div>
        <div class="icon-row-item">
          <QueryIcon
            background={primaryColor}
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:1a90b6f7529740f5acb26470120fe134" />
          <p>452,672 origins</p>
        </div>
        <div class="icon-row-item">
          <QueryIcon
            background={primaryColor}
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:d4b4ea6c07a34468a7454fb9f5187c39" />
          <p>155 origins</p>
        </div>
        <div class="icon-row-item">
          <QueryIcon
            background={primaryColor}
            href={data[selectedOption].jsBytesBreakdown.query} />
          <p>{data[selectedOption].jsBytesBreakdown.numOrigins} origins</p>
        </div>
      </div>
      <div class="icon-row" />
    </div>
  </section>

  <div class="heading">
    <h2>State of Images</h2>
    <ImageIcon color="#fff" />
  </div>

  <section>
    <div class="section-title">
      <h3>Image bytes (percentiles)</h3>
      <p>{data[selectedOption].imgBytesPercentile.numOrigins} origins</p>
    </div>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>{data[selectedOption].imgBytesPercentile.data[0]} KB</strong>
        </li>
        <li>
          75th percentile:
          <strong>{data[selectedOption].imgBytesPercentile.data[1]} KB</strong>
        </li>
        <li>
          90th percentile:
          <strong>{data[selectedOption].imgBytesPercentile.data[2]} KB</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].imgBytesPercentile.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Image bytes (breakdown)</h3>
      <p>{data[selectedOption].imgBytesBreakdown.numOrigins} origins</p>
    </div>

    <div>
      <p>Percentage of sites that ship a range of image bytes:</p>

      <div class="graph">
        <Doughnut data={data[selectedOption].imgBytesBreakdown.data} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].imgBytesBreakdown.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that use optimized images</h3>
      <p>{data[selectedOption].optimizedImgOrigins.numOrigins} origins</p>
    </div>

    <div>
      <p>
        Percentage of sites that use optimized images measured via the
        <a
          href="https://developers.google.com/web/tools/lighthouse/audits/optimize-images">
          Lighthouse audit
        </a>
        .
      </p>

      <div class="graph">
        <Pie data={data[selectedOption].optimizedImgOrigins.data} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].optimizedImgOrigins.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that use responsive images</h3>
      <p>{data[selectedOption].responsiveImgOrigins.numOrigins} origins</p>
    </div>

    <div>
      <p>
        Percentage of sites that use responsive images. Measured via the
        <a
          href="https://developers.google.com/web/tools/lighthouse/audits/oversized-images">
          Lighthouse audit
        </a>
        .
      </p>

      <div class="graph">
        <Pie data={data[selectedOption].responsiveImgOrigins.data} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].responsiveImgOrigins.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that use next gen images</h3>
      <p>{data[selectedOption].nextGenImgOrigins.numOrigins} origins</p>
    </div>

    <div>
      <p>
        Percentage of sites that use next gen images. Measured via the
        <a
          href="https://developers.google.com/web/tools/lighthouse/audits/webp">
          Lighthouse audit
        </a>
        .
      </p>

      <div class="graph">
        <Pie data={data[selectedOption].nextGenImgOrigins.data} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].nextGenImgOrigins.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that defer offscreen images</h3>
      <p>{data[selectedOption].offscreenImgOrigins.numOrigins} origins</p>
    </div>

    <div>
      <p>
        Percentage of sites defer offscreen images. Measured via the
        <a
          href="https://developers.google.com/web/tools/lighthouse/audits/offscreen-images">
          Lighthouse audit
        </a>
        .
      </p>

      <div class="graph">
        <Pie data={data[selectedOption].offscreenImgOrigins.data} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].offscreenImgOrigins.query} />
    </div>
  </section>

  <div class="heading">
    <h2>State of Performance</h2>
    <TimerIcon color="#fff" />
  </div>

  <section>
    <div class="section-title">
      <h3>First Contentful Paint (FCP)</h3>
      <p>{data[selectedOption].firstContentfulPaint.numOrigins} origins</p>
    </div>

    <p>Measured via Lighthouse's <a href="https://web.dev/first-contentful-paint#how-lighthouse-determines-your-fcp-score">First Contentful Paint</a> audit.</p>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>{data[selectedOption].firstContentfulPaint.data[0]}s</strong>
        </li>
        <li>
          75th percentile:
          <strong>{data[selectedOption].firstContentfulPaint.data[1]}s</strong>
        </li>
        <li>
          90th percentile:
          <strong>{data[selectedOption].firstContentfulPaint.data[2]}s</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="{data[selectedOption].firstContentfulPaint.query}" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Time to Interactive (TTI)</h3>
      <p>{data[selectedOption].timeToInteractive.numOrigins} origins</p>
    </div>

    <p>Measured via Lighthouse's <a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/metrics/interactive.js">Interactive</a> audit.</p>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>{data[selectedOption].timeToInteractive.data[0]}s</strong>
        </li>
        <li>
          75th percentile:
          <strong>{data[selectedOption].timeToInteractive.data[1]}s</strong>
        </li>
        <li>
          90th percentile:
          <strong>{data[selectedOption].timeToInteractive.data[2]}s</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].timeToInteractive.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>First Contentful Paint (FCP) - CrUX</h3>
      <p>{data[selectedOption].firstContentfulPaintCrux.numOrigins} origins</p>
    </div>

    <p>All runs on 3G and mobile</p>

    <div class="metric-chart-container">
      <MetricChart
        fast={data[selectedOption].firstContentfulPaintCrux.data[0]}
        average={data[selectedOption].firstContentfulPaintCrux.data[1]}
        slow={data[selectedOption].firstContentfulPaintCrux.data[2]}
        fastTooltip="{data[selectedOption].firstContentfulPaintCrux.data[0]}% of
        loads for these origins have a fast (< 1 s) FCP."
        averageTooltip="{data[selectedOption].firstContentfulPaintCrux.data[1]}% of
        loads for these origins have an average (1 s ~ 2.5 s) FCP."
        slowTooltip="{data[selectedOption].firstContentfulPaintCrux.data[2]}% of
        loads for these origins have a slow (> 2.5 s) FCP." />
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].firstContentfulPaintCrux.query} />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>First Input Delay (FID)  - CrUX</h3>
      <p>{data[selectedOption].firstInputDelayCrux.numOrigins} origins</p>
    </div>

    <p>All runs on 3G and mobile</p>

    <div class="metric-chart-container">
      <MetricChart
        fast={data[selectedOption].firstInputDelayCrux.data[0]}
        average={data[selectedOption].firstInputDelayCrux.data[1]}
        slow={data[selectedOption].firstInputDelayCrux.data[2]}
        fastTooltip="{data[selectedOption].firstInputDelayCrux.data[0]}% of loads
        for these origins have a fast (< 50 ms) FID."
        averageTooltip="{data[selectedOption].firstInputDelayCrux.data[1]}% of loads
        for these origins have an average (50 ms ~ 250 ms) FID."
        slowTooltip="{data[selectedOption].firstInputDelayCrux.data[2]}% of loads
        for these origins have a slow (> 250 ms) FID." />
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href={data[selectedOption].firstInputDelayCrux.query} />
    </div>
  </section>

  <!-- <div class="heading">
    <h2>State of Accessibility</h2>
    <AccessibilityIcon color="#fff" />
  </div>

  <section>
    <h3>Coming soon to a theatre near you</h3>
  </section> -->
</div>
