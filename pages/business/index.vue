<template>
  <div>
    <page-visual
      :locale-title="$t('services.business')"
      :pages="pages"
    />
  </div>
</template>

<script>
import PageVisual from '@/components/PageVisual/PageVisual';
import { singlePage } from '@/graphql/pages';
import { backToTop } from '@/services/helpers';
export default {
  name: 'BusinesssIndex',
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
        title: 'Business identity',
      },
    });
    const { pages } = res.data;
    return { pages };
  },
  head: {
    title: 'Tomas Žukovskij - Business',
    meta: [
      {
        content: 'Tomas Žukovskij people photography. Tomas Žukovskij fotografija.'
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
