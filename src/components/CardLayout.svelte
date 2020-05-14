<script>
  import Card from "./Card.svelte";

  import UsageIcon from "../components/icons/Usage.svelte";
  import LightningIcon from "../components/icons/Lightning.svelte";
  import CompressIcon from "../components/icons/Compress.svelte";
  import ImageIcon from "../components/icons/Image.svelte";
  import WeightIcon from "../components/icons/Weight.svelte";
  import GaugeIcon from "../components/icons/Gauge.svelte";

  import Chart from "../components/Chart.svelte";

  import { data } from "../page-data/angular.js";
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
    justify-content: center;
    margin: 1rem 0;
  }

  .number-container p {
    font-size: 5rem;
    font-weight: 600;
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  li span {
    font-weight: 600;
  }
</style>

<div class="container">
  <Card
    heading="Number of URLs"
    centerHeading
    style="grid-column: 1; grid-row: 1;">
    <span class="icon" slot="icon">
      <UsageIcon />
    </span>
    <div class="number-container">
      <p>140,000</p>
    </div>

    <div class="number-container-list">
      <ul>
        <li>
          Percentage of all URLs
          <span>20%</span>
        </li>
      </ul>
    </div>
  </Card>
  <Card heading="Web Vitals" style="grid-column: 2 / 4; grid-row: 1 / 3;">
    <span class="icon" slot="icon">
      <LightningIcon />
    </span>
  </Card>
  <Card heading="Compressed requests" style="grid-column: 1; grid-row: 2;">
    <span class="icon" slot="icon">
      <CompressIcon />
    </span>
    <Chart
      graph="pie"
      colors={['#fbbc04', '#34a853', '#e74c3c']}
      labels={['Gzip compressed', 'Brotli compressed', 'Not compressed with Gzip or Brotli']}
      data={[data['All Angular sites'].compressedRequests.gzipCompressedPercent, data['All Angular sites'].compressedRequests.brotliCompressedPercent, 100 - data['All Angular sites'].compressedRequests.gzipCompressedPercent + data['All Angular sites'].compressedRequests.brotliCompressedPercent]}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
  <Card heading="Total Bytes" style="grid-column: 1; grid-row: 3;">
    <span class="icon" slot="icon">
      <WeightIcon />
    </span>
    <Chart
      graph="doughnut"
      data={data['All Angular sites'].totalBytesBreakdown.data}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
  <Card heading="JavaScript Bytes" style="grid-column: 2; grid-row: 3;">
    <span class="icon" slot="icon">{'{ }'}</span>
    <Chart
      graph="doughnut"
      data={data['All Angular sites'].totalBytesBreakdown.data}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
  <Card heading="Image Bytes" style="grid-column: 3; grid-row: 3;">
    <span class="icon" slot="icon">
      <ImageIcon />
    </span>
    <Chart
      graph="doughnut"
      data={data['All Angular sites'].totalBytesBreakdown.data}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
</div>
