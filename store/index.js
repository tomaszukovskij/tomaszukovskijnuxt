import { Store } from 'vuex';

const createStore = () => {
  return new Store({
    state: {
      menuOpen: false,
      currentLocale: 'lt',
    },
    mutations: {
      setMenuOpen (state, payload) {
        state.menuOpen = payload;
      },
      setCurrentLocale(state, locale) {
        state.currentLocale = locale;
      }
    },
    actions: {
      updateMenuOpen({ commit }, payload) {
        commit('setMenuOpen', payload);
      },
      getCurrentLocale({ commit }) {
        const fromLocal = JSON.parse(localStorage.getItem('tzLocale'));
        const locale = fromLocal ?? 'lt';
        commit('setCurrentLocale', locale);
      },
      changeCurrentLocale({ commit, state }) {
        const changedLocale = state.currentLocale === 'lt' ? 'en' : 'lt';
        localStorage.setItem('tzLocale', JSON.stringify(changedLocale));
        console.info(changedLocale);
        commit('setCurrentLocale', changedLocale);
        window.location.reload();
      }
    }
  })
}

export default createStore;
