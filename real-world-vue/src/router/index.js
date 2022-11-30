import Vue from "vue";
import VueRouter from "vue-router";
import CreateEvent from "../views/CreateEvent.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import User from "../views/User.vue";
import NProgress from "nprogress";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("event/fetchEvent", routeTo.params.id).then((event) => {
        routeTo.params.event = event;
        next();
      });
    },
  },
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: CreateEvent,
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
