<template>
  <div v-if="$apollo.loading">Loading...</div>
  <div
    v-else
    class="page-text"
  >
    <h1>{{ displayPageTitle }}</h1>
    <div
      v-if="pageContent"
      class="page-content"
      v-html="pageContent"
    />
    <page-gallery
      v-if="pageGallery"
      :desktop-gallery="pageGallery"
    />
  </div>
</template>

<script>
import { string } from 'vue-types';
import { singlePage } from '@/graphql/pages';
import PageGallery from '@/components/PageComponents/PageGallery';
export default {
  name: 'PageSingle',
  components: {
    PageGallery,
  },
  props: {
    pageTitle: string,
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
  },
  mounted() {
    this.changeLoadingState();
  },
  methods: {
    changeLoadingState() {
      this.$store.commit('setState', false);
    }
  }
}
</script>

<style scoped lang="scss">
.page-content {
  margin-bottom: 100px;
}
</style>

