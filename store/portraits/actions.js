import * as actionTypes from './actionTypes';
import * as mutationTypes from './mutationTypes';

export default {
  async [actionTypes.SET_PORTRAITS_LIST]({ commit }) {
    const response = await this.$axios.$get('/wp/v2/portfolio');
    commit(mutationTypes.SET_LIST, response);
  }
}
