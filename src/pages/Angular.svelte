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

  import PageLayout from "../components/Layout/PageLayout.svelte";
  import Footer from "../components/Footer.svelte";

  import { data } from "../page-data/angular.js";

  let categories = [
    { id: 1, framework: 'Angular', text: 'Angular' },
  ];
</script>

<style>
  .container {
    padding: 4rem 5rem 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
  }
</style>

<div class="container">
  <PageLayout framework="Angular" {categories} {data} />
  <Footer />
</div>
