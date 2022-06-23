import * as mutationTypes from './mutationTypes'

export default {
  [mutationTypes.SET_LIST](state, list) {
    state.portraitsList = list;
  },
}
