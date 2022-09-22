import { Store } from 'vuex';

const createStore = () => {
  return new Store({
    state: {
      menuOpen: false,
    },
    mutations: {
      setMenuOpen (state, payload) {
        state.menuOpen = payload;
      }
    },
    actions: {
      updateMenuOpen({ commit }, payload) {
        commit('setMenuOpen', payload);
      }
    }
  })
}

export default createStore;
