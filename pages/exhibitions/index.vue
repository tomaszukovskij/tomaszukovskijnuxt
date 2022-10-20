<template>
  <div class="wrapper">
    <h1>{{ $t('menu.exhibitions') }}</h1>
    <portfolio-list
      :post-type="'exhibitions'"
      :list="allExhibitions.nodes"/>
  </div>
</template>

<script>
import PortfolioList from '~/components/PortfolioComponents/PortfolioList';
import { exhibitions } from '@/graphql/exhibitions';
import { backToTop } from '@/services/helpers';

export default {
  name: 'ExhibitionsIndex',
  components: {
    PortfolioList,
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: exhibitions,
      prefetch: true,
      fetchPolicy: 'cache-first',
    });
    const { allExhibitions } = res.data;
    return { allExhibitions };
  },
  apollo: {
    allExhibitions: {
      query: exhibitions,
    },
  },
  head: {
    title: 'Tomas Žukovskij - parodos',
    meta: [
      {
        content: 'Tomas Žukovskij parodos.'
      }
    ],
  },
  mounted() {
    backToTop();
    this.$store.dispatch('updateMenuOpen', false)
  },
}
</script>
