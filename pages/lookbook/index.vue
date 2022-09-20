<template>
  <page-visual
    :locale-title="'Lookbook arba produktų fotografija'"
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
      prefetch: true,
      fetchPolicy: 'cache-first',
      variables: {
        title: 'Lookbook',
      },
    });
    const { pages } = res.data;
    return { pages };
  },
  head: {
    title: 'Tomas Žukovskij - Lookbook',
    meta: [
      {
        content: 'Tomas Žukovskij lookbook photography. Tomas Žukovskij lookbook fotografija.'
      }
    ],
  },
  mounted() {
    backToTop();
  },
}
</script>

<style scoped>

</style>
