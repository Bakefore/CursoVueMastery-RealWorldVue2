import Vue from "vue";
import VueRouter from "vue-router";
import CreateEvent from "../views/CreateEvent.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
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

export default router;
