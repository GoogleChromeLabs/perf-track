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

  import { headerOptions, data } from "../page-data/angular.js";

  let primaryColor = "#ff6384";
  let selectedOption = headerOptions[0];
</script>

<style>
.container {
  padding: 5rem;
  height: calc(100% - 8rem);
  box-sizing: border-box;
}

.dropdown-container {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}

.dropdown-container img {
  max-height: 30px;
  margin-left: 10px;
}
</style>

<div class="container">
  <div class="dropdown-container">
    <Dropdown/>
    <img src="images/react-logo.png"/>
  </div>
  <CardLayout></CardLayout>
</div>