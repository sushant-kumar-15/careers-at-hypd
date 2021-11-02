import { createApp } from "vue";
import App from "./App.vue";
import "../src/assets/style/main.css";
import router from "./router";
import Vue3TouchEvents from "vue3-touch-events";
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);
app.use(router);
app.use(Vue3TouchEvents);
app.use(VueAxios, axios);
app.mount('#app');

if(process.env.NODE_ENV != 'production'){
 app.config.globalProperties.$careerURL = "https://careers.getshitdone.in"
}else{
  app.config.globalProperties.$careerURL = "https://careers.hypd.store"
}