import { router } from '../../routes';
import { AUTH_DATA } from '../../mocks';

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    wrongPassword: false,
  },
  getters: {
    isAuthorized: (state) => {
      return !!state.token;
    },
    wrongPassword: (state) => {
      return state.wrongPassword;
    },
    
  },
  mutations: {
    authSuccess: (state, payload) => {
      state.token = payload.token;
      state.wrongPassword = false
    },
    authError: (state) => {
      state.wrongPassword = true;
    }
  },
  actions: {
    authorization: ({commit}, payload) => {
      setTimeout(() => {
        if(AUTH_DATA.login === payload.login && AUTH_DATA.password === payload.password) {
          localStorage.setItem('token', AUTH_DATA.token);
          commit('authSuccess', {token: AUTH_DATA.token});
          router.push({name: 'home'});
        } else {
          commit('authError');
          localStorage.removeItem('token');
        }
      }, 1000);
    }
  }
}