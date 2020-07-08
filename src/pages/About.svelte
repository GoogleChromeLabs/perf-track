<!-- Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in
compliance with the License. You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is
distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions and limitations under the
License. -->

<script>
  import { onMount } from "svelte";
  
  onMount(() => {
    window.ga =
      window.ga ||
      function() {
        (ga.q = ga.q || []).push(arguments);
      };

    window.ga("set", "page", window.location.pathname);
    window.ga("send", "pageview");
  });
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

  .back-link a {
    text-decoration: none; 
    color: #000;
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
    font-size: 1.9rem;
    line-height: 1.7;
  }

  section ul,
  ol {
    margin: 3rem 3rem 0;
  }

  table {
    width: 100%;
    margin: 3rem 0;
    border: 1px solid black;
    border-collapse: collapse;
    font-size: 1.6rem;
  }

  tr {
    text-align: left;
  }

  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 1rem;
  }

  td:first-child {
    font-weight: 600;
  }

  td:nth-child(2) {
    text-align: center;
    padding: 1rem 3rem;
  }

  aside {
    background: #fff9e6;
    margin: 4rem 0 0;
    padding: 2rem 4rem;
    font-size: 1.8rem;
    border-radius: 2rem;
  }

  aside p {
    margin: 0;
  }

  footer {
    padding: 50px 0;
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
  <a href="javascript:history.back()">&lt; Back</a>
</p>
<div class="container">
  <div class="title">
    <h1>Perf Track</h1>
    <img src="/images/perf-track-logo.png" alt="Flame logo" />
  </div>
  <section>
    <p>
      <b>Perf Track</b>
      is a project that aims to track and measure the performance of sites that
      use popular JavaScript frameworks and libraries. It is not an exercise to
      compare the performance of frameworks against each other.
    </p>
    <p>
      <strong>Correlation does not imply causation.</strong>
    </p>
  </section>

  <section>
    <h2>Frameworks and performance</h2>

    <p>
      Perf Track aggregates results for certain frameworks. Conclusions cannot
      be drawn on the performance of a particular framework just by using this
      data.
    </p>

    <p>
      There are many variables that contribute to final performance
      characteristics of each site, of which a choice of a framework or library
      is one. Beyond the core framework, the site developers add their own code
      and implementation, bring in additional code dependencies and libraries,
      integrate 1P + 3P services, and so on. A poorly implemented framework
      <b>
        <i>may</i>
      </b>
      set a bad baseline that makes it hard or impossible to build a fast site,
      but a well optimized framework does not guarantee a fast site. That is,
      unless it is strongly opinionated and provides strong developer guard
      rails that warn or actively prevent the developer from falling off the
      fast path.
    </p>

    <p>
      In other words, a statement like "50% of sites that use Framework X have
      slow paint times, so Framework X must be a bad choice!" is false and
      misleading. If many sites that use Framework X have notably better
      performance - that may be attributable to better DX that helps developers
      stay on track, but it may also be because developers that choose Framework
      X pay closer attention to performance.
    </p>

    <p>
      Perf Track was built to provide trends and insight to both framework
      authors and developers. If common success or failure patterns can be found
      across many sites, we can work together to improve the underlying
      framework and tooling that sites use to make the web better.
    </p>
  </section>

  <section>
    <h2>About the data</h2>

    <p>All data on this site is sourced from:</p>

    <ul>
      <li>
        <a href="https://httparchive.org/">HTTP Archive</a>
        : a project that crawls, analyzes, and stores data of millions of URLs
        every month
      </li>
      <li>
        <a
          href="https://developers.google.com/web/tools/chrome-user-experience-report">
          Chrome UX Report
        </a>
        : a public dataset that aggregates user experiences across millions of
        websites actively visited by Chrome users
      </li>
    </ul>

    <p>In addition, the following open-source tools were also used:</p>

    <ul>
      <li>
        <a href="https://www.webpagetest.org/">WebPageTest</a>
      </li>
      <li>
        <a href="https://developers.google.com/web/tools/lighthouse/">
          Lighthouse
        </a>
      </li>
    </ul>

    <p>Some important points regarding the data used for Perf Track:</p>

    <ul>
      <li>
        HTTP Archive and Chrome UX Report both update with new data monthly, and
        all the results on this site were obtained from the
        <b>March and April</b> crawls (2020).
      </li>
      <li>
        There are
        <b>5,789,440</b>
        origins in the March dataset, and <b>5,349,874</b> origins in April. The number of origins measured against
        for each query on this site is included.
      </li>
      <li>
        HTTP Archive sources all its URLs from the
        <a
          href="https://developers.google.com/web/tools/chrome-user-experience-report">
          Chrome UX Report
        </a>
        . Only the mobile subset of data from HTTP Archive was queried for this
        site.
      </li>
      <li>
        Due to resource limitations, only home page URLs are included in HTTP
        Archive. Many sites that use a JavaScript framework and require a log-in
        can have completely different home page and logged-in experiences, which
        is important to note (for example: facebook.com).
      </li>
      <li>
        For the “Web Vitals” section in Perf Track, URLs from HTTP Archive are
        joined with origins from Chrome UX Report. If a URL is the home page of
        an origin (for example: https://www.example.com/ for the origin
        https://www.example.com), the aggregated results for the entire origin
        are included even if the framework is only used on the home page.
      </li>
    </ul>

    <aside>
      <p>
        Complete coverage of
        <b>
          <i>all</i>
        </b>
        sites that use frameworks is not a goal of Perf Track. The data only
        contains information for 5.3~5.7M home pages and nothing more.
      </p>
    </aside>
  </section>

  <section>
    <h2>Detecting frameworks</h2>

    <p>
      Analyzing framework usage and performance at scale is possible with the
      help of third-party projects that have been integrated into the testing
      tools used by HTTP Archive.
    </p>
    <ul>
      <li>
        WebPageTest added support for
        <a href="https://www.wappalyzer.com/">Wappalyzer</a>
        in March 2018, and HTTP Archive runs the latest version of Wappalyzer
        for all web pages.
      </li>
      <li>
        HTTP Archive runs the latest version of Lighthouse for all of its mobile
        web pages, which also detects certain JavaScript technologies through a
        separate library (
        <a href="https://github.com/johnmichel/Library-Detector-for-Chrome">
          Library Detector For Chrome
        </a>
        ).
      </li>
    </ul>

    <p>
      For most of the frameworks in Perf Track, Wappalyzer is used to filter for
      all URLs that use it on their site. Like any detection tool however, there
      are limitations, and some of the frameworks analyzed are either not yet
      detected by Wappalyzer or need to be improved. Until valid Wappalyzer
      detections are in place for all the frameworks included in Perf Track,
      Library Detector for Chrome is used as a suitable alternative when needed.
    </p>

    <p>
      The full list of frameworks in Perf Track and their detection methods are
      as follows:
    </p>

    <table>
      <tbody>
        <tr>
          <th />
          <th>Detector used</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td>Angular</td>
          <td>Wappalyzer</td>
          <td />
        </tr>
        <tr>
          <td>React</td>
          <td>Library Detector</td>
          <td>
            Wappalyzer detection has false positives (
            <a href="https://github.com/AliasIO/wappalyzer/pull/3047">fixed</a>
            but will show in a future crawl) and false negatives (
            <a href="https://github.com/AliasIO/wappalyzer/issues/2450">
              issue
            </a>
            ).
          </td>
        </tr>
        <tr>
          <td>Next.js</td>
          <td>Wappalyzer</td>
          <td />
        </tr>
        <tr>
          <td>Gatsby</td>
          <td>Wappalyzer</td>
          <td />
        </tr>
        <tr>
          <td>Create React App</td>
          <td>Library Detector</td>
          <td>Wappalyzer does not have any detections for CRA.</td>
        </tr>
        <tr>
          <td>Vue</td>
          <td>Wappalyzer</td>
          <td />
        </tr>
        <tr>
          <td>Nuxt.js</td>
          <td>Wappalyzer</td>
          <td />
        </tr>
        <tr>
          <td>Polymer</td>
          <td>Wappalyzer</td>
          <td />
        </tr>
        <tr>
          <td>Preact</td>
          <td>Library Detector</td>
          <td>
            Wappalyzer detection has false negatives (
            <a href="https://github.com/AliasIO/wappalyzer/issues/2450">
              issue
            </a>
            ).
          </td>
        </tr>
        <tr>
          <td>Svelte</td>
          <td>Wappalyzer</td>
          <td />
        </tr>
        <tr>
          <td>Sapper</td>
          <td>Wappalyzer</td>
          <td />
        </tr>
      </tbody>
    </table>

    <p>
      Until valid detections are in place for React, Create React App and
      Preact, Library Detector for Chrome is being used as an alternative.
    </p>

    <aside>
      <p>
        If you have ideas or suggestions to improve any of the detections,
        please contribute directly to Wappalyzer or open an issue to discuss.
        All the data in Perf Track relies on how accurate these framework
        detections are!
      </p>
    </aside>
  </section>

  <section>
    <h2>Understanding the results</h2>

    <p>
      Perf Track displays two types of aggregated results for every framework:
    </p>

    <ol>
      <li>
        Page-level information through WebPageTest (such as the total, image,
        and JavaScript bytes delivered). These results are
        <b>page-specific</b>
        and do not directly tell us how well a web page performs, but still
        provide useful insight.
      </li>
      <li>
        Real-world user experiences in terms of performance metrics through
        Chrome UX Report (such as First Contentful Paint, Largest Contentful
        Paint, etc...). These are
        <b>origin-aggregated</b>
        , which means that values are grouped by the entire origin and not just
        the home page.
      </li>
    </ol>

    <aside>
      <p>
        As mentioned earlier, the performance of the entire origin in Chrome UX
        Report is attributed to the framework that is detected only on the home
        page from HTTP Archive. Frameworks are only being detected on home
        pages, so if there are sub pages that are not using the same framework,
        they are still included in the results.
      </p>
    </aside>

    <p>
      All the results on this site are queryable on BigQuery and can be
      reproduced. Take a look at the full
      <a
        href="https://bigquery.cloud.google.com/savedquery/832467901690:827388adbbdf42e38830a9379b6a3152">
        list of queries
      </a>
      to run it for yourself, but keep in mind that some of these queries are
      large (> 500GB) and can be
      <a href="https://cloud.google.com/bigquery/pricing#on_demand_pricing">
        expensive
      </a>
      to run.
    </p>
  </section>

  <section>
    <h2>Contributing</h2>

    <p>
      We would love all kinds of contributions! Some high priority items at the
      moment:
    </p>

    <ul>
      <li>
        Using BigQuery's API to fetch previously queried results instead of
        locally storing them in JSON files
      </li>
      <li>Improving how Wappalyzer detects frameworks and libraries</li>
      <li>Including more data that can be useful</li>
    </ul>

    <p>
      Please take a look at
      <a
        href="https://github.com/GoogleChromeLabs/perf-track/blob/master/CONTRIBUTING.md">
        CONTRIBUTING.md
      </a>
      and the
      <a href="https://github.com/GoogleChromeLabs/perf-track/issues">
        list of issues
      </a>
      to find out ways to help.
    </p>
  </section>

  <footer>With thanks to <a href="https://mobile.twitter.com/igrigorik">Ilya Grigorik</a> and <a href="https://mobile.twitter.com/rick_viscomi">Rick Viscomi</a> for their reviews.</footer>
</div>
