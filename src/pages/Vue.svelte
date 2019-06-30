<script>
  import StackedBar from "../graphs/StackedBar.svelte";
  import Doughnut from "../graphs/Doughnut.svelte";
  import Pie from "../graphs/Pie.svelte";

  import AccessibilityIcon from "../components/icons/Accessibility.svelte";
  import ImageIcon from "../components/icons/Image.svelte";
  import TimerIcon from "../components/icons/Timer.svelte";

  import FrameworkHeader from "../components/FrameworkHeader.svelte";
  import QueryIcon from "../components/QueryIcon.svelte";
  import MetricChart from "../components/MetricChart.svelte";

  // data
  import TotalBytesBreakdown from "../data/vue/all/total-bytes-breakdown";
  import JSBytesBreakdown from "../data/vue/all/js-bytes-breakdown";
  import ImgBytesBreakdown from "../data/vue/all/img-bytes-breakdown";
  import TotalBytesComparison from "../data/vue/all/total-bytes-comparison";
  import JSBytesComparison from "../data/vue/all/js-bytes-comparison";

  let primaryColor = '#00c7c4';
</script>

<style>
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
    color: #00c7c4;
    margin: 0;
    font-size: 32px;
    font-weight: bold;
    font-family: Caveat, sans-serif;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #00c7c4;
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
    color: #00c7c4;
    margin: 15px 0 0;
  }

  .metric-chart-container {
    margin-top: 60px;
  }
</style>

<div class="container">
  <FrameworkHeader number="10318" />
  <div class="heading">
    <h2>General</h2>
    <ImageIcon color="#fff" />
  </div>

  <section>
    <div class="section-title">
      <h3>Total bytes (percentiles)</h3>
      <p class="number">52,658 origins</p>
    </div>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>2639 KB</strong>
        </li>
        <li>
          75th percentile:
          <strong>4553 KB</strong>
        </li>
        <li>
          90th percentile:
          <strong>7253 KB</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:fc0338b46b344488ae68b607881f8123" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Total bytes (breakdown)</h3>
      <p class="number">52,658 origins</p>
    </div>

    <div>
      <p>Percentage of sites that ship a range of total bytes:</p>

      <div class="graph">
        <Doughnut data={TotalBytesBreakdown} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:2bf53e0a836f43c682608f465857a016" />
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
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:2bf53e0a836f43c682608f465857a016" />
          <p>52,658 origins</p>
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
      <p class="number">52,658 origins</p>
    </div>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>769 KB</strong>
        </li>
        <li>
          75th percentile:
          <strong>1164 KB</strong>
        </li>
        <li>
          90th percentile:
          <strong>1602 KB</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:08ab7aa3a1044fc384b2c4c7b8fd51ba" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>JavaScript bytes (breakdown)</h3>
      <p class="number">52,658 origins</p>
    </div>

    <div>
      <p>Percentage of sites that ship a range of JS bytes:</p>

      <div class="graph">
        <Doughnut data={JSBytesBreakdown} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:aae0f29863d64a87a7ca631dbec24943" />
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
            background="{primaryColor}"
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:32734a3bae8b487a909c70ee644d58db" />
          <p>4,541,194 origins</p>
        </div>
        <div class="icon-row-item">
          <QueryIcon
            background="{primaryColor}"
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:1a90b6f7529740f5acb26470120fe134" />
          <p>452,672 origins</p>
        </div>
        <div class="icon-row-item">
          <QueryIcon
            background="{primaryColor}"
            href="https://bigquery.cloud.google.com/savedquery/1086077897885:d4b4ea6c07a34468a7454fb9f5187c39" />
          <p>155 origins</p>
        </div>
        <div class="icon-row-item">
          <QueryIcon
          background="{primaryColor}"
          href="https://bigquery.cloud.google.com/savedquery/1086077897885:aae0f29863d64a87a7ca631dbec24943" />
          <p>52,658 origins</p>
        </div>
      </div>
    </div>
  </section>

  <div class="heading">
    <h2>State of Images</h2>
    <ImageIcon color="#fff" />
  </div>

  <section>
    <div class="section-title">
      <h3>Image bytes (percentiles)</h3>
      <p class="number">52,658 origins</p>
    </div>

    <div>
      <ul class="row">
        <li>
          Median:
          <strong>1237 KB</strong>
        </li>
        <li>
          75th percentile:
          <strong>2848 KB</strong>
        </li>
        <li>
          90th percentile:
          <strong>5395 KB</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:c4147c6b8d5448ee87aa7087ba8973f6" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Image bytes (breakdown)</h3>
      <p class="number">52,658 origins</p>
    </div>

    <div>
      <p>Percentage of sites that ship a range of image bytes:</p>

      <div class="graph">
        <Doughnut data={ImgBytesBreakdown} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:1d1c76c53dc645b385875733bf2667d1" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that use optimized images</h3>
      <p class="number">52,404 origins</p>
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
        <Pie data={[70, 30]} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:45f05334743344f98e0ab56d45873122" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that use responsive images</h3>
      <p class="number">52,528 origins</p>
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
        <Pie data={[63, 37]} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:de2911a13fb041b4a82e4ff5c8d21671" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that use next gen images</h3>
      <p class="number">52,404 origins</p>
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
        <Pie data={[30, 70]} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:5aca16a4be7e4b14b1afb0fe1f2bdb0b" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Origins that defer offscreen images</h3>
      <p class="number">52,528 origins</p>
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
        <Pie data={[54, 46]} />
      </div>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:be38e760c67c4e99ab7e43a648690b45" />
    </div>
  </section>

  <div class="heading">
    <h2>State of Performance</h2>
    <TimerIcon color="#fff" />
  </div>

  <section>
    <div class="section-title">
      <h3>First Contentful Paint (FCP)</h3>
      <p class="number">22,265 origins</p>
    </div>

    <p>All runs on 3G and mobile</p>

    <div class="metric-chart-container">
      <MetricChart
        fast="22"
        average="35"
        slow="43"
        fastTooltip="22% of loads for these origins have a fast (&#60; 1 s) FCP."
        averageTooltip="35% of loads for these origins have an average (1 s ~ 2.5 s) FCP."
        slowTooltip="43% of loads for these origins have a slow (&#62; 2.5 s) FCP." />
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:f4b043ff03f641fbb50f1f04ff7da120" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>First Input Delay (FID)</h3>
      <p class="number">14,095 origins</p>
    </div>

    <p>All runs on 3G and mobile</p>

    <div class="metric-chart-container">
      <MetricChart
        fast="79"
        average="14"
        slow="7"
        fastTooltip="79% of loads for these origins have a fast (< 50 ms) FID."
        averageTooltip="14% of loads for these origins have an average (50 ms ~ 250 ms) FID."
        slowTooltip="7% of loads for these origins have a slow (&#62; 250 ms) FID." />
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:7d748d4dc05e4f0a95e4573b6d670d13" />
    </div>
  </section>

  <section>
    <div class="section-title">
      <h3>Time to Interactive (TTI)</h3>
      <p class="number">52,658 origins</p>
    </div>
    <div>
      <ul class="row">
        <li>
          Median:
          <strong>20.6s</strong>
        </li>
        <li>
          75th percentile:
          <strong>31.6s</strong>
        </li>
        <li>
          90th percentile:
          <strong>56.6s</strong>
        </li>
      </ul>
    </div>

    <div class="icon-container">
      <QueryIcon
        background="{primaryColor}"
        href="https://bigquery.cloud.google.com/savedquery/1086077897885:247ca0aa0b374fbab6873544f685f36c" />
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
