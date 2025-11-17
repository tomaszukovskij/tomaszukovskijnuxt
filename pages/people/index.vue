<template>
  <div class="wrapper">
    <page-single
      :page-title="$t('menu.peoples')"
      :pages="pages"
    />
  </div>
</template>

<script>
import { singlePage } from '@/graphql/pages';
import PageSingle from '@/components/PageComponents/PageSingle';
import { backToTop } from '@/services/helpers';

export default {
  name: 'PeoplesIndex',
  components: {
    PageSingle,
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: singlePage,
      prefetch: true,
      variables: {
        title: 'People',
      },
    });
    const { pages } = res.data;
    return { pages };
  },
  head: {
    title: 'Tomas Žukovskij - žmonės',
    meta: [
      {
        content: 'Tomas Žukovskij žmonių nuotraukų kolekcija'
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
          query: singlePage,
          fetchPolicy: 'network-only', // Skip cache to get fresh data
          variables: {
            title: 'People',
          },
        });
        this.pages = data.pages;
      } catch (error) {
        console.error('Error fetching fresh people data:', error);
      }
    }
  },
}
</script>

<style scoped>

</style>
