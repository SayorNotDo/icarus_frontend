import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
    component: Home,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
          title: "Dashboard",
        },
        component: () => import("../views/dashboard.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Login",
    },
    component: () => import("../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title} | Icarus`;
//   const role = localStorage.getItem("username");
//   if (!role && to.path !== "/login") {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
