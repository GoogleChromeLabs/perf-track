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

  import * as angular from "../page-data/angular.js";
  // import * as gatsby from "../page-data/gatsby.js";
  import * as polymer from "../page-data/polymer.js";
  import * as react from "../page-data/react.js";
  import * as vue from "../page-data/vue.js";

  let primaryColor = '#36A2EB';

  class DataSet {
    constructor(module) {
      this.opts = module.headerOptions;
      this.data = module.data;
    }

    get byOption() {
      let options = {};
      for (let x of this.opts) {
        options[x] = this.data[x];
      }
    }

    toOptionsArray() {
      let ret = [];
      for (let x of this.opts) {
        ret.push({
          "name": x,
          "data": this.data[x],
        });
      }
      return ret;
    }
  }

  let frameworks = [
    new DataSet(svelte),
    new DataSet(polymer),
    new DataSet(vue),
    new DataSet(angular),
    // new DataSet(gatsby),
    new DataSet(react),
  ];

  let totals = {};

  let frameworkDataSets = [];

  frameworks.forEach((ds) => {
    let opts = ds.toOptionsArray();
    frameworkDataSets.push(...opts);

    opts.forEach((optObj) => {
      if (!optObj.name.includes("All")) { return; }
      let ol = optObj.data;
      for (let name in ol) {
        if (name.includes("total")) {
          if(!totals[name]) {
            totals[name] = ol[name];
          } else {
            for (let _name in ol[name]) {
              let _value = ol[name][_name];
              if (typeof _value == "number") {
                totals[name][_name] += _value;
              }
            }
          }
        }
      }
    });
  });
</script>

