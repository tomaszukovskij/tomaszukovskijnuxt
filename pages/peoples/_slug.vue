<template>
  <div>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <div class="page-heading">
        <h1>{{ peoples.title }}</h1>
      </div>
      <div class="page-content text-center">
        <div v-html="peoples.peoples.description"></div>
      </div>
      <div class="page-gallery">
        <div
          v-for="(item, index) in peoples.peoples.gallery"
          :key="index"
        >
          <img :src="item.sourceUrl" :alt="item.altText">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { singlePeople } from '@/graphql/works';

export default {
  name: 'PeopleSlug',
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  apollo: {
    peoples: {
      query: singlePeople,
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
  mounted() {
    console.info(this.peoples);
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/singlePage.scss";
</style>
