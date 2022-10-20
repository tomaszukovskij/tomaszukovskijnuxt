<template>
  <div>
    <div class="wrapper">
      <section class="page-text">
        <h1>
          <span>{{ $t('indexSloganPt1') }}</span>{{ $t('indexSloganPt2') }}<span> {{ $t('indexSloganPt3') }}</span>{{ $t('indexSloganPt4') }}
        </h1>
        <div class="page__index__services">
          <nuxt-link
            :to="localePath('portraits')"
            class="page__index__services__item"
          >
            <div class="page__index__services__image">
              <img
                :src="portraitsImage.sourceUrl"
                :alt="portraitsImage.altText"
              >
            </div>
            <div class="page__index__services__info">
              <div>
                <h3>{{ $t('services.portraits')}}</h3>
                <span>{{ $t('common.from') }} {{ portraitsPrice }}€</span>
              </div>
              <small>{{ $t('common.more') }}</small>
            </div>
          </nuxt-link>
          <nuxt-link
            :to="localePath('business')"
            class="page__index__services__item"
          >
            <div class="page__index__services__image">
              <img
                :src="businessImage.sourceUrl"
                :alt="businessImage.altText"
              >
            </div>
            <div class="page__index__services__info">
              <div>
                <h3>{{ $t('services.business')}}</h3>
                <span>{{ $t('common.from') }} {{ businessPrice }}€</span>
              </div>
              <small>{{ $t('common.more') }}</small>
            </div>
          </nuxt-link>
          <nuxt-link
            :to="localePath('lookbook')"
            class="page__index__services__item"
          >
            <div class="page__index__services__image">
              <img
                :src="lookbookImage.sourceUrl"
                :alt="lookbookImage.altText"
              >
            </div>
            <div class="page__index__services__info">
              <div>
                <h3>{{ $t('services.lookbook')}}</h3>
                <span>{{ $t('common.from') }} {{ lookbookPrice }}€</span>
              </div>
              <small>{{ $t('common.more') }}</small>
            </div>
          </nuxt-link>
        </div>
      </section>
    </div>
    <section id="portfolio">
      <h2>{{ $t('indexBestWorks') }}</h2>
      <page-gallery
        :desktop-gallery="bestWorksGallery"
        :is-index="true"
      />
      <button
        v-if="!showMoreGalleryItems"
        id="showMore"
        type="button"
        :aria-label="$t('indexMore')"
        @click="showMoreGalleryItems = true"
      >
        {{ $t('indexMore') }}
      </button>
    </section>
  </div>
</template>

<script>
import { HomePage } from '@/graphql/homepage';
import PageGallery from '@/components/PageComponents/PageGallery';
import { backToTop } from '@/services/helpers';

export default {
  name: 'IndexPage',
  components: {
    PageGallery,
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: HomePage,
      prefetch: true,
      fetchPolicy: 'cache-first',
    });

    const { pages } = res.data;
    return { pages };
  },
  data() {
    return {
      showMoreGalleryItems: false,
    }
  },
  head: {
    title: 'Tomas Žukovskij - fotografijos paslaugos',
    meta: [
      {
        content: 'Tomas Žukovskij fotografuoja portrentus, prekės ženklo įvaizdines fotosesijas, lookbookus bei produktus'
      }
    ],
  },
  computed: {
    nodesLength() {
      return this.pages.nodes.length - 1;
    },
    portraitsImage() {
      return this.pages.nodes[this.nodesLength].homepage.portraitsImage;
    },
    portraitsPrice() {
      return this.pages.nodes[this.nodesLength].homepage.portraitsPrice;
    },
    businessImage() {
      return this.pages.nodes[this.nodesLength].homepage.businessImage;
    },
    businessPrice() {
      return this.pages.nodes[this.nodesLength].homepage.businessPrice;
    },
    lookbookImage() {
      return this.pages.nodes[this.nodesLength].homepage.lookbookImage;
    },
    lookbookPrice() {
      return this.pages.nodes[this.nodesLength].homepage.lookbookPrice;
    },
    bestWorksGallery() {
      return !this.showMoreGalleryItems
        ? this.pages.nodes[this.nodesLength].peoplesPage.gallery.slice(0, 4)
        : this.pages.nodes[this.nodesLength].peoplesPage.gallery;
    },
  },
  mounted() {
    backToTop();
    this.$store.dispatch('updateMenuOpen', false);
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4em;
  span {
    color: #006d77;
  }
  @media all and (max-width: 576px) {
    font-size: 3em;
    line-height: 1.4;
  }
}
.page__index__services {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 80px;
  max-width: 500px;
  margin: 0 auto;

  @media all and (max-width: 576px) {
    gap: 60px;
  }

  &__item {
    position: relative;
    img {
      width: 100%;
      display: block;
    }
  }
  &__image {
    position: relative;
    &::before {
      content:'';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #000;
      opacity: 0;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    div {
      width: 75%;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        height: 40px;
        width: 1px;
        background: #000;
        right: 0;
        top: 50%;
        margin-top: -20px;
      }
    }
    h3 {
      font-weight: 400;
      font-size: 1.6em;
      font-family: 'Oxygen', sans-serif;
      margin-top: 15px;
      margin-bottom: 10px;
      line-height: 1.2;
      white-space: pre-line;
    }
    span {
      margin-bottom: 10px;
    }
    small {
      width: 25%;
      text-align: center;
    }
  }
}
#portfolio {
  max-width: 1420px;
  margin: 200px auto 0 auto;
  text-align: center;
  @media all and (max-width: 576px) {
    margin-top: 100px;
  }
  h2 {
    margin-bottom: 100px;
    font-size: 2.5em;
    font-weight: 400;
    padding: 0 30px;

    @media all and (max-width: 576px) {
      font-size: 2.3em;
      margin-bottom: 60px;
    }
  }
}
#showMore {
  background: none;
  border: 0;
  outline: 0;
  font-size: .8em;
  background: #3e8c94;
  color: #fff;
  padding: 15px 30px;
  margin-top: 50px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #006d77;
  }
}
</style>
