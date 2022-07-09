<template>
  <div>
    <div
      v-for="image in images"
      :key="image.slug"
      class="gallery-item"
    >
      <img
        :src="image.sourceUrl"
        :alt="image.altText"
        :class="getImageOrientation(image)"
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
  methods: {
    getImageOrientation(image) {
      const width = image.mediaDetails.sizes[0].width;
      const height = image.mediaDetails.sizes[0].height;
      return width > height ? 'horizontal' : 'portrait';
    },
  },
}
</script>

<style scoped lang="scss">
.gallery-item {
  width: 100%;
  margin-bottom: 20vh;
  text-align: center;

  @media all and (max-width: 1024px) {
    margin-bottom: 15vh;
  }

  @media all and (max-width: 576px) {
    margin-bottom: 80px;
  }
}
img {
  height: 80vh;
  @media all and (max-width: 1024px) {
    &.horizontal {
      height: auto;
      width: 100%;
    }
  }

  @media all and (max-width: 576px) {
    height: auto;
    width: 100%;
  }
}
</style>
