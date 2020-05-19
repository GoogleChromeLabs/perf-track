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
  export let labels = ["Pass (50 - 100)", "Fail (0 - 50)"];
  export let colors = ["#27ae60", "#e74c3c"];

  let canvas;
  let ctx;
  let PieChart;

  beforeUpdate(() => {
    if (PieChart) {
      PieChart.data.datasets[0].data = data;
      PieChart.update();
    }
  });

  onMount(() => {
    const ctx = canvas.getContext('2d');
    
    PieChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels,
        datasets: [{
          backgroundColor: colors,
          data
        }]
      },
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
     }
    });
	});
</script>

<canvas class="graph" bind:this={canvas} />