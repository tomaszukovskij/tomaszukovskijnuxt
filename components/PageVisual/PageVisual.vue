<template>
  <div
    id="page"
  >
    <div class="wrapper">
      <h1>{{ localeTitle }}</h1>
      <div class="page__heading">
        <h2>{{ displayPageHeadingText }}</h2>
      </div>
      <div
        v-if="displayPageBulletPoints"
        class="page__bullets"
      >
        <div
          v-html="displayPageBulletPoints"
        />
        <div
          class="page__contacts"
        >
          <a href="mailto:tomas.zukovkij@gmail.com">tomas.zukovkij@gmail.com</a>
          <a href="tel:+3706 09 52811">+3706 09 52811</a>
          <a href="https://www.instagram.com/tomaszukovskij/">@tomaszukovskij</a>
        </div>
      </div>
    </div>
    <page-gallery
      v-if="pageGallery"
      :desktop-gallery="pageGallery"
      :order-view="true"
      class="page__gallery"
    />
  </div>
</template>

<script>
import { string, array } from 'vue-types';
import PageGallery from '@/components/PageComponents/PageGallery';

export default {
  name: 'PageVisual',
  components: {
    PageGallery,
  },
  props: {
    localeTitle: string,
    pages: array,
  },
  computed: {
    displayPageHeadingText() {
      return this.pages.nodes[0].peoplesPage.headingText;
    },
    displayPageBulletPoints() {
      return this.pages.nodes[0].peoplesPage.serviceBulletPointLt;
    },
    pageContent() {
      return this.pages.nodes[0].content;
    },
    pageGallery() {
      return this.pages.nodes[0].peoplesPage.gallery;
    },
  },
}
</script>

<style lang="scss">
#page {
  letter-spacing: .5px;
}
.page__bullets {
  max-width: 700px;
  width: 100%;
  margin: 100px auto 0 auto;
  line-height: 1.7;
}
.page__heading {
  h2 {
    font-size: 1.5em;
    font-weight: 400;
    font-family: 'Oxygen', sans-serif;
  }
}
.page__contacts {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  line-height: 1.7;

  a {
    color: #006d77;
  }
}
.page__gallery {
  margin-top: 100px;
}
</style>
