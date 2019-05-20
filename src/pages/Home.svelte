<script>
  import Logo from "../components/icons/Logo.svelte";
  import ButtonLink from "../components/ButtonLink.svelte";
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

	h1 {
    font-size: 65px;
    font-weight: 600;
    margin: 0;
    color: #6c4cd5;
	}

  p {
    font-size: 1.3rem;
    font-weight: 400;
    font-weight: 500;
    margin: 10px 0 0;
    color: #333538;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
  }
</style>

<div class="container">
  <div class="title">
    <Logo />
    <h1>serf</h1>
  </div>
  <p>Tracking framework performance at scale</p>
  <div class="button-container">
    <ButtonLink red text="Angular" to="angular" />
    <ButtonLink blue text="React" to="react" />
    <ButtonLink green text="Vue" to="vue" />
  </div>
</div>

