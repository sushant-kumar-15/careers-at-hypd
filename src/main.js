import { createApp } from "vue";
import App from "./App.vue";
import "../src/assets/style/main.css";
import router from "./router";
import Vue3TouchEvents from "vue3-touch-events";
import axios from 'axios';
import VueAxios from 'vue-axios';
// import VueGtag from "vue-gtag";
const app = createApp(App);
// app.use(VueGtag, {
//   config: { id: "G-G6EP0MZDK9" }
// });
app.use(router);
app.use(Vue3TouchEvents);
app.use(VueAxios, axios);
app.mount('#app');

if(process.env.NODE_ENV != 'production'){
 app.config.globalProperties.$careerURL = "https://jobs.getshitdone.in"
}else{
  app.config.globalProperties.$careerURL = "https://jobs.hypd.store"
}