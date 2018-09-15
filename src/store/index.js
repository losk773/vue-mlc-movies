import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import movies from './modules/movies';
import user from './modules/user';

export const store = new Vuex.Store({
  modules: {
    user,
    movies
  },
  strict: process.env.NODE_ENV !== 'production'
});