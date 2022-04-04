import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import './style/global.scss';
import './style/iconfont.scss';

createApp(App).use(router).mount('#app');
