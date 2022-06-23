<template>
  <div v-if="$apollo.loading">Loading...</div>
  <div v-else>
    <h1>{{ pageTitle }}</h1>
    <page-gallery
      :desktop-gallery="pageGallery"
      :mobile-gallery="galleryMobile"
    />
  </div>
</template>

<script>
import PageGallery from '@/components/PageComponents/PageGallery';
import { peoplesPage } from '@/graphql/pages';
export default {
  name: 'PeoplesIndex',
  apollo: {
    pages: {
      query: peoplesPage,
      variables () {
        return {
          title: 'Peoples',
        }
      },
    },
  },
  components: {
    PageGallery,
  },
  computed: {
    pageTitle() {
      return this.pages.nodes[0].title;
    },
    pageGallery() {
      return this.pages.nodes[0].peoplesPage.gallery;
    },
    galleryMobile() {
      return this.pages.nodes[0].peoplesPage.galleryMobile;
    },
  }
}
</script>

<style scoped>

</style>
