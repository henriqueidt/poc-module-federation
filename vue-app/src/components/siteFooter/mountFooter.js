import { createApp } from "vue";
import SiteFooter from "./siteFooter.vue";

export default (selector) => {
  createApp(SiteFooter).mount(selector);
};
