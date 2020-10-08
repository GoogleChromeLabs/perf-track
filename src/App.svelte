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

  import Home from "./pages/Home.svelte";
  import Amp from "./pages/Amp.svelte";
  import Angular from "./pages/Angular.svelte";
  import React from "./pages/React.svelte";
  import Vue from "./pages/Vue.svelte";
  import Svelte from "./pages/Svelte.svelte";
  import Ember from "./pages/Ember.svelte";
  import About from "./pages/About.svelte";
  import Polymer from "./pages/Polymer.svelte";
  import LitElement from "./pages/LitElement.svelte";
  import Preact from "./pages/Preact.svelte";
</script>

<style>
  :global(*, *::after, *::before) {
     box-sizing: border-box; 
     padding:0;
     margin: 0;
  }

	:global(body) {
    font: 400 1.6rem / 1.6 Montserrat, sans-serif;
    padding: 0;
    background: #f1f1f1;
    overscroll-behavior: none;
    position: relative;
    width: 100%;
    height: 100%;
	}

  :global(html) {
    font-size: 59.5%;
    position: relative;
    width: 100%;
    height: 100%;
	}

  :global(.row) {
		max-width: 114rem;
    width: 100%;
    margin: 0px auto;
	}

  :global(h1) {
		font-size: 6rem;
    margin-bottom: 0;
	}

  :global(h2) {
		font-size: 2.5rem;
	}

  :global(h1, h2) {
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 0;
  }

  :global(h3, h4) {
    line-height: 1.2;
  }

  @media (max-width: 715px) {
    :global(h1) {
      font-size: 4.5rem;
    }

    :global(h2) {
      font-size: 2rem;
    }
  }
</style>

<Router>
  <Route path="amp" component="{Amp}" />
  <Route path="angular" component="{Angular}" />
  <Route path="react" component="{React}" />
  <Route path="vue" component="{Vue}" />
  <Route path="polymer" component="{Polymer}" />
  <Route path="litelement" component="{LitElement}" />
  <Route path="preact" component="{Preact}" />
  <Route path="svelte" component="{Svelte}" />
  <Route path="ember" component="{Ember}" />
  <Route path="about" component="{About}" />
  <Route path="/" component="{Home}" />
</Router>

