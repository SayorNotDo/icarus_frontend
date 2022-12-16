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
      {
        path: "/schedule",
        name: "Schedule",
        meta: {
          title: "Schedule",
        },
        component: () => import("../views/schedule.vue"),
      },
      {
        path: "/execute",
        name: "Execute",
        meta: {
          title: "Execute",
        },
        component: () => import("../views/execute.vue"),
      },
      {
        path: "/management",
        name: "Management",
        meta: {
          title: "Management",
        },
        component: () => import("../views/management.vue"),
      },{
        path: "/analystic",
        name: "Analystic",
        meta: {
          title: "Analystic",
        },
        component: () => import("../views/analystic.vue"),
      },
      {
        path: "/ci-cd",
        name: "CI-CD",
        meta: {
          title: "CI-CD",
        },
        component: () => import("../views/cicd.vue"),
      },{
        path: "/doc",
        name: "Documentation",
        meta: {
          title: "Documentation",
        },
        component: () => import("../views/document.vue"),
      },{
        path: "/alert",
        name: "Alert",
        meta: {
          title: "Alert",
        },
        component: () => import("../views/alert.vue"),
      }
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
