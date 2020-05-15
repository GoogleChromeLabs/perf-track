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

  export let data;
  export let categories;
  export let versions;
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
</style>

<div class="header">
  <div class="dropdown-container">
    <Dropdown data={categories} label="Category:" img="images/react-logo.png" />
    {#if versions}
      <span class="spacer" />
      <Dropdown data={versions} label="Version:" />
    {/if}
  </div>

  <div class="button-routes">
    <ButtonRoute mini name="angular" />
    <ButtonRoute mini name="react" />
    <ButtonRoute mini name="vue" />
    <ButtonRoute mini name="polymer" />
    <ButtonRoute mini name="preact" />
    <ButtonRoute mini name="svelte" />
  </div>
</div>
<CardLayout {data} category={categories[0]} />
