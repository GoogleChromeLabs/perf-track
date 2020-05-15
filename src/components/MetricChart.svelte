<script>
  export let fast;
  export let average;
  export let slow;

  export let fastTooltip;
  export let averageTooltip;
  export let slowTooltip;
</script>

<style>
	.metric-chart {
    display: flex;
    font-weight: 600;
  }

  .bar {
    display: inline-block;
    line-height: 20px;
    height: 20px;
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
    border-radius: 15px 0 0 15px;
    text-align: left;
    padding-left: 10px;
    min-width: 38px;
    position: relative;
  }

  .bar .tooltip {
    visibility: hidden;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    position: absolute;
    z-index: 1;
    width: 220px;
    top: 140%;
    left: 50%; 
    margin-left: -110px;
  }

  .bar .tooltip::after {
    content: " ";
    position: absolute;
    bottom: 100%;  /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
  }

  .bar:hover .tooltip {
    visibility: visible;
  }

  .bar::after {
    width: 15px;
    height: 20px;
    position: absolute;
    right: 15px;
    content: '';
  } 

  .bar::after {
    width: 15px;
    height: 20px;
    position: absolute;
    right: 15px;
    content: '';
  } 

  .bar::after {
    width: 15px;
    height: 20px;
    position: absolute;
    right: -15px;
    content: '';
  } 

  .fast {
    background-color: #0cce6b;
  }

  .fast::after {
    background: #0cce6b;
  }

  .fast .tooltip {
    background: #0cce6b;
  }


  .fast .tooltip::after {
    border-color: transparent transparent #0cce6b transparent;
  }

  .average {
    background: #ffa400;
    color: #000;
  }

  .average .tooltip {
    background: #ffa400;
    color: #000;
  }

  .average .tooltip::after {
    border-color: transparent transparent #ffa400 transparent;
  }

  .average::after {
    background: #ffa400;
  }

  .slow {
    background: #ff4e42;
    border-radius: 12px;
  }

  .slow .tooltip {
    background: #ff4e42;
  }

  .slow .tooltip::after {
    border-color: transparent transparent #ff4e42 transparent;
  }
</style>

<div class="metric-chart">
  <div class="bar fast" style="flex-grow: { fast };">
    { fast }%
    <span class="tooltip">{ fastTooltip }</span>
  </div>
  <div class="bar average" style="flex-grow: { average };">
    { average }%
    <span class="tooltip">{ averageTooltip }</span>
  </div>
  <div class="bar slow" style="flex-grow: { slow };">
    { slow }%
    <span class="tooltip">{ slowTooltip }</span>
  </div>
</div>