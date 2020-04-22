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
    border-bottom: 2px solid #6c4cd5;
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

  .container {
    max-width: 800px;
    margin: 150px auto;
  }

  section {
    padding: 50px 0;
    border-bottom: 3px solid silver;
  }

  section h2 {
    font-size: 28px;
    font-weight: 700;
    color: #6c4cd5;
    margin: 0 0 40px;
  }

  section p {
    font-size: 18px;
    line-height: 1.7;
  }
</style>

<div class="container">
  <!-- Header -->
  <div class="header">
    <div class="container">
      <a href="/" use:link class="logo">
        <Logo width="80" height="80" />
      </a>
    </div>
  </div>

  <section>
    <h2>What is this?</h2>

    <p>
      An app that displays results from many queries using
      <a href="https://httparchive.org/">HTTPArchive</a>
      to find out how well websites that use popular JavaScript frameworks and
      libraries perform.
    </p>
  </section>

  <section>
    <h2>What dataset is all this data from?</h2>

    <p>
      Every query on the site uses the
      <strong>2019_05_01_mobile</strong>
      dataset. Every query used in this site are from this mobile dataset -
      there are none included here for desktop.
    </p>
  </section>

  <section>
    <h2>How are JavaScript frameworks/libraries detected on a site?</h2>

    <p>
      With the
      <a
        href="https://github.com/johnmichel/Library-Detector-for-Chrome/blob/master/library/libraries.js">
        Library-Detector-for-Chrome
      </a>
      extension. This extension is integrated into Lighthouse which means it can
      be queried directly through any HTTPArchive run.
    </p>
  </section>

  <section>
    <h2>What does this data tell me?</h2>

    <p>
      This is not an exercise to compare the performance of frameworks or sites
      directly against each other.
      <strong>Correlation does not mean causation.</strong>
    </p>

    <p>
      However, this can give us some useful insight on what a lot of sites that
      use a particular tool might be doing well or lacking. How many React sites
      are compressing their resources? How many Angular sites also use jQuery?
      Are many Vue sites optimizing their images? Etc, etc...
    </p>
  </section>

  <section>
    <h2>What other frameworks will this app eventually include?</h2>

    <p>Svelte, Preact and Ember to name a few.</p>
  </section>

  <section>
    <h2>What's next for this app?</h2>

    <p>
      Writing queries for each framework and their sub-conditions (React + Next
      for example) can be quite tedious. The next version of this app will
      instead leverage the
      <a href="https://cloud.google.com/bigquery/docs/reference/rest/">
        BigQuery API
      </a>
      to allow anybody to select a framework/library and then select a dataset
      from HTTP Archive to automatically run all the queries for their specific
      choice.
    </p>
  </section>

  <section>
    <h2>Some query results look incorrect. Who do I reach out to?</h2>

    <p>
      Reach out to Houssein (
      <strong>hdjirdeh</strong>
      )!
    </p>
  </section>

  <section>
    <h2>
      I would love to see a new query that does " ... ". Who do I reach out to?
    </h2>

    <p>
      Reach out to Houssein (
      <strong>hdjirdeh</strong>
      )! He'll work with you to try and include that query for all the
      frameworks in this app.
    </p>
  </section>
</div>
