<template>
  <div
    id="page"
  >
    <section class="wrapper">
      <h1>{{ localeTitle }}</h1>
      <div
        v-if="displayPageHeadingText"
        class="page__heading">
        <h2>{{ getHeading }}</h2>
      </div>
      <div
        v-if="displayPageBulletPoints || displayPageBulletPointsEn"
        class="page__bullets"
      >
        <div
          v-html="getPageBulletPoints"
        />
        <div
          class="page__contacts"
        >
          <a href="mailto:tomas.zukovkij@gmail.com">tomas.zukovkij@gmail.com</a>
          <a href="tel:+3706 09 52811">+3706 09 52811</a>
          <a href="https://www.instagram.com/tomaszukovskij/">@tomaszukovskij</a>
        </div>
      </div>
    </section>
    <section id="page__works">
      <div class="wrapper">
        <h2>{{ $t('common.works') }}</h2>
      </div>
    </section>
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
    displayPageHeadingTextEn() {
      return this.pages.nodes[0].peoplesPage.headingTextEn;
    },
    displayPageBulletPoints() {
      return this.pages.nodes[0].peoplesPage.serviceBulletPointLt;
    },
    displayPageBulletPointsEn() {
      return this.pages.nodes[0].peoplesPage.serviceBulletPointNewEn;
    },
    pageContent() {
      return this.pages.nodes[0].content;
    },
    pageGallery() {
      return this.pages.nodes[0].peoplesPage.gallery;
    },
    getHeading() {
      return this.$i18n.locale === 'lt'
        ? this.displayPageHeadingText
        : this.displayPageHeadingTextEn;
    },
    getPageBulletPoints() {
      return this.$i18n.locale === 'lt'
        ? this.displayPageBulletPoints
        : this.displayPageBulletPointsEn;
    }
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

  @media all and (max-width: 576px) {
    margin-top: 60px;

    p {
      margin: 0px 0;
    }
  }
}
.page__heading {
  h2 {
    font-size: 1.5em;
    font-weight: 400;
    font-family: 'Dosis', sans-serif;
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
  @media all and (max-width: 576px) {
    margin-top: 40px;
  }
}
#page__works {
  margin-top: 100px;
  text-align: center;
  @media all and (max-width: 576px) {
    margin-top: 60px;
  }
}
</style>
