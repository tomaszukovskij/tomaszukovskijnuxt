<template>
  <nuxt-link :to="`/exhibitions/${item.slug}`" class="portfolio-item">
    <img :src="item.exhibitions.image.sourceUrl" alt="item.peoples.image.altText">
    <h2> {{ item.title }}</h2>
  </nuxt-link>
</template>

<script>
import t from 'vue-types';
export default {
  name: 'PortraitsListCard',
  props: {
    item: t.object,
    postType: t.string,
  },
}
</script>

<style scoped lang="scss">
.portfolio-item {
  width: 70%;

  @media all and (max-width: 576px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
}
</style>
