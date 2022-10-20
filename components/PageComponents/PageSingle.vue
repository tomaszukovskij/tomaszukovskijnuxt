<template>
  <div
    class="page-text"
  >
    <h1>{{ pageTitle }}</h1>
    <div
      v-if="getHeading"
      class="page-content"
      v-html="getHeading"
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
    pageHeading() {
      return this.pages.nodes[0].peoplesPage.headingText;
    },
    pageHeadingEn() {
      return this.pages.nodes[0].peoplesPage.headingTextEn;
    },
    pageGallery() {
      return this.pages.nodes[0].peoplesPage.gallery;
    },
    getHeading() {
      return this.$i18n.locale === 'lt'
        ? this.pageHeading
        : this.pageHeadingEn;
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
  line-height: 1.5;
}
</style>

