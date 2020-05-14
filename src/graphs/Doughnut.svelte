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
              const bucket = data.labels[tooltipItem.index];
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const currentValue = dataset.data[tooltipItem.index];
              return `${bucket}: ${currentValue}%`;
            },
          }
        },
     },
    });
	});
</script>

<canvas class="graph" width={width} bind:this={canvas} />