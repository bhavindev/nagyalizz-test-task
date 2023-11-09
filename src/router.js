import { createWebHistory, createRouter } from "vue-router";
import LoginPage from './components/LoginPage.vue'
import DashboardPage from './components/DashboardPage.vue'
const isLogged = localStorage.getItem('isLogin');

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardPage,
    beforeEnter: (to, from, next) => {
      if (!isLogged) {
          return next('/');
      } else {
          next();
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
