import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
  },
  {
    path: '/hello',
    name: 'Hello',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HelloWorld.vue'),
  },
];

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
