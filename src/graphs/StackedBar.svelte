<script>
	import { onMount } from 'svelte';
  import Chart from 'chart.js/dist/Chart.js'

  let canvas;
  let ctx;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["All sites", "Alexa Top 10,000", "*.google.com sites", "Sites with React", "Sites with Next.js"],
        datasets: [
          {
            label: '<200KB',
            data: [6, 13, 9, 0.1, 0.2],
            backgroundColor: '#34a853'
          },
          {
            label: '200KB - 400KB',
            data: [7, 11, 15, 1, 1],
            backgroundColor: '#93c47d'
          },
          {
            label: '400KB - 600KB',
            data: [7, 13, 2, 3, 6],
            backgroundColor: '#fbbc04'
          },
          {
            label: '600KB - 800KB',
            data: [6, 9, 3, 3, 7],
            backgroundColor: '#ff6d01'
          },
          {
            label: '800KB - 1MB',
            data: [6, 9, 8, 3, 8],
            backgroundColor: '#ea4335'
          },
          {
            label: '>1MB',
            data: [68, 45, 35, 90, 78],
            backgroundColor: '#980000'
          }
        ]
      },
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
        }
     }
    });
	});
</script>

<canvas class="graph" bind:this={canvas} />