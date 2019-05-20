<script>
  import StackedBar from "../graphs/StackedBar.svelte"
  import Doughnut from "../graphs/Doughnut.svelte"
  import Pie from "../graphs/Pie.svelte"

  import AccessibilityIcon from "../components/icons/Accessibility.svelte";
  import ImageIcon from "../components/icons/Image.svelte";
  import TimerIcon from "../components/icons/Timer.svelte";
</script>

<style>
  .container {
    max-width: 800px;
    margin: 150px auto;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #FF6384;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 75px;
    margin: 0;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }

  .number {
    color: #FF6384;
    margin: 0;
    font-size: 45px;
    font-weight: bold;
    font-family: Caveat, sans-serif
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
    padding: 30px;
  }

  section h3 {
    font-size: 24px;
    font-weight: 600;
  }

  section p {
    font-size: 18px;
  }

  section .graph {
    padding: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="container">
  <div class="title">
    <h1>Angular</h1>
    <p class="number">4265 origins</p>
  </div>

  <div class="heading">
    <h2>State of JavaScript</h2>
    <h2>{'{ }'}</h2>
  </div>

  <section>
    <h3>Total Bytes Shipped</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <StackedBar />
      </div>
    </div>
  </section>

  <section>
    <h3>JS Bytes Shipped</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <StackedBar />
      </div>
    </div>
  </section>

  <section>
    <h3>React + another framework</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <Doughnut />
      </div>
    </div>
  </section>

  <section>
    <h3>Total Bytes Shipped (React sites that do not use jQuery)</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <StackedBar />
      </div>
    </div>
  </section>

  <section>
    <h3>JS Bytes Shipped (React sites that do not use jQuery)</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <StackedBar />
      </div>
    </div>
  </section>

  <section>
    <h3>Total Bytes Shipped (React sites no other framework)</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <StackedBar />
      </div>
    </div>
  </section>

  <section>
    <h3>JS Bytes Shipped (React sites no other framework)</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <StackedBar />
      </div>
    </div>
  </section>

  <div class="heading">
    <h2>State of Images</h2>
    <ImageIcon color="#fff" />
  </div>

  <section>
    <h3>Image bytes</h3>

    <div class="details">
      <ol>
        <li>Median: 723 KB</li>
        <li>75th percentile: 1813 KB</li>
        <li>90th percentile: 3806 KB</li>
      </ol>
  </section>

  <section>
    <h3>Origins that use optimized images</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <Pie />
      </div>
    </div>
  </section>

  <section>
    <h3>Origins that use responsive images</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <Pie />
      </div>
    </div>
  </section>

  <section>
    <h3>Origins that use next gen images</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <Pie />
      </div>
    </div>
  </section>

  <section>
    <h3>Origins that defer offscreen images</h3>

    <div class="details">
      <p>
        In order to compare how well React/Next sites perform with regard to other domains, here’s a chart that summarizes the total bytes (compressed & minified) shipped for:
      </p>

      <div class="graph">
        <Pie />
      </div>
    </div>
  </section>

  <div class="heading">
    <h2>State of Accessibility</h2>
    <AccessibilityIcon color="#fff" />
  </div>

  <div class="heading">
    <h2>State of Performance</h2>
    <TimerIcon color="#fff" />
  </div>
</div>