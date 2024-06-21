import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArcoVue from "@arco-design/web-vue";

createApp(App).use(ArcoVue).use(router).mount("#app");
