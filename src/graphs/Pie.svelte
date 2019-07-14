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
        legend: {
            position: 'right',
            labels: {
              fontSize: 14
            }
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
     }
    });
	});
</script>

<canvas class="graph" bind:this={canvas} />