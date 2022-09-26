<template>
  <div>
    <page-gallery-images
      :images="desktopGallery"
      :order-view="orderView"
      :is-index="isIndex"
    />
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
    orderView: t.bool.def(false),
    isIndex: t.bool.def(false),
  },
}
</script>
