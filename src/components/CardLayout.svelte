<script>  
  import Card from "./Card.svelte";
  import UsageIcon from "../components/icons/Usage.svelte";
</script>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    height: 100%;
  }
</style>

<div>
  <Card heading="Number of URLs" style="grid-column: 1;  grid-row: 1 / 4;">
    <span slot="icon">
      <UsageIcon/>
    </span>
  </Card>
  <Card heading="Web Vitals" style="grid-column: 2 / 5;  grid-row: 1 / 4;">
    <span slot="icon">
      <UsageIcon/>
    </span>
  </Card>
  <Card heading="Compressed requests" style="grid-column: 1;  grid-row: 4 / 6;">
    <span slot="icon">
      <UsageIcon/>
    </span>
  </Card>
  <Card heading="Number of URLs 3" style="grid-column: 2 / 5;  grid-row: 4 / 6;">
    <span slot="icon">
      <UsageIcon/>
    </span>
  </Card>
  <Card heading="Total Bytes" style="grid-column: 1; grid-row: 6 / 8;">
    <span slot="icon">
      <UsageIcon/>
    </span>
  </Card>
  <Card heading="JavaScript Bytes" style="grid-column: 2 / 3; grid-row: 6 / 8;">
    <span slot="icon">
      <UsageIcon/>
    </span>
  </Card>
  <Card heading="Image Bytes" style="grid-column: 3 / 5; grid-row: 6 / 8;">
    <span slot="icon">
      <UsageIcon/>
    </span>
  </Card>
</div>