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
  mounted() {
    backToTop();
    this.$store.dispatch('updateMenuOpen', false)
  },
}
</script>

<style scoped>

</style>
