import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/views/Main.vue';
import Login from '@/views/Login/index.vue';
import Home from '@/views/Home/index.vue';
import Community from '@/views/Community/index.vue';
import Myself from '@/views/Myself/index.vue';

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
