<template>
  <div class="wrapper">
    <div class="home">
      <div class="home-about">
        <h1>
          {{ $t('homePage.welcomeMessage') }}
        </h1>
        <h2>
          {{ $t('homePage.welcomeMessage2') }}
        </h2>
      </div>
      <PrintsList :prints="getPrintList"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PrintsList from '~/components/shop/printsList/PrintsList.vue'
import {prints} from '@/graphql/prints';
import {backToTop} from '@/services/helpers';

export default {
  name: 'IndexPage',
  components: {
    PrintsList
  },
  layout: 'store',
  async fetch({ app, store }) {
    store.commit('printStore/setIsLoaded', true);
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: prints,
      prefetch: true,
      fetchPolicy: 'cache-first',
    });
    const { allPrints } = res.data;
    store.dispatch('printStore/addPrintsList', allPrints);
    store.commit('printStore/setIsLoaded', false);
  },
  computed: {
    ...mapState('printStore', ['isLoaded']),
    getPrintList() {
      return this.$store.state.printStore.printsList.nodes;
    },
  },
  apollo: {
    allPrints: {
      query: prints,
    },
  },
  head: {
    title: 'Tomas Žukovskij - parduotvė',
    meta: [
      {
        content: 'Tomas Žukovskij parodos.'
      }
    ],
  },
  mounted() {
    backToTop();
    console.log('@@@@@', this.getPrintList);
    this.$store.dispatch('updateMenuOpen', false)
  },
}
</script>

<style lang="scss" scoped>
.home-about {
  font-size: 1.5em;
  margin: 170px auto 240px auto;
  line-height: 1.5;
  font-family: "Rubik", sans-serif;
  position: relative;

  &::before {
    content: "";
    width: 30%;
    padding-top: 30%;
    background: #086a8e;
    position: absolute;
    right: 0;
    top: 30%;
    transform: translateY(-50%);
    opacity: .2;
    z-index: -1;

    @media all and (max-width: 576px) {
      content: none;
    }
  }
  h1 {
    max-width: 80%;
    font-size: 1.9em;
    font-weight: 400;

    @media all and (max-width: 800px) {
      font-size: 1.7em;
    }
    @media all and (max-width: 576px) {
      max-width: 100%;
      font-size: 1.5em;
    }
  }
  h2 {
    margin: 80px auto 0 auto;
    font-weight: 300;
    font-size: 1em;

    @media all and (max-width: 576px) {
      margin-top: 30px;
      width: 100%;
    }
  }

  @media all and (max-width: 1400px) {
    margin: 150px auto 170px auto;
  }

  @media all and (max-width: 576px) {
    font-size: 1.2em;
    margin: 70px auto 80px auto;
  }
}
</style>
