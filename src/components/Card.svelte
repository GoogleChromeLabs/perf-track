<script>  
  export let heading = '';
  export let style = '';
</script>

<style>
  section {
    background: #fff;
    padding: 2rem;
  }

  .icon {
    margin-right: 10px;
  }

	.title {
    display: flex;
    align-items: center;
		color: #888c8d;
    font-weight: 600;
    margin-top: 0;
    font-size: 2rem;
  }
  
</style>

<section style={style}>
  <h2 class="title">
  <span class="icon"><slot name="icon" /></span>
  {heading}
  </h2>
 </section>