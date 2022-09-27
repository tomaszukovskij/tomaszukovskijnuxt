<template>
  <div class="wrapper">
    <page-single
      :page-title="$t('menu.aboutMe')"
      :pages="pages"
    />
  </div>
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
import { backToTop } from '@/services/helpers';
import { singlePage } from '@/graphql/pages';
export default {
  name: 'AboutIndex',
  components: {
    PageSingle
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client.query({
      query: singlePage,
      prefetch: true,
      fetchPolicy: 'cache-first',
      variables: {
        title: 'About me',
      },
    });
    const { pages } = res.data;
    return { pages };
  },
  head: {
    title: 'Tomas Žukovskij - about me',
    meta: [
      {
        content: 'Tomas Žukovskij about photography. Tomas Žukovskij apie fotografija.'
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
