<template>
  <div
    id="page-gallery"
    :class="{ 'index-gallery': isIndex }"
  >
    <div
      v-for="image in images"
      :key="image.slug"
      class="gallery-item"
    >
      <div
        :class="[
          {'order-default': orderView},
          imageCaption(image),
          getImageOrentation(image)
         ]"
      >
        <img
          :src="image.sourceUrl"
          :alt="image.altText"
        >
      </span>
      </div>
    </div>
  </div>
</template>

<script>
import { array, bool } from 'vue-types';
export default {
  name: 'PageGalleryImage',
  props: {
    images: array,
    orderView: bool,
    isIndex: bool,
  },
  methods: {
    imageCaption(image) {
      if(!this.isIndex) return image.caption;
    },
    getImageOrentation(image) {
      if(this.isIndex) {
        const width = image.mediaDetails.sizes[0].width;
        const height = image?.mediaDetails.sizes[0].height;
        if( width > height) {
          return 'landscape'
        }
        return 'portrait';
      }
    }
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
.gallery-item {
  width: 100%;
  margin-bottom: 20vh;
  text-align: center;
  &:last-child {
    margin-bottom: 0;
  }

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
  display: flex;
  text-align: left;
  text-transform: lowercase;
  color: #9d8ad8;
  font-size: 1rem;
  align-items: center;
  p {
    margin: 0;
  }
}
.order-default {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 10%;
  @media all and (max-width: 576px) {
    padding: 0 40px;
  }
}

.top-to-left:not(.index-gallery) {
  max-width: none;
  padding: 0;
}
.small-to-right:not(.index-gallery) {
  padding-left: 40%;
  padding-right: 0;
  max-width: 1500px;
}
.small-to-center:not(.index-gallery) {
  max-width: 60%;
}
.portrait {
  padding: 0 20%;
}
</style>
