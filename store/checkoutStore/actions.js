import * as actionTypes from '../actionTypes'
import * as mutationTypes from '../mutationTypes'

export default {
  [actionTypes.ADD_ITEM_TO_CHECKOUT]: ({ commit, dispatch }, payload) => {
    commit(mutationTypes.ADD_CHECKOUT_LIST, payload)
    dispatch('addCheckoutToLocalStorage')
  },
  [actionTypes.REMOVE_ITEM_FROM_CHECKOUT]: (
    { commit, state, dispatch },
    indexEl
  ) => {
    const newCheckout = state.checkoutList.filter(
      (_, index) => index !== indexEl
    )
    commit(mutationTypes.UPDATE_CHECKOUT_LIST, newCheckout)
    dispatch('addCheckoutToLocalStorage')
  },
  [actionTypes.ADD_CHECKOUT_TO_LOCAL_STORAGE]: ({ state }) => {
    localStorage.setItem(
      'checkoutListItems',
      JSON.stringify(state.checkoutList)
    )
  },
  [actionTypes.GET_CHECKOUT_FROM_LOCAL_STORAGE]: ({ commit }) => {
    const fromLocal = JSON.parse(localStorage.getItem('checkoutListItems'))
    commit(mutationTypes.UPDATE_CHECKOUT_LIST, fromLocal || [])
  },
  [actionTypes.GET_CURRENT_LOCALE]: ({ commit }) => {
    const fromLocal = JSON.parse(localStorage.getItem('bkLocale'))
    commit(mutationTypes.SET_CURRENT_LOCALE, fromLocal ?? 'lt')
  },
  [actionTypes.CHANGE_CURRENT_LOCALE]: ({ commit, state }) => {
    const changedLocale = state.currentLocale === 'lt' ? 'en' : 'lt'
    localStorage.setItem('bkLocale', JSON.stringify(changedLocale))
    commit(mutationTypes.SET_CURRENT_LOCALE, changedLocale)
  },
}
