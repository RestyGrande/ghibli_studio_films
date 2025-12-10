import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Details from "../pages/Details.vue";
import Home from "../pages/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({ page: Number(route.query.page) || 1 }),
    meta: { title: "Ghibli Films" },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { title: "About" },
  },

  {
    path: "/film/:id",
    name: "Details",
    component: Details,
    props: true,
    meta: { title: "Film Details" },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || "Studio Ghibli Films";
});

export default router;
