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
	import { onMount, beforeUpdate } from 'svelte';
  import Chart from 'chart.js/dist/Chart.js'
  
  export let data;
  export let width = 400;
  
  let canvas;
  let ctx;
  let doughnutChart;

  beforeUpdate(() => {
    if (doughnutChart) {
      doughnutChart.data = data;
      doughnutChart.update();
    }
  });

  onMount(() => {
    const ctx = canvas.getContext('2d');
    
    doughnutChart = new Chart(ctx, {
      type: "doughnut",
      data,
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const currentValue = dataset.data[tooltipItem.index];
              return ` ${currentValue}%`;
            },
          }
        },
     },
    });
	});
</script>

<canvas class="graph" width={width} bind:this={canvas} />