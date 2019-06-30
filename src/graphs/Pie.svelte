<script>
	import { onMount } from 'svelte';
  import Chart from 'chart.js/dist/Chart.js'

  export let data;

  let canvas;
  let ctx;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Pass (50 - 100)", "Fail (0 - 50)"],
        datasets: [{
          backgroundColor: ["#27ae60", "#e74c3c"],
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