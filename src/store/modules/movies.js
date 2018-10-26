import axios from 'axios';

export default {
  namespaced: true,
  state: {
    apiKey: '5d78da0983a3a7993b6640b921785bb2',
    status: '',
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
    }
  },
  mutations: {
    moviesRequest: (state) => {
      state.status = 'loading...';
      console.log(state.status);
    },
    moviesSuccess: (state) => {
      state.status = 'OK';
      console.log(state.status);
    },
    moviesError: (state) => {
      state.status = 'Error!!!!';
      console.log(state.status);
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
      commit('moviesRequest');
      axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${state.apiKey}&language=en-US`)
        .then(resp => { 
          commit('createdGenres', resp.data.genres);
         })
        .then(() => commit('moviesSuccess'))
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