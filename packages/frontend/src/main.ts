import { createApp } from 'vue';
import './style.css';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from './App.vue';
import { router } from './router';

createApp(App).use(VueQueryPlugin).use(router).mount('#app');
