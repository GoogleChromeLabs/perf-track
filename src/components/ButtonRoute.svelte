<script>
  import { Link } from "svelte-routing";

  export let mini = false;
  export let name;

  import frameworkInfo from "../utils/framework-info.json";
  const { imgSrc, route, color } = frameworkInfo[name];

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: `button-route ${mini ? 'mini' : ''} active`, style: `--border-color:${color}` };
    } else {
      return { class: `button-route ${mini ? 'mini' : '' } scale-bg`, style: `--border-color:${color}`  };
    }
  }
</script>

<style>
	:global(.button-route) {
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
    min-height: 11rem;
  }

  :global(.button-route.mini) {
    min-width: 8rem;
    min-height: 7rem;
    margin-left: 2rem;
  }

  :global(.button-route.mini img) {
    max-width: 45px;
    max-height: 45px;
  }

  :global(.scale-bg) {
    position: relative;
  }
  :global(.scale-bg::after) {
    background-color: var(--border-color);
    border-radius: 2rem;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: transform 250ms;
  }

  :global(.scale-bg:hover::after) {
    transform: scale(1.05);
  }
  
 :global(.active) {
    position: relative;
  }
  :global(.active::after) {
    background-color: var(--border-color);
    border-radius: 2rem;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: scale(1.1);
  }

  :global(.button-route img) {
    max-width: 80px;
    max-height: 80px;
  }

  @media (max-width: 1240px) {
    :global(.button-route img) {
      max-width: 70px;
      max-height: 70px;
    }

    :global(.button-route) {
      min-width: 10rem;
      min-height: 9rem;
    }
  }

  @media (max-width: 620px) {
    :global(.button-route img) {
      max-width: 50px;
      max-height: 50px;
    }

    :global(.button-route) {
      min-width: 7rem;
      min-height: 6rem;
    }
  }
</style>

<Link to="{route}" getProps="{getProps}">
  <img src={imgSrc} alt="{name} logo">
</Link>