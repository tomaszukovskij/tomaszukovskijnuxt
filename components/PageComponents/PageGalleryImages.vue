<template>
  <div>
    <div
      v-for="image in images"
      :key="image.slug"
      :class="mobileClass"
      class="gallery-item"
    >
      <img
        :src="image.sourceUrl"
        :alt="image.altText"
        :class="mobileClass"
      >
    </div>
  </div>
</template>

<script>
import t from 'vue-types';
export default {
  name: 'PageGalleryImage',
  props: {
    images: t.array,
  },
  computed: {
    mobileClass() {
      if (this.$mq === 'md') return 'mobile';
      return '';
    }
  }
}
</script>

<style scoped lang="scss">
.gallery-item {
  width: 100%;
  margin-bottom: 20vh;
  text-align: center;
  &.mobile {
    margin-bottom: 80px;
  }
}
img {
  height: 80vh;
  &.mobile {
    height: auto;
    width: 100%;
  }
}
</style>
