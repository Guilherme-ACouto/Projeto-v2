import { createRouter, createWebHistory } from 'vue-router';
import telaV1 from '@/views/telaV1.vue';

const routes = [
  {
    path: '/',
    name: 'telaV1',
    component: telaV1
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;