import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import movies from './modules/movies';
import auth from './modules/auth';

export const store = new Vuex.Store({
  modules: {
    auth,
    movies
  },
  strict: process.env.NODE_ENV !== 'production'
});