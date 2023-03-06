import iframeResize from "iframe-resizer";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("resize", {
    mounted(el, { value = {} }) {
      el.addEventListener("load", () => iframeResize(value, el));
    },
  });
});
