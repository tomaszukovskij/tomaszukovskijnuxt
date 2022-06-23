<template>
  <div>
    ID here {{ $route.params.slug }}
    <img
      :src="item[0].ACF.portfolio_content.main_image.url"
      :alt="item[0].title.rendered"
    >
  </div>
</template>

<script>
export default {
  name: '_id.vue',
  head() {
    return {
      title: 'New title for id',
    }
  },
  async asyncData({ $axios, params }) {
    const response = await $axios.$get(`/wp/v2/portfolio?slug=${params.slug}`)
    return { item: response }
  }
}
</script>

<style scoped>

</style>
