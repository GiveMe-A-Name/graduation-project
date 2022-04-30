import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/views/Main.vue';
import Login from '@/views/Login/index.vue';
import Home from '@/views/Home/index.vue';
import Social from '@/views/Social/index.vue';
import Myself from '@/views/Myself/index.vue';
import SocialDetail from '@/views/SocialDetail/index.vue';
import SocialPublish from '@/views/SocialPublish/index.vue';
import IDCard from '@/views/IDCard/index.vue';
import HealthReport from '@/views/HealthReport/index.vue';

const routes: RouteRecordRaw[] = [
  { component: SocialDetail, path: '/social/:id' },
  { component: SocialPublish, path: '/social/publish' },
  { component: IDCard, path: '/id_card' },
  { component: HealthReport, path: '/health_report' },
  {
    component: Main,
    path: '/',
    children: [
      { path: '', component: Home },
      { path: '/social', component: Social },
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
