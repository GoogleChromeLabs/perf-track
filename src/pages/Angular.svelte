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

  // data
  import TotalBytesBreakdown from "../data/angular/all/total-bytes-breakdown";
  import JSBytesBreakdown from "../data/angular/all/js-bytes-breakdown";
  import ImgBytesBreakdown from "../data/angular/all/img-bytes-breakdown";
  import TotalBytesComparison from "../data/angular/all/total-bytes-comparison";
  import JSBytesComparison from "../data/angular/all/js-bytes-comparison";

  let primaryColor = "#ff6384";

  let headerOptions = [
    'All Angular sites',
    'Angular sites without jQuery'
  ];

  let selectedOption = headerOptions[0];
</script>

<style>
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #FF6384;
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
    color: #ff6384;
    margin: 0;
    font-size: 32px;
    font-weight: bold;
    font-family: Caveat, sans-serif;
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
</style>

<div class="container">
  
  <!-- Header -->
  <div class="header">
    <div class="container">
      <a href="/" use:link class="logo">
        <Logo width="80" height="80"/>
      </a>
      <div class="toggles">
        {#each headerOptions as option}
          <label class="toggle">
            <input type=radio bind:group={selectedOption} value={option}>
            {option}
          </label>
        {/each}
      </div>
    </div>
  </div>

  <!-- Content -->
  <div class="heading">
    <h2>General</h2>
    <ImageIcon color="#fff" />
  </div>

  <section>
    <div class="section-title">
      <h3>Total bytes (percentiles)</h3>
      <p class="number">10,318 origins</p>
    </div>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>2022 KB</strong>
        </li>
        <li>
          75th percentile:
          <strong>3558 KB</strong>
        </li>
        <li>
          90th percentile:
          <strong>5844 KB</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:22b50ff19a0b42b0b70bc6efb3abcaff" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Total bytes (breakdown)</h3>
      <p class="number">10,318 origins</p>
    </div>

    <div>
      <p>Percentage of sites that ship a range of total bytes:</p>

      <div class="graph">
        <Doughnut data={TotalBytesBreakdown} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:4a62b34455df43879d7787c1abbcffca" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Total bytes (comparison)</h3>
    </div>

    <div>
      <p>Comparison of total bytes shipped versus other site groups:</p>

      <div class="graph">
        <StackedBar data={TotalBytesComparison} />
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
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:4a62b34455df43879d7787c1abbcffca" />
          <p>10,318 origins</p>
        </div>
      </div>
    </div>
  </section>

  <div class="heading">
    <h2>State of JavaScript</h2>
    <h2>{'{ }'}</h2>
  </div>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (percentiles)</h3>
      <p class="number">10,318 origins</p>
    </div>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>929 KB</strong>
        </li>
        <li>
          75th percentile:
          <strong>1422 KB</strong>
        </li>
        <li>
          90th percentile:
          <strong>2083 KB</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:8a2edfa54ab34f12bb284fc121843a7f" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (breakdown)</h3>
      <p class="number">10,318 origins</p>
    </div>

    <div>
      <p>Percentage of sites that ship a range of JS bytes:</p>

      <div class="graph">
        <Doughnut data={JSBytesBreakdown} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:436372e9b0b548c5b44b657b63ed3180" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (comparison)</h3>
    </div>

    <div>
      <p>Comparison of JS bytes shipped versus other site groups:</p>

      <div class="graph">
        <StackedBar data={JSBytesComparison} />
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
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:436372e9b0b548c5b44b657b63ed3180" />
          <p>10,318 origins</p>
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
      <p class="number">10,318 origins</p>
    </div>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>463 KB</strong>
        </li>
        <li>
          75th percentile:
          <strong>1497 KB</strong>
        </li>
        <li>
          90th percentile:
          <strong>3613 KB</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:9512c5ac1ddc425a925a21b0d0f75698" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Image bytes (breakdown)</h3>
      <p class="number">10,318 origins</p>
    </div>

    <div>
      <p>Percentage of sites that ship a range of image bytes:</p>

      <div class="graph">
        <Doughnut data={ImgBytesBreakdown} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:c24b24a93c6c4511b503839e69c34f75" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that use optimized images</h3>
      <p class="number">10,248 origins</p>
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
        <Pie data={[80, 20]} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:248521c6ae9b43eca70774ba18efad19" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that use responsive images</h3>
      <p class="number">10,282 origins</p>
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
        <Pie data={[76, 24]} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:f740008382b14854a2550b8e0913336b" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that use next gen images</h3>
      <p class="number">10,248 origins</p>
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
        <Pie data={[51, 49]} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:3e840af678154dfe90b7bff1480680be" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that defer offscreen images</h3>
      <p class="number">10,282 origins</p>
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
        <Pie data={[80, 20]} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:d189aa7889314850940a21a07f839299" />
    </div>
  </section>

  <div class="heading">
    <h2>State of Performance</h2>
    <TimerIcon color="#fff" />
  </div>

  <section>
    <div class="section-title">
      <h3>First Contentful Paint (FCP)</h3>
      <p class="number">4,993 origins</p>
    </div>

    <p>All runs on 3G and mobile</p>

    <div class="metric-chart-container">
      <MetricChart
        fast="15"
        average="29"
        slow="56"
        fastTooltip="15% of loads for these origins have a fast (< 1 s) FCP."
        averageTooltip="29% of loads for these origins have an average (1 s ~
        2.5 s) FCP."
        slowTooltip="56% of loads for these origins have a slow (> 2.5 s) FCP." />
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:5e2ba9a3296544aca6c662c4dc4af046" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>First Input Delay (FID)</h3>
      <p class="number">3,666 origins</p>
    </div>

    <p>All runs on 3G and mobile</p>

    <div class="metric-chart-container">
      <MetricChart
        fast="77"
        average="15"
        slow="8"
        fastTooltip="77% of loads for these origins have a fast (< 50 ms) FID."
        averageTooltip="15% of loads for these origins have an average (50 ms ~
        250 ms) FID."
        slowTooltip="8% of loads for these origins have a slow (> 250 ms) FID." />
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:cd0f61c39a9c4ae78fc4330344a386c4" />
    </div>
  </section>

  <section>
    <h3>Time to Interactive (TTI)</h3>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>19.1s</strong>
        </li>
        <li>
          75th percentile:
          <strong>28.3s</strong>
        </li>
        <li>
          90th percentile:
          <strong>50.4s</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background={primaryColor}
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:94304b3a169a49c8954fc5cfb1635a75" />
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
