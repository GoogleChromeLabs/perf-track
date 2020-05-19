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
  import { Link } from "svelte-routing";

  export let mini = false;
  export let name;

  import frameworkInfo from "../utils/framework-info.json";
  const { imgSrc, route, color } = frameworkInfo[name];

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: `button-route ${mini ? 'mini' : ''} active`, style: `--border-color:${color}` };
    } else {
      return { class: `button-route ${mini ? 'mini' : '' } scale-bg`, style: `--border-color:${color}`  };
    }
  }
</script>

<style>
	:global(.button-route) {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    padding: 1rem 0.6rem;
    background: rgb(255, 255, 255);
    border-radius: 2rem;
    cursor: pointer;
    transition: all .1s ease-in-out;
    min-width: 12rem;
    min-height: 11rem;
  }

  :global(.scale-bg) {
    position: relative;
  }
  :global(.scale-bg::after) {
    background-color: var(--border-color);
    border-radius: 2rem;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: transform 250ms;
  }

  :global(.scale-bg:hover::after) {
    transform: scale(1.05);
  }
  
 :global(.active) {
    position: relative;
  }
  :global(.active::after) {
    background-color: var(--border-color);
    border-radius: 2rem;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: scale(1.1);
  }

  :global(.button-route img) {
    max-width: 80px;
    max-height: 80px;
  }

    @media (min-width: 1241px) {
      :global(.button-route.mini) {
        min-width: 8rem;
        min-height: 7rem;
        margin-left: 2rem;
      }

      :global(.button-route.mini img) {
        max-width: 45px;
        max-height: 45px;
      }
    }
  
  @media (max-width: 1240px) {
    :global(.button-route img) {
      max-width: 70px;
      max-height: 70px;
    }

    :global(.button-route) {
      min-width: 10rem;
      min-height: 9rem;
    }
  }

  @media (max-width: 715px) {
    :global(.button-route img) {
      max-width: 40px;
      max-height: 40px;
    }

    :global(.button-route) {
      min-width: 6rem;
      min-height: 5rem;
    }
  }
</style>

<Link to="{route}" getProps="{getProps}">
  <img src={imgSrc} alt="{name} logo">
</Link>