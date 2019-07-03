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