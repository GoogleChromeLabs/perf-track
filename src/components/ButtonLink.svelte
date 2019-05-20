<script>
  import { link } from "svelte-routing";

  export let text = 'Button';
  export let red = false;
  export let blue = false;
  export let green = false;
  export let to = "";

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
	a {
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
    font-size: 16px;
  }
  
  a:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
</style>

<a href="{to}" use:link style="background-color: {background}" to="{to}">
  {text}
 </a>