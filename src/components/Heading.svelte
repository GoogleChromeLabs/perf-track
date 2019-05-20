<script>
  export let text;
  export let icon;
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

<div class="heading">
  <h2>{text}</h2>
</div>