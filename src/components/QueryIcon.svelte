<script>
  export let background = '#ff5382'
  export let href = ''
</script>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    transition: all .2s ease-in-out;
    text-decoration: none;
  }

  .container:hover {
    transform: scale(1.25);
  }

  .container p {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
</style>

<a class="container" href={href} style="background-color: {background}">
  <p>?</p>
</a>