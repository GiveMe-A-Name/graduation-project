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
import News from '@/views/News/index.vue';
import NewsList from '@/views/NewsList/index.vue';
import NewsPublish from '@/views/NewsPublish/index.vue';

const routes: RouteRecordRaw[] = [
  { component: SocialDetail, path: '/social/:id' },
  { component: SocialPublish, path: '/social/publish' },
  { component: IDCard, name: 'idCard', path: '/id_card' },
  { component: HealthReport, path: '/health_report' },
  { component: News, path: '/news/:id' },
  { component: NewsList, path: '/news' },
  { component: NewsPublish, path: '/publish/news' },
  {
    component: Main,
    path: '/',
    children: [
      { path: '', name: 'home', component: Home },
      { path: '/social', component: Social },
      { path: '/myself', component: Myself },
    ],
  },
  { component: Login, name: 'Login', path: '/login' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = window.localStorage.getItem('isLogin');
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  else next();
});

export default router;
