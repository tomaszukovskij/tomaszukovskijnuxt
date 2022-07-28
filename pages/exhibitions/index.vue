<template>
  <div>
    <h1>Exhibitions</h1>
    <div v-if="$apollo.loading">Loading...</div>
    <portfolio-list
      v-else
      :post-type="'exhibitions'"
      :list="allExhibitions.nodes"/>
  </div>
</template>

<script>
import PortfolioList from '~/components/PortfolioComponents/PortfolioList';
import { exhibitions } from '@/graphql/exhibitions';
export default {
  name: 'ExhibitionsIndex',
  components: {
    PortfolioList,
  },
  apollo: {
    allExhibitions: {
      query: exhibitions,
    },
  },
  head: {
    title: 'Tomas Zukovskij - exhibitions',
    meta: [
      {
        content: 'Tomas Zukovskij exhibitions. Tomas Zukovskij parodos.'
      }
    ],
  }
}
</script>

<style scoped>

</style>
