<template>
  <div class="wrapper">
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <h1>{{ exhibitions.title }}</h1>
      <div class="page-content">
        <div
          v-html="exhibitions.exhibitions.description"
          class="page-text"
        />
      </div>
      <div class="page-gallery">
        <div
          v-for="(item, index) in exhibitions.exhibitions.gallery"
          :key="index"
          class="page-gallery__item"
        >
          <img :src="item.sourceUrl" :alt="item.altText">
          <div class="page-gallery__about">
            <h3>{{ item.altText }}</h3>
            <div v-html="item.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { singleExhibition } from '@/graphql/exhibitions';
import { backToTop } from '@/services/helpers';

export default {
  name: 'PeopleSlug',
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  head: {
    title: `Tomas Žukovskij - exhibition`,
    meta: [
      {
        content: 'Tomas Žukovskij exhibition photography. Tomas Žukovskij parodos.'
      }
    ],
  },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { slug } = params;
    const res = await client.query({
      query: singleExhibition,
      prefetch: true,
      fetchPolicy: 'cache-first',
      variables: {
        slug
      }
    });
    const { exhibitions } = res.data;
    return { exhibitions };
  },
  computed: {
    pageTitle() {
      return 'Tomas';
    }
  },
  async mounted() {
    backToTop();
    this.$store.dispatch('updateMenuOpen', false);

    // mounted() only runs on the client, so this always fetches fresh data from WordPress
    try {
      const client = this.$apollo.getClient();
      const { data } = await client.query({
        query: singleExhibition,
        fetchPolicy: 'network-only', // Skip cache to get fresh data
        variables: {
          slug: this.slug
        }
      });
      this.exhibitions = data.exhibitions;
    } catch (error) {
      console.error('Error fetching fresh exhibition data:', error);
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/singlePage.scss";
.page-gallery {
  margin-top: 100px;
}
.page-gallery__about {
  padding: 20px;
  @media all and (max-width: 576px) {
    padding: 0;
  }
}
.page-gallery__item {
  width: 100%;
  margin-bottom: 40px;
  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100vh;
    max-height: 100svh;
    margin: 0 auto;
    // Leave room for the 77px fixed header on desktop
    @media all and (min-width: 577px) {
      max-height: calc(100vh - 77px);
      max-height: calc(100svh - 77px);
    }
  }
  @media all and (max-width: 576px) {
    margin-bottom: 10px;
  }
}
</style>
