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
  export let fast;
  export let average;
  export let slow;

  export let fastTooltip;
  export let averageTooltip;
  export let slowTooltip;

  let barHeight = 'clamp(20px, 1vw, 50px)';
</script>

<style>
	.metric-chart {
    display: flex;
    font-weight: 600;
    width: 100%;
  }

  .bar {
    display: inline-block;
    line-height: clamp(20px, 1vw, 50px);
    height: var(--bar-height);
    font-size: clamp(1.5rem, 1vw, 1.8rem);
    text-align: center;
    color: #fff;
    border-radius: 15px 0 0 15px;
    text-align: left;
    padding-left: 10px;
    min-width: 38px;
    position: relative;
  }

  .bar .tooltip {
    visibility: hidden;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    font-size: clamp(1.5rem, 1vw, 1.7rem);
    font-weight: 600;
    padding: 10px;
    position: absolute;
    z-index: 1;
    width: 220px;
    top: 140%;
    left: 50%; 
    margin-left: -110px;
    display: block;
    opacity: 100%;
  }
  
  .bar .tooltip::before {
    display: none;
  }

  .bar .tooltip::after {
    content: " ";
    position: absolute;
    bottom: 100%;  /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
  }

  .bar:hover .tooltip {
    visibility: visible;
  }

  .bar::after {
    width: 15px;
    height: var(--bar-height);
    position: absolute;
    right: 15px;
    content: '';
  } 

  .bar::after {
    width: 15px;
    height: var(--bar-height);
    position: absolute;
    right: 15px;
    content: '';
  } 

  .bar::after {
    width: 15px;
    height: var(--bar-height);
    position: absolute;
    right: -15px;
    content: '';
  } 

  .fast {
    background-color: #00ac47;
  }

  .fast::after {
    background: #00ac47;
  }

  .fast .tooltip {
    background: #00ac47;
    border: 2px solid #ffffff;
  }

  .fast .tooltip::after {
    border-color: transparent transparent #00ac47 transparent;
  }

  .average {
    background: #ffba00;
    color: #000;
  }

  .average .tooltip {
    background: #ffba00;
    color: #000;
    border: 2px solid #000;
  }

  .average .tooltip::after {
    border-color: transparent transparent #ffba00 transparent;
  }

  .average::after {
    background: #ffba00;
  }

  .slow {
    background: #fa3a2f;
    border-radius: 12px;
  }

  .slow .tooltip {
    background: #fa3a2f;
    border: 2px solid #ffffff;
  }

  .slow .tooltip::after {
    border-color: transparent transparent #fa3a2f transparent;
  }

  @media (max-width: 1240px) {
    .slow .tooltip, .average .tooltip, .fast .tooltip {
      display: none;
    }
  }
</style>

<div class="metric-chart" style="--bar-height: {barHeight}">
  <div class="bar fast" style="flex-grow: { fast };">
    { fast }%
    <span class="tooltip">{ fastTooltip }</span>
  </div>
  <div class="bar average" style="flex-grow: { average };">
    { average }%
    <span class="tooltip">{ averageTooltip }</span>
  </div>
  <div class="bar slow" style="flex-grow: { slow };">
    { slow }%
    <span class="tooltip">{ slowTooltip }</span>
  </div>
</div>