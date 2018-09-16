import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from '../store';

Vue.use(VueRouter);

import Home from '../components/Home';
import Welcome from '../components/Welcome';
import Movie from '../components/Movie';

const isAuth = (to, from, next) => {
  if (store.getters['auth/isAuthorized']) {
    next();
    return;
  }
  next({name: 'login'} );
};

const isNotAuth = (to, from, next) => {
  if (!store.getters['auth/isAuthorized']) {
    next();
    return;
  }
  next({name: 'home'} );
};

const routes = [
  { 
    path: '/', 
    redirect: { name: 'home' }
  },
  {
    name: 'login',
    path: '/login',
    component: Welcome,
    beforeEnter: isNotAuth
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    beforeEnter: isAuth,
    children: [
      {
        name: 'movie',
        path: 'movie/:id',
        component: Movie,
        props: true
      }
    ]
  }
  
];

export const router = new VueRouter({
  routes,
  mode: 'history'
});