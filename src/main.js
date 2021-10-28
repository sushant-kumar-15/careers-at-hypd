import { createApp } from "vue";
import App from "./App.vue";
import "../src/assets/style/main.css";
import router from "./router";
import Vue3TouchEvents from "vue3-touch-events";

const app = createApp(App);
app.use(router);
app.use(Vue3TouchEvents);
// app.use(VueAxios, axios);
app.mount('#app');
