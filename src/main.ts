import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";
import RouterPrefetch from "vue-router-prefetch";
import "@unocss/reset/tailwind.css";
import "uno.css";
import { createHead } from "@vueuse/head";
import lazy from "vue-lazyload";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
const head = createHead();

createApp(App)
  .use(router)
  .use(RouterPrefetch)
  .use(head)
  .use(lazy)
  .mount("#app");
