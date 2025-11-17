<template>
  <page-visual
    :locale-title="$t('services.lookbook')"
    :pages="pages"
  />
</template>

<script>
import { singlePage } from '@/graphql/pages';
import PageVisual from '@/components/PageVisual/PageVisual';
import { backToTop } from '@/services/helpers';

export default {
  name: 'LookbookIndex',
  components: {
    PageVisual,
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: singlePage,
      prefetch: false,
      variables: {
        title: 'Lookbook',
      },
    });
    const { pages } = res.data;
    return { pages };
  },
  head: {
    title: 'Tomas Žukovskij - Lookbook arba produktų fotografija',
    meta: [
      {
        name: 'description',
        content: 'Mados fotografija, drabužių fotografavimas, produktų fotografija, lookbook fotografija, reklaminė'
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
            title: 'Lookbook',
          },
        });
        this.pages = data.pages;
      } catch (error) {
        console.error('Error fetching fresh lookbook data:', error);
      }
    }
  },
}
</script>

<style scoped>

</style>
