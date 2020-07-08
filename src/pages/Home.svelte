<!-- Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. -->

<script>
  import { onMount } from 'svelte';

  import ButtonRoute from "../components/ButtonRoute.svelte";
  import Footer from "../components/Footer.svelte";

  import frameworkInfo from "../utils/framework-info.json";

  onMount(() => {
    window.ga =
      window.ga ||
      function() {
        (ga.q = ga.q || []).push(arguments);
      };

		window.ga('set', 'page', window.location.pathname);
    window.ga('send', 'pageview');
	});
</script>

<style>
  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .page-container {
    padding: 4rem 5rem 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
  }

  header {
    display: flex;
    padding-bottom: 4rem;
  }

  h1 {
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  h1 img {
    max-height: 55px;
    margin-left: 2.5rem;
  }

  .frameworks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5rem;
  }

  .divider {
    border: 2px solid #dddddd;
  }

  @media (max-width: 1240px) {
    header {
      flex-direction: column;
    }
    
    h1 {
      justify-content: center;
    }

    .title {
      text-align: center;
    }

    .page-container {
      padding: 0;
    }

    .frameworks {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center; 
      grid-row-gap: 3rem;
      grid-column-gap: 2rem;
    }

    .divider {
      width: 600px;
      margin: 0 auto;
    }
  }

  @media (max-width: 715px) {
    header {
      padding: 0 2rem 2rem;
    }

    h1 {
      margin-bottom: 1rem;
    }

    h1 img {
      max-height: 35px;
    }

    h2 {
      font-size: 1.7rem;
    }

    .frameworks {
      grid-template-columns: repeat(2, 1fr);
      padding-top: 2rem;
    }

    .divider {
      width: 300px;
      margin: 1rem auto;
    }
  }
</style>

<div class="page-container">
  <div class="container">
    <div class="row">
      <header>
        <div class="title">
          <h1>
            Perf Track
            <img src="/images/perf-track-logo.png" alt="Flame logo" />
          </h1>
          <h2>
            Tracking framework performance at scale
          </h2>
        </div>
      </header>
      <hr class ="divider"/>
      <div class="frameworks">
        {#each Object.keys(frameworkInfo) as framework}
          <ButtonRoute
            name={frameworkInfo[framework].name}
            route={frameworkInfo[framework].route}
            color={frameworkInfo[framework].color}
            img={frameworkInfo[framework].imgSrc} />
        {/each}
      </div>
    </div>
  </div>
  <Footer hideDescription />
</div>
