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
    header {
      padding: 0 2rem 2rem;
    }

    .frameworks {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 3rem;
      padding-top: 2rem;
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
      <ButtonRoute name="Angular" />
      <ButtonRoute name="React" />
      <ButtonRoute name="Vue" />
      <ButtonRoute name="Polymer" />
      <ButtonRoute name="Preact" />
    </div>
  </div>
</div>
