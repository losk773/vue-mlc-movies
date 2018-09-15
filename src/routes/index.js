import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import Welcome from '../components/Welcome';
import Movie from '../components/Movie';
import MovieList from '../components/MovieList';

const routes = [
  {
    path: '',
    redirect: {
      name: 'home'
    }
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    children: [
      {
        name: 'movies',
        path: 'movies',
        component: MovieList,
        children: [
          {
            name: 'movie',
            path: 'movie',
            component: Movie
          }
        ]
      }
    ]
  },
  {
    name: 'welcome',
    path: '/login',
    component: Welcome
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history'
});