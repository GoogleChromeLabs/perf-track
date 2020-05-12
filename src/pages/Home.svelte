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
  import ButtonRoute from "../components/ButtonRoute.svelte";
  import QueryIcon from "../components/QueryIcon.svelte";
</script>

<style>
  .container {
    background: #F7F7F7;
    height: 100%;
    display: flex;
    align-items: center;
  }

  header {
    display: flex;
    padding-bottom: 4rem;
  }

  header h1 {
    font-weight: 600;
  }

  .frameworks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5rem;
  }

  .divider {
    border: 2px solid #dddddd;
  }

  @media (max-width: 1240px) {
    header {
      flex-direction: column;
    }
    
    .title {
      text-align: center;
    }

    .frameworks {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center; 
      grid-row-gap: 5rem;
      grid-column-gap: 2rem;
    }

    .divider {
      width: 600px;
    }
  }

  @media (max-width: 620px) {
    .frameworks {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 3rem;
    }

    .divider {
      width: 300px;
    }
  }
</style>

<div class="container">
  <div class="row">
    <header>
      <div class="title">
        <h1>
          Perf Track
        </h1>
        <h2>
          Tracking framework performance at scale
        </h2>
      </div>
    </header>
    <hr class ="divider"/>
    <div class="frameworks">
      <ButtonRoute img="https://angular.io/assets/images/logos/angular/angular.png" text="Angular" to="angular" borderColor="#FF6384"/>
      <ButtonRoute img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" text="React" to="react" borderColor="#36A2EB"/>
      <ButtonRoute img="https://opencollective-production.s3-us-west-1.amazonaws.com/ca272d00-958a-11e7-990a-e919fb36989b.png" text="Vue" to="vue" borderColor="#4BC0C0"/>
      <ButtonRoute img="https://cdn.worldvectorlogo.com/logos/polymer.svg" text="Polymer" to="polymer" borderColor="#FF4470"/>
      <ButtonRoute img="https://preactjs.com/assets/app-icon.png" text="Preact" to="preact" borderColor="#6f31bf"/>
      <ButtonRoute img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png" text="Svelte" to="svelte" borderColor="#ff3500"/>
    </div>
  </div>
</div>
