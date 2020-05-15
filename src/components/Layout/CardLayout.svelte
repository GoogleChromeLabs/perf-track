<script>
  import Card from "../Card.svelte";
  import Chart from "../Chart.svelte";

  import UsageIcon from "../icons/Usage.svelte";
  import LightningIcon from "../icons/Lightning.svelte";
  import CompressIcon from "../icons/Compress.svelte";
  import ImageIcon from "../icons/Image.svelte";
  import WeightIcon from "../icons/Weight.svelte";
  import GaugeIcon from "../icons/Gauge.svelte";

  export let data;
  export let category;
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
    align-items: center;
    height: calc(100% - 7rem);
    justify-content: center;
  }

  .number-container p {
    font-size: 7rem;
    font-weight: 600;
    margin: 0;
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
      <p>{data[category.text].totalNumOrigins.value.toLocaleString()}</p>
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
      data={[data[category.text].compressedRequests.gzipCompressedPercent, data[category.text].compressedRequests.brotliCompressedPercent, 100 - data[category.text].compressedRequests.gzipCompressedPercent + data[category.text].compressedRequests.brotliCompressedPercent]}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
  <Card heading="Total Bytes" style="grid-column: 1; grid-row: 3;">
    <span class="icon" slot="icon">
      <WeightIcon />
    </span>
    <Chart
      graph="doughnut"
      data={data[category.text].totalBytesBreakdown.data}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
  <Card heading="JavaScript Bytes" style="grid-column: 2; grid-row: 3;">
    <span class="icon" slot="icon">{'{ }'}</span>
    <Chart
      graph="doughnut"
      data={data[category.text].totalBytesBreakdown.data}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
  <Card heading="Image Bytes" style="grid-column: 3; grid-row: 3;">
    <span class="icon" slot="icon">
      <ImageIcon />
    </span>
    <Chart
      graph="doughnut"
      data={data[category.text].totalBytesBreakdown.data}
      containerHeight="calc(100% - 2rem - 2rem)" />
  </Card>
</div>
