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
  import { link } from "svelte-routing";

  import CardLayout from "./CardLayout.svelte";
  import Dropdown from "../Dropdown.svelte";
  import ButtonRoute from "../ButtonRoute.svelte";

  import frameworkInfo from "../../utils/framework-info.json";

  export let data;
  export let route;
  export let framework;
  export let categories;
  
  let datasets = ['November 1st - Mobile'];
  let selectedDataset;

  while (!selectedDataset || !data[selectedDataset][framework]) {
    if (!selectedDataset) {
      selectedDataset = datasets[datasets.length - 1]; // Default to the latest dataset
    } else if (!data[selectedDataset][framework]) {
      selectedDataset = datasets[datasets.indexOf(selectedDataset) - 1]; // Default to the latest available dataset
    }
  }

  let selectedFrameworkVariation = framework;

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
  .header {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  form .spacer {
    margin-top: 2rem;
  }

  .button-routes {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1240px) {
    .header {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-around;
      position: fixed;
      width: 100vw;
      left: 0;
      top: 0;
      height: 8rem;
      background: #fff;
      z-index: 1;
      padding: 1rem 2rem;
      border-bottom: 4px solid #888c8d;
    }

    .button-routes {
      position: fixed;
      background: #fff;
      bottom: 0;
      left: 0;
      height: 8rem;
      display: flex;
      align-items: center;
      border-top: 4px solid #f1f1f1;
    }

    form {
      width: 100%;
    }

    select {
      margin: 0;
      min-width: 38rem;
    }

    .button-routes {
      justify-content: space-around;
      width: 100%;
    }
  }

  label {
		font-weight: 600;
		margin-right: 1rem;
	}

  .dropdown-container {
    display: flex;
		align-items: center;
    justify-content: space-between;
		max-width: 47rem;
  }

  select {
    min-width: 38rem;
  }
  
  @media (max-width: 715px) {
		label {
			display: none;
		}

		select {
			min-width: auto;
			width: 75%;
		}

		form {
			width: 90%;
		}

    form .spacer {
      margin-top: 1rem;
    }
  }
</style>

<div class="header">
  <form>
    <Dropdown
      {framework}
      bind:selectedFramework={selectedFrameworkVariation}
      data={categories}
      id="category-select"
      label="Category:"
      img />
    <span class="spacer" />
    <div class="dropdown-container">
      <label for="dataset-select">Dataset:</label>
      <select id="dataset-select" bind:value={selectedDataset}>
        {#each datasets as dataset}
          <option value={dataset}>
            {dataset}
          </option>
        {/each}
      </select>
    </div>
  </form>

  <div class="button-routes">
    {#each Object.keys(frameworkInfo) as framework}
      <ButtonRoute
        mini
        name={frameworkInfo[framework].name}
        route={frameworkInfo[framework].route}
        color={frameworkInfo[framework].color}
        img={frameworkInfo[framework].imgSrc} />
    {/each}
  </div>
</div>
<CardLayout data={data[selectedDataset][framework]} topLevelFramework={framework} bind:framework={selectedFrameworkVariation} />
