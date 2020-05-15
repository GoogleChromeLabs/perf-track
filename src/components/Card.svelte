<script>  
  export let heading = '';
  export let style = '';
  export let centerHeading = false;
</script>

<style>
  section {
    background: #fff;
    padding: 2rem 3rem;
    border: 3px solid #dedede;
    border-radius: 10px;
  }

  .icon {
    margin-right: 10px;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .heading.center {
    justify-content: center;
  }

  .heading .number {
    font-size: 2rem;
  }

	.title {
    display: flex;
    align-items: center;
		color: #888c8d;
    font-weight: 600;
    margin-top: 0;
    font-size: 2rem;
  }

  .title.center {
    flex-direction: column;
  }

  .center .icon {
    margin: 0 0 5px;
  }
</style>

<section style={style}>
  <h2 class="heading {centerHeading && 'center'}">
    <div class="title {centerHeading && 'center'}">
      <span class="icon"><slot name="icon" /></span>
      {heading}
    </div>
    <span class="number"><slot name="number" /></span>
  </h2>
  <slot></slot>
 </section>