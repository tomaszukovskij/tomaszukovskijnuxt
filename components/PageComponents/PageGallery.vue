<template>
  <div id="page-gallery">
    <template v-if="!isMobileShow">
      <page-gallery-images :images="desktopGallery" />
    </template>
    <template v-else>
      <page-gallery-images :images="mobileGallery" />
    </template>
  </div>
</template>

<script>
import t from 'vue-types';
import PageGalleryImages from '@/components/PageComponents/PageGalleryImages';
export default {
  name: 'PageGallery',
  props: {
    desktopGallery: t.array,
    mobileGallery: t.array,
  },
  components: {
    PageGalleryImages,
  },
  computed: {
    isMobileShow() {
      return this.$mq === 'md';
    },
  }
}
</script>

<style scoped lang="scss">
#page-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
