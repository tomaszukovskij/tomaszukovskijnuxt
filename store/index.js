// import { Store } from 'vuex';
// import todo from './todo';
// import printStore from './printStore';

export const state = () => ({
  menuOpen: false,
  currentLocale: 'lt',
  printsList: [],
});

export const mutations = {
  setMenuOpen (state, payload) {
    state.menuOpen = payload;
  },
  setCurrentLocale(state, locale) {
    state.currentLocale = locale;
  },
  setList(state, payload) {
    state.printsList = payload;
  },
}

export const actions = {
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
    commit('setCurrentLocale', changedLocale);
    window.location.reload();
  },
  setPrintsList({ commit }, payload) {
    commit('setList', payload);
  }
}


// const createStore = () => {
//   return new Store({
//     state: {
//       menuOpen: false,
//       currentLocale: 'lt',
//       printsList: [],
//     },
//     mutations: {
//       setMenuOpen (state, payload) {
//         state.menuOpen = payload;
//       },
//       setCurrentLocale(state, locale) {
//         state.currentLocale = locale;
//       },
//       setList(state, payload) {
//         state.printsList = payload;
//       },
//     },
//     actions: {
//       updateMenuOpen({ commit }, payload) {
//         commit('setMenuOpen', payload);
//       },
//       getCurrentLocale({ commit }) {
//         const fromLocal = JSON.parse(localStorage.getItem('tzLocale'));
//         const locale = fromLocal ?? 'lt';
//         commit('setCurrentLocale', locale);
//       },
//       changeCurrentLocale({ commit, state }) {
//         const changedLocale = state.currentLocale === 'lt' ? 'en' : 'lt';
//         localStorage.setItem('tzLocale', JSON.stringify(changedLocale));
//         commit('setCurrentLocale', changedLocale);
//         window.location.reload();
//       },
//       setPrintsList({ commit }, payload) {
//         commit('setList', payload);
//       }
//     },
//     modules: {
//       todo,
//       printStore,
//     }
//   })
// }
//
// export default createStore;
