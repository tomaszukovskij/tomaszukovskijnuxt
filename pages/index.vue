<template>
  <div class="wrapper">
    <div class="page-text">
      <h1>Tomas Zukovskij fotografas kuris nenori, kad atrodytumet kaip VISI</h1>
      <div class="page__index__services">
        <nuxt-link
          to="/portraits"
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
              <h3>Portretai</h3>
              <span>nuo 300€</span>
            </div>
            <small>plačiau</small>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/business"
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
              <h3>Verslui įvaizdinė <br> fotosesija</h3>
              <span>nuo 550€</span>
            </div>
            <small>plačiau</small>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/lookbook"
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
              <h3>Lookbook arba <br> produktų fotografija</h3>
              <span>nuo 550€</span>
            </div>
            <small>plačiau</small>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { HomePage } from '@/graphql/homepage';

export default {
  name: 'IndexPage',
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
  computed: {
    nodesLength() {
      return this.pages.nodes.length - 1;
    },
    portraitsImage() {
      return this.pages.nodes[this.nodesLength].homepage.portraitsImage;
    },
    businessImage() {
      return this.pages.nodes[this.nodesLength].homepage.businessImage;
    },
    lookbookImage() {
      return this.pages.nodes[this.nodesLength].homepage.lookbookImage;
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4em;
}
.page__index__services {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 80px;
  max-width: 500px;
  margin: 0 auto;

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
</style>
