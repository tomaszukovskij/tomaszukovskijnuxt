import ac from '~/store/checkoutStore/actions';
import mut from '~/store/checkoutStore/mutations';
import get from '~/store/checkoutStore/getters';

export const state = {
  checkoutList: [],
  currentLocale: 'lt',
}

export const actions = ac;
export const mutations = mut;
export const getters = get;
