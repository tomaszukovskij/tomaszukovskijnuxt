<template>
  <div class="wrapper">
    <page-single
      :page-title="$t('menu.coincidences')"
      :pages="pages"
    />
  </div>
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
import { backToTop } from '@/services/helpers';
import { singlePage } from '@/graphql/pages';

export default {
  name: 'CoincidencesIndex',
  components: {
    PageSingle
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: singlePage,
      prefetch: true,
      variables: {
        title: 'Coincidences',
      },
    });
    const { pages } = res.data;
    return { pages };
  },
  head: {
    title: 'Tomas Žukovskij - atsitiktinumai',
    meta: [
      {
        content: 'Tomas Žukovskij atsitiktinumų kolekcijos fotografija'
      }
    ],
  },
  mounted() {
    backToTop();
    this.$store.dispatch('updateMenuOpen', false)
  },
}
</script>
