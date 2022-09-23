import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '@/views/TestView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return {...savedPosition, behavior: 'smooth'};
        }

        if (to.hash) {
            return {el: to.hash, behavior: 'smooth'};
        }

        return {top: 0, behavior: 'smooth'};
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/test',
            name: 'test',
            component: TestView,
        },
        {
            path: '/:catchAll(.*)',
            component: NotFoundView,
        },
    ],
});

export default router;
