<template>
  <div>
    <page-visual
      :locale-title="$t('services.portraits')"
      :pages="pages"
    />
  </div>
</template>

<script>
import PageVisual from '@/components/PageVisual/PageVisual';
import { singlePage } from '@/graphql/pages';
import { backToTop } from '@/services/helpers';
export default {
  name: 'PortraitsIndex',
  components: {
    PageVisual,
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: singlePage,
      variables: {
        title: 'Portraits',
      },
    });
    const { pages } = res.data;
    return { pages };
  },
  head: {
    title: 'Tomas Žukovskij - kitokia profilio nuotrauka',
    meta: [
      {
        name: 'description',
        content: 'Kitokia profilio nuotrauka, asmeninės fotosesijos, portretai'
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
            title: 'Portraits',
          },
        });
        this.pages = data.pages;
      } catch (error) {
        console.error('Error fetching fresh portraits data:', error);
      }
    }
  },
}
</script>

<style scoped>

</style>
