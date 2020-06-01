<!-- Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in
compliance with the License. You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is
distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions and limitations under the
License. -->

<script>
  import { Link } from "svelte-routing";

  import StackedBar from "../graphs/StackedBar.svelte";
  import Doughnut from "../graphs/Doughnut.svelte";
  import Pie from "../graphs/Pie.svelte";

  import Logo from "../components/icons/Logo.svelte";
  import AccessibilityIcon from "../components/icons/Accessibility.svelte";
  import ImageIcon from "../components/icons/Image.svelte";
  import TimerIcon from "../components/icons/Timer.svelte";

  import FrameworkHeader from "../components/FrameworkHeader.svelte";
  import MetricChart from "../components/MetricChart.svelte";

  import { category, data } from "../page-data/angular.js";

  let primaryColor = "#ff6384";
  let selectedOption = category[0];

  const getProps = () => ({ "style": 'text-decoration: none; color: #000' });
</script>

<style>
  h1 {
    font-weight: 600;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .back-link {
    position: fixed;
    top: 5rem;
    left: 5rem;
    font-weight: 600;
    font-size: 2rem;
    cursor: pointer;
  }

  section {
    padding: 50px 0;
    border-bottom: 3px solid silver;
  }

  section p {
    margin: 4rem 0 0;
  }

  section h2 {
    font-size: 28px;
    font-weight: 700;
    display: inline-block;
  }

  .title {
    display: flex;
    align-items: center;
    padding-top: 20rem;
  }

  .title img {
    max-height: 60px;
    margin-left: 2rem;
  }

  section {
    font-size: 18px;
    line-height: 1.7;
  }

  section ul, ol {
    margin: 3rem 3rem 0;
  }

  @media (max-width: 715px) {
    .container {
      margin: 0 3rem;
    }

    .back-link {
      position: absolute;
      top: 3rem;
      left: 3rem;
    }

    .title {
      padding-top: 14rem;
    }
  }
</style>

<p class="back-link">
  <Link getProps="{getProps}" to="angular">
  &lt; Back
  </Link>
</p>
<div class="container">
  <div class="title">
    <h1>Perf Track</h1>
    <img src="/images/perf-track-logo.png" alt="Flame logo" />
  </div>
  <section>
    <p>
      <strong>Perf Track</strong> is a project that aims to track and measure the performance of sites that use popular JavaScript frameworks and libraries. It is not an exercise to compare the performance of frameworks against each other.
    </p>
    <p><strong>Correlation does not imply causation.</strong></p>
  </section>

  <section>
    <h2>Frameworks and performance</h2>

    <p>
      Perf Track aggregates results for certain frameworks. Conclusions cannot be drawn on the performance of a particular framework just by using this data.
    </p>

    <p>
      In other words, a statement like "50% of sites that use Framework X have slow paint times, so Framework X must be a bad choice!" is false and misleading. There are too many variables that need to be considered in order to properly gauge how well a framework performs, and Perf Track only scratches the surface.
    </p>

    <p>
      However, Perf Track was built to provide useful insight to both framework authors and developers. If common patterns can be found, we can work together to improve the underlying framework that sites use to make the web better.
    </p>
  </section>

  <section>
    <h2>About the data</h2>

    <p>
      All data on this site is sourced from <a href="https://httparchive.org/">HTTP Archive</a>, a project that crawls, analyzes, and stores data of millions of URLs every month using a number of testing tools. This includes:
    </p>

    <ul>
      <li><a href="https://www.webpagetest.org/">WebPageTest</a></li>
      <li><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a></li>
      <li><a href="https://developers.google.com/web/tools/chrome-user-experience-report">Chrome UX Report</a></li>
    </ul>

    <p>
      Some important points regarding the data used for Perf Track: 
    </p>

    <ul>
      <li>HTTP Archive updates with new data monthly, but all the results on this site were obtained from the <strong>April 2020</strong> crawl.</li>
      <li>There are <strong>5,789,440</strong> URLs in the entire dataset, and every query used for Perf Track only analyzes a subset of this data. The number of URLs measured against for each query on this site is included.</li>
      <li>HTTP Archive sources all its URLs from the <a href="https://developers.google.com/web/tools/chrome-user-experience-report">Chrome UX Report</a>. Only the mobile subset of data from HTTP Archive was queried for this site.</li>
      <li>Due to resource limitations, only home page URLs are included in the Chrome UX Report. Many sites that use a JavaScript framework and require a log-in can have completely different home page and logged-in experiences, which is important to note (for example: facebook.com).</li>
    </ul>
  </section>

  <section>
    <h2>Detecting frameworks</h2>

    <p>
     Analyzing framework usage and performance at scale is possible with the help of third-party projects that have been integrated into the testing tools used by HTTP Archive.
    </p>
    <ul>
      <li>WebPageTest added support for <a href="https://www.wappalyzer.com/">Wappalyzer</a> in March 2018, and HTTP Archive runs the latest version of Wappalyzer for all web pages.</li>
      <li> HTTP Archive runs the latest version of Lighthouse for all of its mobile web pages, which also detects certain JavaScript technologies through a separate library (<a href="https://github.com/johnmichel/Library-Detector-for-Chrome">Library Detector For Chrome</a>).</li>
    </ul>

    <p>For most of the frameworks in Perf Track, Wappalyzer is used to filter for all URLs that use it on their site. Like any detection tool however, there are limitations, and some of the frameworks analyzed are either not yet detected by Wappalyzer or need to be improved. Until valid detections are in place for those (I'm working on it), Library Detector for Chrome has been used as a suitable alternative.</p>
  </section>

  <section>
    <h2>Understanding the results</h2>

    <p>
      Perf Track displays two types of aggregated results for every framework:
    </p>

    <ol>
      <li>Page-level information through WebPageTest (such as the total, image, and JavaScript bytes delivered). These results are <strong>page-specific</strong> and do not directly tell us how well a web page performs, but still provide useful insight.</li>
      <li>Real-world user experiences in terms of performance metrics through Chrome UX Report (such as First Contentful Paint, Largest Contentful Paint, etc...). These are <strong>origin-specific</strong>, which means that values are grouped by the entire origin and not just the home page.</li>
    </ol>

    <p>
      All the results on this site are queryable on BigQuery and can be reproduced. Take a look at the full <a href="https://bigquery.cloud.google.com/savedquery/832467901690:827388adbbdf42e38830a9379b6a3152">list of queries</a> to run it for yourself, but keep in mind that some of these queries are large (> 500GB) and can be <a href="https://cloud.google.com/bigquery/pricing#on_demand_pricing">expensive</a> to run.
    </p>
  </section>

  <section>
    <h2>Contributing</h2>

    <p>
      We would love all kinds of contributions! Some high priority items at the moment:
    </p>

    <ul>
      <li>Using BigQuery's API to fetch previously queried results instead of locally storing them in JSON files</li>
      <li>Improving how Wappalyzer detects frameworks and libraries</li>
      <li>Including more data that can be useful</li>
    </ul>

    <p>
      Please take a look at <a href="https://github.com/GoogleChromeLabs/perf-track/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a> and the <a href="https://github.com/GoogleChromeLabs/perf-track/issues">list of issues</a> to find out ways to help.
    </p>
  </section>
</div>
