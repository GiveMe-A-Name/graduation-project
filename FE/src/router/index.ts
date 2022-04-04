import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';
import Register from '@/views/register/index.vue';

const routes: RouteRecordRaw[] = [
  { component: Home, path: '/' },
  { component: Register, path: '/register' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
