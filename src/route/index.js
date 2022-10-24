import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "",
    name: "Home",
    component: () => import("../views/home/components/HomeSection.vue"),
  },
  
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.matched.some((m) => m.meta.disableScroll)) return;
    if (to.hash) {
      return {
        selector: to.hash,
        // , offset: { x: 0, y: 10 }
        behavior: "smooth",
      };
    }
    const position = {
      x: 0,
      y: 0,
    };

    if (savedPosition) {
      position.x = savedPosition.x;
      position.y = savedPosition.y;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position);
      }, 400);
    });
  },
});

export default router;
