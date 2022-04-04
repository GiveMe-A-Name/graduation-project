import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import './global.scss';

createApp(App).use(router).mount('#app');
