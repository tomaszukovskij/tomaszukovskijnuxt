export const state = () => ({
  loading: false,
})

export const mutations = {
  setState (state, bodyClass) {
    state.loading = bodyClass
  }
}
