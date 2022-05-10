import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import './style/global.scss';
import './style/iconfont.scss';
import useVMdPreview from '@/useVMdPreview';
import store from '@/store';

const VMdPreview = useVMdPreview();
createApp(App).use(store).use(router).use(VMdPreview).mount('#app');
