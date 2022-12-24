<script>
  import Router from "svelte-spa-router";
  import routes from "virtual:generated-pages-svelte";
  import { App, Navbar, Page } from "framework7-svelte";
  import "framework7-icons";
</script>

<App>
  <Router {routes} />
</App>

<style>
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
