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
      fetchPolicy: 'cache-first',
      variables: {
        title: 'People',
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
    this.$store.dispatch('updateMenuOpen', false)
  },
}
</script>

<style scoped>

</style>
