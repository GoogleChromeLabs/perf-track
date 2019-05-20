<script>
	import { onMount } from 'svelte';
  import Chart from 'chart.js/dist/Chart.js'

  let canvas;
  let ctx;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Pass", "Fail"],
        datasets: [{
          backgroundColor: ["#27ae60", "#e74c3c"],
          data: [80, 20]
        }]
      },
      options: {
        legend: {
            position: 'right',
            labels: {
              fontSize: 14
            }
        }
     }
    });
	});
</script>

<canvas class="graph" bind:this={canvas} />