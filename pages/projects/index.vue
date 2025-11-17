<template>
  <div class="wrapper">
    <h1>{{ $t('menu.projects') }}</h1>
    <portfolio-list
      :post-type="'projects'"
      :list="allProjects.nodes"/>
  </div>
</template>

<script>
import PortfolioList from '~/components/PortfolioComponents/PortfolioList';
import { projects } from '~/graphql/projects';
import { backToTop } from '@/services/helpers';

export default {
  name: 'ExhibitionsIndex',
  components: {
    PortfolioList,
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: projects,
      prefetch: true,
      fetchPolicy: 'cache-first',
    });
    const { allProjects } = res.data;
    return { allProjects };
  },
  apollo: {
    allProjects: {
      query: projects,
    },
  },
  head: {
    title: 'Tomas Žukovskij - projektai',
    meta: [
      {
        content: 'Tomas Žukovskij projektai.'
      }
    ],
  },
  async mounted() {
    backToTop();
    this.$store.dispatch('updateMenuOpen', false);

    // Fetch fresh data from WordPress on client-side
    if (process.client) {
      try {
        const client = this.$apollo.getClient();
        const { data } = await client.query({
          query: projects,
          fetchPolicy: 'network-only', // Skip cache to get fresh data
        });
        this.allProjects = data.allProjects;
      } catch (error) {
        console.error('Error fetching fresh projects data:', error);
      }
    }
  },
}
</script>
