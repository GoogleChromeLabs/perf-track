<script>
  import { link } from "svelte-routing";

  import Logo from "./icons/Logo.svelte";

  export let color = '#000';
  export let number;
</script>

<style>
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #FF6384;
    margin-bottom: 20px;
    height: 80px;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 10px 25px rgba(255, 255, 255, 0.49);
    z-index: 3;
  }

  .logo {
    margin-right: 10px;
    transition: all .2s ease-in-out;
  }

  .logo:hover {
    margin-right: 10px;
    transform: scale(1.1);
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
  }

  .toggles {
    display: flex;
    align-items: center;
  }
  
  .toggle {
    margin-right: 30px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
  }

  .toggle input {
    margin: 0 10px 0.25em 0;
  }
</style>

<div class="header">
  <div class="container">
    <a href="/" use:link class="logo">
      <Logo width="80" height="80"/>
    </a>
    <div class="toggles">
      <div class="toggle">
        <input type="radio" id="huey" name="drone" value="huey" checked>
        <label for="huey">All Angular sites</label>
      </div>

      <div class="toggle">
        <input type="radio" id="dewey" name="drone" value="dewey">
        <label for="dewey">Angular sites without jQuery</label>
      </div>

      <div class="toggle">
        <input type="radio" id="dewey" name="drone" value="dewey">
        <label for="dewey">Angular sites with no other framework</label>
      </div>
    </div>
  </div>
</div>