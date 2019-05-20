<script>
  export let text = 'Button';
  export let red = false;
  export let blue = false;
  export let green = false;

  let background = '#6c4cd5'
  
  if (red) {
    background = '#FF6384';
  } else if (blue) {
    background = '#36A2EB';
  } else if (green) {
    background = '#4BC0C0';
  }

</script>

<style>
	button {
		border: 0;
    text-align: center;
    display: inline-block;
    padding: 16px;
    margin: 16px;
    color: #FFFFFF;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: box-shadow 200ms ease-out;
    width: 150px;
    font-size: 18px;
  }
  
  button:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
</style>

<button style="background-color: {background}" on:click>
  {text}
 </button>