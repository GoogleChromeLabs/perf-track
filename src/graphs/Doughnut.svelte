<script>
	import { onMount } from 'svelte';
  import Chart from 'chart.js/dist/Chart.js'

  let canvas;
  let ctx;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["React + jQuery", "React + Angular", "React + Vue"],
        datasets: [{
          backgroundColor: ["#ffcd56", "#ff6384","#4BC0C0"],
          data: [40, 20, 60]
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