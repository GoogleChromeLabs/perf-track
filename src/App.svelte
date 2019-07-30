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

