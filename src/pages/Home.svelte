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
  import Logo from "../components/icons/Logo.svelte";
  import ButtonLink from "../components/ButtonLink.svelte";
  import QueryIcon from "../components/QueryIcon.svelte";
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

	h1 {
    font-size: 65px;
    font-weight: 600;
    margin: 0;
    color: #6c4cd5;
	}

  p {
    font-size: 1.3rem;
    font-weight: 400;
    font-weight: 500;
    margin: 10px 0 0;
    color: #333538;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
  }

  .faq-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
</style>

<div class="container">
  <div class="faq-button">
    <QueryIcon
      href="about"
      routeLink
      background='#6c4cd5'/>
  </div>

  <div class="title">
    <Logo />
    <h1>perf track</h1>
  </div>
  <p>Tracking framework performance at scale</p>
  <div class="button-container">
    <ButtonLink background="#FF6384" text="Angular" to="angular" />
    <ButtonLink background="#36A2EB" text="React" to="react" />
    <ButtonLink background="#4BC0C0" text="Vue" to="vue" />
    <ButtonLink background="#FF4470" text="Polymer" to="polymer" />
    <ButtonLink background="#662e9b" text="Gatsby" to="gatsby" />
    <ButtonLink background="#ff3500" text="Svelte" to="svelte" />
  </div>
  <p>Performance Metric Comparison</p>
  <div class="button-container">
    <ButtonLink background="#ff3500" text="Compare" to="comparison" />
  </div>
</div>

