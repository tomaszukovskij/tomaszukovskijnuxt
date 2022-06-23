<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <h1>{{ exhibitions.title }}</h1>
      <div class="page-content">
        <div
          v-html="exhibitions.exhibitions.description"
          class="page-text"
        />
      </div>
      <div class="page-gallery">
        <div
          v-for="(item, index) in exhibitions.exhibitions.gallery"
          :key="index"
        >
          <img :src="item.sourceUrl" :alt="item.altText">
          <small>{{ item.altText }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { singleExhibition } from '@/graphql/exhibitions';

export default {
  name: 'PeopleSlug',
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  apollo: {
    exhibitions: {
      query: singleExhibition,
      variables () {
        return {
          slug: this.slug
        }
      }
    }
  },
  computed: {
    pageTitle() {
      return 'Tomas';
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/singlePage.scss";
</style>
