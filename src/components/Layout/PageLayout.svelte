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
  import { link } from "svelte-routing";

  import CardLayout from "./CardLayout.svelte";
  import Dropdown from "../Dropdown.svelte";
  import ButtonRoute from "../ButtonRoute.svelte";

  import frameworkInfo from "../../utils/framework-info.json";

  export let data;
  export let framework;
  export let categories;
  export let versions;

  let selectedFrameworkVariation = framework;
</script>

<style>
  .header {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dropdown-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .dropdown-container .spacer {
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

    .dropdown-container {
      width: 100%;
    }

    .button-routes {
      justify-content: space-around;
      width: 100%;
    }
  }
</style>

<div class="header">
  <div class="dropdown-container">
    <Dropdown
      {framework}
      bind:selectedFramework={selectedFrameworkVariation}
      data={categories}
      label="Category:"
      img />
    {#if versions}
      <span class="spacer" />
      <Dropdown data={versions} label="Version:" />
    {/if}
  </div>

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
<CardLayout {data} bind:framework={selectedFrameworkVariation} />
