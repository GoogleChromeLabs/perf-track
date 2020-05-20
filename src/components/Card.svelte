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
  export let heading = '';
  export let style = '';
  export let centerHeading = false;
</script>

<style>
  section {
    background: #fff;
    padding: 2rem 3rem;
    border: 3px solid #dedede;
    border-radius: 10px;
  }

  .icon {
    margin-right: 10px;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .heading .number {
    font-size: clamp(1.3rem, 1vw, 2.5rem);
  }

	.title {
    display: flex;
    align-items: center;
		color: #888c8d;
    font-weight: 600;
    margin-top: 0;
    font-size: clamp(1.8rem, 1vw, 2.5rem);
  }

  @media (max-width: 1240px) {
    section {
      grid-column: auto !important; /* TODO: don't do this :) */
      grid-row: auto !important;
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    .heading {
      flex-direction: column;
    }

    .icon {
      display: none;
    }
  }
</style>

<section style={style}>
  <h2 class="heading">
    <div class="title">
      <span class="icon"><slot name="icon" /></span>
      {heading}
    </div>
    <span class="number"><slot name="number" /></span>
  </h2>
  <slot></slot>
 </section>