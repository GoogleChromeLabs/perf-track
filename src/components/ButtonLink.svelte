<script>
  import { link } from "svelte-routing";

  export let text = 'Button';
  export let to = "";

  export let background = '#6c4cd5';
  export let width = 150;
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
    font-size: 16px;
    cursor: pointer;
  }
  
  a:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  }
</style>

<a href="{to}" use:link style="background-color: {background}; width: {width}px" to="{to}">
  {text}
 </a>