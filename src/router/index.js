import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: () => import("../views/LandingPage.vue")
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