<style>
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #36A2EB;
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
    transition: all .2s ease-in-out;
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
    color: #36A2EB;
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
    color: #36A2EB;
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
    background: #36A2EB;
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
    color: #36A2EB;
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
        <Logo width="80" height="80"/>
      </a>
      <!--
      <div class="toggles">
        {#each headerOptions as option}
          <label class="toggle">
            <input type=radio bind:group={selectedOption} value={option}>
            {option}
          </label>
        {/each}
      </div>
      -->
    </div>
  </div>

  <section>
    <div class="origins-header">
      <p class="number">{totals.totalNumUrls.value} total origins detected</p>
    </div>

  <!--
    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="{data[selectedOption].totalNumUrls.query}" />
    </div>
  -->
  </section>

  <!-- Content -->
  <div class="heading">
    <h2>State of Performance</h2>
    <TimerIcon color="#fff" />
  </div>

  <section>
    <div class="section-title">
      <h3>First Contentful Paint (FCP) - CrUX</h3>
    </div>

    <p>All runs on 3G and mobile</p>

    <div class="metric-chart-container">
    {#each frameworkDataSets as fw }
      <h5>{fw.name}</h5>
      <MetricChart
        fast="{fw.data.fcpCrux.data[0]}"
        average="{fw.data.fcpCrux.data[1]}"
        slow="{fw.data.fcpCrux.data[2]}"
        fastTooltip="{fw.data.fcpCrux.data[0]}% of loads for these origins have a fast (< 1 s) FCP."
        averageTooltip="{fw.data.fcpCrux.data[1]}% of loads for these origins have an average (1 s ~
        2.5 s) FCP."
        slowTooltip="{fw.data.fcpCrux.data[2]}% of loads for these origins have a slow (> 2.5 s) FCP." />
    {/each}
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>First Input Delay (FID) - CrUX</h3>
    </div>

    <p>All runs on 3G and mobile</p>

    <div class="metric-chart-container">
    {#each frameworkDataSets as fw }
      <h5>{fw.name}</h5>
      <MetricChart
        fast="{fw.data.fidCrux.data[0]}"
        average="{fw.data.fidCrux.data[1]}"
        slow="{fw.data.fidCrux.data[2]}"
        fastTooltip="{fw.data.fidCrux.data[0]}% of loads for these origins have a fast (< 50 ms) FID."
        averageTooltip="{fw.data.fidCrux.data[1]}% of loads for these origins have an average (50 ms ~
        250 ms) FID."
        slowTooltip="{fw.data.fidCrux.data[2]}% of loads for these origins have a slow (> 250 ms) FID." />
    {/each}
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>First Contentful Paint (FCP)</h3>
    </div>

    <p>Measured via Lighthouse's <a href="https://web.dev/first-contentful-paint#how-lighthouse-determines-your-fcp-score">First Contentful Paint</a> audit.</p>

    <div>
      {#each frameworkDataSets as fw }
      <div class="section-title">
        <h4>{fw.name}</h4>
        <p>{fw.data.firstContentfulPaint.numUrls} origins</p>
      </div>
      <ul class="row">
        <li>
          Median:
          <strong>{fw.data.firstContentfulPaint.data[0]}s</strong>
        </li>
        <li>
          75th percentile:
          <strong>{fw.data.firstContentfulPaint.data[1]}s</strong>
        </li>
        <li>
          90th percentile:
          <strong>{fw.data.firstContentfulPaint.data[2]}s</strong>
        </li>
      </ul>
      {/each}
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Time to Interactive (TTI)</h3>
    </div>

    <p>Measured via Lighthouse's <a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/metrics/interactive.js">Interactive</a> audit.</p>

    <div>
      {#each frameworkDataSets as fw }
      <div class="section-title">
        <h4>{fw.name}</h4>
        <p>{fw.data.firstContentfulPaint.numUrls} origins</p>
      </div>
      <ul class="row">
        <li>
          Median:
          <strong>{fw.data.timeToInteractive.data[0]}s</strong>
        </li>
        <li>
          75th percentile:
          <strong>{fw.data.timeToInteractive.data[1]}s</strong>
        </li>
        <li>
          90th percentile:
          <strong>{fw.data.timeToInteractive.data[2]}s</strong>
        </li>
      </ul>
      {/each}
    </div>
  </section>

  <div class="heading">
    <h2>State of JavaScript</h2>
    <h2>{'{ }'}</h2>
  </div>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (percentiles)</h3>
    </div>

    <div>
      {#each frameworkDataSets as fw }
      <div class="section-title">
        <h4>{fw.name}</h4>
        <p>{fw.data.jsBytesPercentile.numUrls} origins</p>
      </div>
      <ul class="row">
        <li>
          Median:
          <strong>{fw.data.jsBytesPercentile.data[0]} KB</strong>
        </li>
        <li>
          75th percentile:
          <strong>{fw.data.jsBytesPercentile.data[1]} KB</strong>
        </li>
        <li>
          90th percentile:
          <strong>{fw.data.jsBytesPercentile.data[2]} KB</strong>
        </li>
      </ul>
      {/each}
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (breakdown)</h3>
    </div>

    <div>
      <p>Percentage of sites that ship a range of JS bytes:</p>

      {#each frameworkDataSets as fw }
      <div class="section-title">
        <h4>{fw.name}</h4>
        <p>{fw.data.jsBytesPercentile.numUrls} origins</p>
      </div>
      <div class="graph">
        <Doughnut data={fw.data.jsBytesBreakdown.data} />
      </div>
      {/each}
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (comparison)</h3>
    </div>

    <div>
      <p>Comparison of JS bytes shipped versus other site groups:</p>
      {#each frameworkDataSets as fw }
      <div class="section-title">
        <h4>{fw.name}</h4>
        <p>{fw.data.jsBytesPercentile.numUrls} origins</p>
      </div>

      <!-- guard because Svelte data is missing this -->
      {#if fw.data.jsBytesComparison }
      <div class="graph">
        <StackedBar data={fw.data.jsBytesComparison.data} />
      </div>
      {/if}
      {/each}
    </div>
  </section>

</div>

