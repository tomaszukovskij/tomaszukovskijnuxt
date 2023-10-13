import * as actionTypes from './actionTypes'

// const printStore = {
//
// }
//
// export default printStore;


export const state = () => ({
  printsList: [],
  isLoaded: false,
  currentLocale: 'lt',
})

export const getters = {
  getPrintsList: (state) => state.printsList,
}

export const mutations = {
  setPrintsList(state, payload) {
    state.printsList = payload
  },
  setIsLoaded(state, status) {
    state.isLoaded = status
  },
}

export const actions = {
  async fetchPrintsList({ state, commit }) {
    commit('setIsLoaded', true)
    if (!state.printsList.length) {
      try {
        const response = await this.$axios.get('/wp/v2/prints?per_page=100')
        commit('setPrintsList', response.data)
      } catch (error) {
        console.error(error)
      }
    }
    commit('setIsLoaded', false)
  },
  addPrintsList({ commit }, payload) {
    commit('setPrintsList', payload)
  },
  // async postPrint({state}, buyerINfo) {
  //   state.isLoaded;
  //   try {
  //     const payload = {
  //       title: 'Real 2',
  //       ACF: true,
  //       acf: {
  //         order_name: 'nae',
  //       },
  //       content: `Name: ${buyerINfo.name} <br/> Email: ${buyerINfo.email} <br/> Address: ${buyerINfo.address} <br/> PostalCode: ${buyerINfo.postcode} <br/> Country: ${buyerINfo.country}`,
  //     };
  //     const token = Buffer.from(
  //       `orders:kuFan$s1skerZl^VTFvkIpLG`,
  //       'utf8'
  //     ).toString('base64');
  //     await axios.post('/wp/v2/orders', JSON.stringify(payload), {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Basic ${token}`,
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
  [actionTypes.GET_CURRENT_LOCALE]() {
    const fromLocal = JSON.parse(localStorage.getItem('bkLocale'))
    this.currentLocale = fromLocal ?? 'lt'
  },
  [actionTypes.CHANGE_CURRENT_LOCALE]() {
    const changedLocale = this.currentLocale === 'lt' ? 'en' : 'lt'
    localStorage.setItem('bkLocale', JSON.stringify(changedLocale))
    this.currentLocale = changedLocale
    window.location.reload()
  },
}
