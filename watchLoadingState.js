export default (isLoading, countModifier) => {
  this.$store.commit('setState', isLoading);
  console.log('Global loading', isLoading, countModifier)
}
