<script>
  import "./vendor/metro-all.min.css";
  import Router from "svelte-spa-router";
  import routes from "virtual:generated-pages-svelte";
  import "./vendor/metro.min";
  
  function tutup() {
    document.querySelector(".hamburger").click();
  }
</script>

<div data-role="appbar" data-expand-point="md">
  <span class="brand no-hover"> Kaligrafi </span>

  <ul class="app-bar-menu">
    <li><a on:click={tutup} href="#/">Home</a></li>
    <li><a on:click={tutup} href="#/donasi">Support Me</a></li>
    <li>
      <a
        on:click={tutup}
        href="https://play.google.com/store/apps/details?id=com.trihandayani.kaligrafi"
        >Give 5 Stars</a
      >
    </li>
  </ul>
</div>
<div class="isi">
  <Router {routes} />
</div>

<style>
  .isi {
    padding-top: 70px;
  }
  :global(*) {
    word-wrap: break-word;
  }
  .wadah {
    min-height: 100vh;
  }
  /* chrome extension */
  /* :global(body) {
    width: 350px;
    height: 500px;
    font-size: 16px;
  } */
</style>
