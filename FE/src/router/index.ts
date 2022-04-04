import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/views/Main.vue';
import Login from '@/views/login/index.vue';
import Home from '@/views/home/index.vue';
import Community from '@/views/community/index.vue';
import Myself from '@/views/myself/index.vue';

const routes: RouteRecordRaw[] = [
  {
    component: Main,
    path: '/',
    children: [
      { path: '', component: Home },
      { path: '/community', component: Community },
      { path: '/myself', component: Myself },
    ],
  },
  { component: Login, path: '/login' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
