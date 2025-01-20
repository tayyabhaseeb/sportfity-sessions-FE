import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SecondPage from "../views/SecondPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/second",
      component: SecondPage,
    },
    {
      path: "/matches",
      component: MatchList,
    },
  ],
});

export default router;
