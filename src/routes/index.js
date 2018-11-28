import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from '../store';

Vue.use(VueRouter);

import Home from '../components/Home';
import Login from '../components/Login';
import Welcome from '../components/Welcome';
import Movie from '../components/Movie';
import MovieList from '../components/MovieList';

const isAuth = (to, from, next) => {
  if (store.getters['auth/isAuthorized']) {
    next();
    return;
  }
  next('/login');
};

const isNotAuth = (to, from, next) => {
  if (!store.getters['auth/isAuthorized']) {
    next();
    return;
  }
  next('/home');
};

const routes = [
  { 
    path: '/', 
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: isNotAuth
  },
  {
    path: '/home',
    component: Home,
    beforeEnter: isAuth,
    children: [
      {
        path: '/',
        component: Welcome
      },
      {
        name: 'movies',
        path: 'movies/:nameGenres/:idGenres',
        component: MovieList,
        props: true
      },
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