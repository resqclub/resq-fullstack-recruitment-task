import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../pages/Ideas.vue') },
        { path: '/stats', component: () => import('../pages/Stats.vue') },
    ],
});
