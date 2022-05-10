import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {},
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.user = {
        ...state.user,
        ...payload,
      };
    },
  },
  actions: {},
});

export default store;
