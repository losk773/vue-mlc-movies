import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Welcome from '../components/Welcome';
import Movie from '../components/Movie';
import MovieList from '../components/MovieList';

const routes = [
  {
    path: '',
    component: Welcome
  },
  {
    name: 'movies',
    path: '/movies',
    component: MovieList,
    children: [
      {
        name: 'movie',
        path: 'movie',
        component: Movie
      }
    ]
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history'
});