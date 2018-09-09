import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import movies from './modules/movies';

export const store = new Vuex.Store({
  modules: {
    movies
  },
  strict: process.env.NODE_ENV !== 'production'
});