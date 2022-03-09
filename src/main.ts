import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import './css/index.css'

createApp(App).use(router).use(createPinia()).mount("#app");
