import Vue from 'vue';
import VueRouter from 'vue-router';
import { ROUTERS } from '@/const/routers';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTERS.HOME,
    name: 'Home',
    component: Home,
  },
  {
    path: ROUTERS.HISTORY,
    name: 'History',
    component: () => import('../views/History.vue'),
  },
  {
    path: ROUTERS.NOT_FOUND,
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
