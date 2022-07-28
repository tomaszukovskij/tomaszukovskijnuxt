<template>
  <div v-if="$apollo.loading">Loading...</div>
  <div
      v-else
      class="page-text"
  >
    <h1>{{ displayPageTitle }}</h1>
    <div
      v-if="pageContent"
      v-html="pageContent"
      class="page-content"
    />
    <page-gallery
      v-if="pageGallery"
      :desktop-gallery="pageGallery"
    />
  </div>
</template>

<script>
import t from 'vue-types';
import { singlePage } from '@/graphql/pages';
import PageGallery from '@/components/PageComponents/PageGallery';
export default {
  name: 'PageSingle',
  props: {
    pageTitle: t.string,
  },
  apollo: {
    pages: {
      query: singlePage,
      prefetch: true,
      fetchPolicy: 'cache-first',
      variables () {
        return {
          title: this.pageTitle,
        }
      },
    },
  },
  components: {
    PageGallery,
  },
  computed: {
    displayPageTitle() {
      return this.pages.nodes[0].title;
    },
    pageContent() {
      return this.pages.nodes[0].content;
    },
    pageGallery() {
      return this.pages.nodes[0].peoplesPage.gallery;
    },
  }
}
</script>

<style scoped lang="scss">
.page-content {
  margin-bottom: 100px;
}
</style>

