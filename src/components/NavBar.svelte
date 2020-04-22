<script>
  import Nav from "./Nav.svelte";
  import Logo from "./icons/Logo.svelte";
</script>

<style>
  nav {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    height: 70px;
    padding-left: 125px;
    border-bottom: 1px solid #ccc;
  }

  :global(nav .link, nav .link:visited) {
    font-weight: 500;
    font-size: 22px;
    margin-right: 80px;
    color: #6c4cd5;
	}

  :global(nav .link) {
    text-decoration: none;
    transition: color 0.5s ease;
    transition: font-size 0.1s ease;
    font-weight: 600;
	}

  :global(nav .link:hover) {
    font-size: 24px;
    color: #000;
    border-bottom: 3px solid #6c4cd5;
	}

  :global(nav .active) {
    font-weight: 600;
    color: #000 !important;
    border-bottom: 3px solid #6c4cd5;
	}

  :global(nav .active:hover) {
    font-size: 22px;
    border-bottom: 3px solid #6c4cd5;
	}
</style>

<nav>
  <Nav to="angular">Angular</Nav>
  <Nav to="react">React</Nav>
  <Nav to="vue">Vue</Nav>
</nav>