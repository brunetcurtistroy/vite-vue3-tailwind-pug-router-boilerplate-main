import { createRouter, createWebHistory } from 'vue-router';

import About from '@/views/About.vue';
import Home from '@/views/Home.vue';

// to use router in view file setup method
// import { useRouter } from 'vue-router';
// const router = useRouter();
// router.push('/);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
