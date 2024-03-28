<template>
  <nuxt-link :to="localePath(`/${postType}/${item.slug}`)" class="portfolio-item">
    <img :src="imageUrl" alt="item.peoples.image.altText">
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
  computed: {
    imageUrl() {
      return this.item[this.postType].image.sourceUrl;
    },
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

  h2 {
    margin-top: 12px;

    @media all and (max-width: 576px) {
      font-size: 1.7em;
    }
  }
}
</style>
