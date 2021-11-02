import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/"
  },
  {
    path: "/",
    name: "LandingPage",
    component: () => import("../views/LandingPage.vue")
  },
  {
    path: "/job/:id",
    name: "JobPage",
    component: () => import("../views/JobPage.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
