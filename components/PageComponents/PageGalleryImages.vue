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
      >
      <span
        v-if="image.caption"
        class="gallery-item__caption"
      >
        #{{ image.caption }}
      </span>
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
  width: 100%;
}
.gallery-item__caption {
  display: block;
  text-align: left;
  text-transform: lowercase;
  color: #9d8ad8;
  font-size: 1rem;
}
</style>
