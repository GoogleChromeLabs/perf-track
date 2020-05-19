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

  let canvas;
  let ctx;
  let StackedBarChart;

  beforeUpdate(() => {
    if (StackedBarChart) {
      StackedBarChart.data = data;
      StackedBarChart.update();
    }
  });
  
  onMount(() => {
    const ctx = canvas.getContext('2d');
    
    StackedBarChart = new Chart(ctx, {
      type: "bar",
      data,
      options: {
        scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
        },
        legend: {
            position: 'right',
            labels: {
              fontSize: 14
            }
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const currentValue = dataset.data[tooltipItem.index];
              return `${dataset.label}: ${currentValue}%`;
            },
          }
        },
     }
    });
	});
</script>

<canvas class="graph" bind:this={canvas} />