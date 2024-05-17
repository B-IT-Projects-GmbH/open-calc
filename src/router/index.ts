import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home',
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/TabHomeView.vue'),
      },
      {
        path: 'diary',
        name: 'diary',
        component: () => import('@/views/TabDiaryView.vue'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/TabSearchView.vue'),
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () => import('@/views/TabStatisticsView.vue'),
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/TabProfileView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
