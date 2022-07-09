<template>
  <div id="page-gallery">
    <page-gallery-images :images="desktopGallery" />
  </div>
</template>

<script>
import t from 'vue-types';
import PageGalleryImages from '@/components/PageComponents/PageGalleryImages';
export default {
  name: 'PageGallery',
  components: {
    PageGalleryImages,
  },
  props: {
    desktopGallery: t.array,
  },
}
</script>

<style scoped lang="scss">
#page-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
