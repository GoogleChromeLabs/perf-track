<script>
  import { link } from "svelte-routing";

  export let to = "";
  export let img = "";
  export let borderColor = '#6c4cd5';
</script>

<style>
	div {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    padding: 1rem 0.6rem;
    background: rgb(255, 255, 255);
    border-radius: 2rem;
    cursor: pointer;
    transition: all .1s ease-in-out;
    min-width: 12rem;
  }
  
  div:hover {
    box-shadow: 0 1px 10px var(--border-color);
    transform: scale(1.03);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  img {
    max-width: 90px;
    max-height: 90px;
  }

  @media (max-width: 1240px) {
    img {
      max-width: 70px;
      max-height: 70px;
    }

    div {
      min-width: 10rem;
      max-width: 15rem;
    }
  }

  @media (max-width: 620px) {
    img {
      max-width: 50px;
      max-height: 50px;
    }

    div {
      min-width: 7rem;
    }
  }
</style>

<div style="--border-color:{borderColor}">
  <a href="{to}" use:link to="{to}">
    <img src={img} alt={to}>
  </a>
</div>