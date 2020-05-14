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

  import CardLayout from "../components/CardLayout.svelte";
  import Dropdown from "../components/Dropdown.svelte";
  import ButtonRoute from "../components/ButtonRoute.svelte";
  import Footer from "../components/Footer.svelte";

  import { headerOptions, data } from "../page-data/angular.js";

  let primaryColor = "#ff6384";
  let selectedOption = headerOptions[0];

  let frameworkCategories = [
    { id: 1, text: `All React sites` },
    { id: 2, text: `Only React sites built with Next.js` },
    { id: 3, text: `Only React sites built with Gatsby` },
    { id: 4, text: `Only React sites built with Create React App` }
  ];

  let versions = [
    { id: 1, text: `All versions` },
    { id: 2, text: `v6.8` },
    { id: 3, text: `v6.7` },
    { id: 4, text: `v6.6` }
	];
</script>

<style>
.header {
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
}

.container {
  padding: 5rem 5rem 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
}

.dropdown-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 6.5rem;
}

.button-routes {
  display: flex;
  justify-content:space-between;
}
</style>

<div class="container">
  <div class="header">
    <div class="dropdown-container">
      <Dropdown data={frameworkCategories} label="Category:" img="images/react-logo.png"/>
      <Dropdown data={versions} label="Version:"/>
    </div>

    <div class="button-routes">
      <ButtonRoute mini img="images/angular-logo.png" text="Angular" to="angular" borderColor="#FF6384"/>
      <ButtonRoute mini img="images/react-logo.png" text="React" to="react" borderColor="#36A2EB"/>
      <ButtonRoute mini img="images/vue-logo.png" text="Vue" to="vue" borderColor="#4BC0C0"/>
      <ButtonRoute mini img="images/polymer-logo.png" text="Polymer" to="polymer" borderColor="#FF4470"/>
      <ButtonRoute mini img="images/preact-logo.png" text="Preact" to="preact" borderColor="#6f31bf"/>
      <ButtonRoute mini img="images/svelte-logo.png" text="Svelte" to="svelte" borderColor="#ff3500"/>
    </div>
  </div>
  <CardLayout></CardLayout>
  <Footer></Footer>
</div>