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
  import { Router, Route } from "svelte-routing";
  import NavBar from "./components/NavBar.svelte";
  import Home from "./pages/Home.svelte";
  import Angular from "./pages/Angular.svelte";
  import React from "./pages/React.svelte";
  import Vue from "./pages/Vue.svelte";
  import About from "./pages/About.svelte";
  import Polymer from "./pages/Polymer.svelte";
  import Gatsby from "./pages/Gatsby.svelte";
  import Svelte from "./pages/Svelte.svelte";
</script>

<style>
	:global(body) {
		font-family: 'Nunito', avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
	}

  .container {
    height: 100%;
  }
</style>

<Router>
  <div class="container">
    <Route path="angular" component="{Angular}" />
    <Route path="react" component="{React}" />
    <Route path="vue" component="{Vue}" />
    <Route path="polymer" component="{Polymer}" />
    <Route path="gatsby" component="{Gatsby}" />
    <Route path="svelte" component="{Svelte}" />
    <Route path="about" component="{About}" />
    <Route path="/" component="{Home}" />
  </div>
</Router>

