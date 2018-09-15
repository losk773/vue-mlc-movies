import { router } from '../../routes';

export default {
  namespaced: true,
  state: {
    isAuthorized: true,
    wrongPassword: false,
    user: {
      id: 1,
      login: 'losk773',
      password: '123'
    }
  },
  getters: {
    isAuthorized: (state) => {
      return state.isAuthorized;
    },
    user: (state) => {
      return state.user;
    },
    wrongPassword: (state) => {
      return state.wrongPassword;
    },
    
  },
  mutations: {
    authorization: (state, payload) => {
      if(state.user.login === payload.login && state.user.password === payload.password) {
        state.isAuthorized = true;
        state.wrongPassword = false;
        router.push({name: 'home'});
      } else {
        state.wrongPassword = true;
      }
    }
  },
  actions: {
    authorization: (store, payload) => {
      store.commit('authorization', payload);
    }
  }
}