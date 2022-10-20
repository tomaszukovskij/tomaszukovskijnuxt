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
      prefetch: true,
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
        content: 'Tomas Žukovskij jūsų kūrybos fotografija'
      }
    ],
  },
  mounted() {
    backToTop();
    this.$store.dispatch('updateMenuOpen', false)
  },
}
</script>

<style scoped>

</style>
