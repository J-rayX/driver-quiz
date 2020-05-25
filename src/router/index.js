import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recommender from "../views/Recommender.vue";
import Booking from "../views/Booking.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/",
    name: "recommender",
    component: Recommender,
    props: true
  },
  {
    path: "/",
    name: "booking",
    component: About,
    props: true
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
