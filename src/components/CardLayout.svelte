<script>  
  import Card from "./Card.svelte";

  import UsageIcon from "../components/icons/Usage.svelte";
  import LightningIcon from "../components/icons/Lightning.svelte";
  import CompressIcon from "../components/icons/Compress.svelte";
  import ImageIcon from "../components/icons/Image.svelte";
  import WeightIcon from "../components/icons/Weight.svelte";
  import GaugeIcon from "../components/icons/Gauge.svelte";
</script>

<style>
  .container {
    display: grid;
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
    margin: 2rem 0 4rem;
  }

  .number-container p {
    font-size: 6rem;
    font-weight: 600;
    margin: 0;
  }

  .number-container-list ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }

  .number-container-list li {
    display: flex;
    justify-content: space-between;
  }

  .number-container-list li span {
    font-weight: 600;
  }
</style>

<div class="container">
  <Card heading="Number of URLs" centerHeading style="grid-column: 1;  grid-row: 1 / 4;">
    <span class="icon" slot="icon">
      <UsageIcon/>
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
  <Card heading="Core Web Vitals" style="grid-column: 2 / 5;  grid-row: 1 / 4;">
    <span class="icon" slot="icon">
      <LightningIcon/>
    </span>
  </Card>
  <Card heading="Compressed requests" style="grid-column: 1;  grid-row: 4 / 6;">
    <span class="icon" slot="icon">
      <CompressIcon/>
    </span>
  </Card>
  <Card heading="Other Web Vitals" style="grid-column: 2 / 5;  grid-row: 4 / 6;">
    <span class="icon" slot="icon">
      <GaugeIcon/>
    </span>
  </Card>
  <Card heading="Total Bytes" style="grid-column: 1; grid-row: 6 / 8;">
    <span class="icon" slot="icon">
      <WeightIcon/>
    </span>
  </Card>
  <Card heading="JavaScript Bytes" style="grid-column: 2 / 3; grid-row: 6 / 8;">
    <span class="icon" slot="icon">
      {"{ }"}
    </span>
  </Card>
  <Card heading="Image Bytes" style="grid-column: 3 / 5; grid-row: 6 / 8;">
    <span class="icon" slot="icon">
      <ImageIcon/>
    </span>
  </Card>
</div>