<template>
  <div
    class="page-text"
  >
    <h1>{{ pageTitle }}</h1>
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
import { string, array } from 'vue-types';
import PageGallery from '@/components/PageComponents/PageGallery';
export default {
  name: 'PageSingle',
  components: {
    PageGallery,
  },
  props: {
    pageTitle: string,
    pages: array,
  },
  computed: {
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

