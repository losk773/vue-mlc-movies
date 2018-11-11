import axios from 'axios';

export default {
  namespaced: true,
  state: {
    apiKey: '5d78da0983a3a7993b6640b921785bb2',
    status: '',
    loading: false,
    genres: null,
    moviesList: null
  },
  getters: {
    apiKey: (state) => {
      return state.apiKey;
    },
    status: (state) => {
      return state.status;
    },
    genres: (state) => {
      return state.genres;
    },
    moviesList: (state) => {
      return state.moviesList;
    },
    loading: (state) => {
      return state.loading;
    }
  },
  mutations: {
    moviesRequest: (state) => {
      state.status = 'loading...';
      state.loading = true;
    },
    moviesSuccess: (state) => {
      state.status = 'OK';
      state.loading = false;
    },
    moviesError: (state) => {
      state.status = 'Error!!!!';
    },
    createdGenres: (state, payload) => {
      state.genres = [...payload];
    },
    createdMoviesList: (state, payload) => {
      state.moviesList = [...payload];
    }
  },
  actions: {
    getGenres: ({ commit, state }) => {
      axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${state.apiKey}&language=en-US`)
        .then(resp => { 
          commit('createdGenres', resp.data.genres);
         })
        .catch(() => commit('moviesError'))
    },
    getMoviesInGenres: ({ commit, state }, payload) => {
      commit('moviesRequest');
      axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${state.apiKey}&with_genres=${payload}`)
        .then(resp => {
          commit('createdMoviesList', resp.data.results);
        })
        .then(() => commit('moviesSuccess'))
        .catch(() => commit('moviesError'))
    }
  }
}