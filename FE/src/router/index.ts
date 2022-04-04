import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';
import Login from '@/views/login/index.vue';

const routes: RouteRecordRaw[] = [
  { component: Home, path: '/' },
  { component: Login, path: '/login' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
