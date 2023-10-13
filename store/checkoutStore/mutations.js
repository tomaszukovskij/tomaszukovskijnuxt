import * as type from '../mutationTypes';

export default {
  [type.ADD_CHECKOUT_LIST]: (state, value) => {
    state.checkoutList.push(value);
  },
  [type.UPDATE_CHECKOUT_LIST]: (state, value) => {
    state.checkoutList = value;
  },
  [type.SET_CURRENT_LOCALE]: (state, value) => {
    state.currentLocale = value;
  },
}
