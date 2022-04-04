import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/index.vue';
import Register from '@/views/Register/index.vue';

const routes: RouteRecordRaw[] = [
  { component: Home, path: '/' },
  { component: Register, path: '/register' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
