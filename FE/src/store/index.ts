import { get } from '@/api/request';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {},
    card: {},
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_CARD(state, payload) {
      state.card = Object.assign(state.card, payload);
    },
  },
  actions: {
    async GET_CARD({ commit }, id) {
      const response = await get(`/getCard/${id}`);
      if (response.errcode === 0) {
        commit('UPDATE_CARD', response.data);
      }
    },
  },
});

export default store;
