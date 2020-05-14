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

  @media (max-width: 620px) {
    div {
      height: 5rem;
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