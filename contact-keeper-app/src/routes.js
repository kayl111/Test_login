import Vue from 'vue';
import VueRouter from 'vue-router';
import TheLogin from './Views/TheLogin.vue';
import Homepage from './Views/Homepage.vue';
import Badpage from './Views/Badpage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: TheLogin,
  },
  {
    path: '/home',
    name: 'Homepage',  
    component: Homepage,
  },
  {
    path: '*',
    name: 'Badpage',
    component: Badpage,
  },
];

const router = new VueRouter({
  mode: 'history',  
  base: process.env.BASE_URL,
  routes
});

export default router;
