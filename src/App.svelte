<script>
  import Router from "svelte-spa-router";
  import routes from "virtual:generated-pages-svelte";
  import Header from "header-apk";
</script>

<Header
  judul="Kaligrafi"
  id="com.trihandayani.kaligrafi"
  afiliasi="https://tokopedia.link/Sji7LMb17vb"
/>
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
  /* chrome extension */
  /* :global(body) {
    width: 350px;
    height: 500px;
    font-size: 16px;
  } */
</style>
