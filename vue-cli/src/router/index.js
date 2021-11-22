import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "SearchResultPage",
    path: "/result/:page",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchResultPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
