import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Counter from "./views/Counter.vue";
import Movies from "./views/Movies.vue";
import News from "./views/News.vue";
import Todos from "./views/Todos.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/counter", name: "Counter", component: Counter },
  { path: "/movies", name: "Movies", component: Movies },
  { path: "/news", name: "News", component: News },
  { path: "/todos", name: "Todos", component: Todos },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
