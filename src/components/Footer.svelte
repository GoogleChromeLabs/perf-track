<script>
  import { Link } from "svelte-routing";
</script>

<style>
	div {
    padding: 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  a, span {
    color: #333333;
    font-weight: 500;
    transition: all .1s ease-in-out;
  }

  span {
    font-weight: 600;
  }

  a:hover, span:hover {
    text-decoration: none;
    font-weight: 600;
  }

  @media (max-width: 715px) {
    div {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 4rem;
      background: #fff;
      padding: 1rem 2rem;
      width: 100vw;
      border-top: 1px solid #888c8d;
      font-size: 1.5rem;
    }
  }
</style>

<div>
  <Link to="">
    <span>Perf Track</span>
  </Link>
  <a href="https://github.com/GoogleChromeLabs/perf-track">
    GitHub
  </a>
 </div>