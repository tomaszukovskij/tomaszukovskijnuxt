<template>
  <div class="wrapper">
    <page-single :page-title="'Portraits'" />
  </div>
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
import { backToTop } from '@/services/helpers';
export default {
  name: 'PeoplesIndex',
  components: {
    PageSingle
  },
  head: {
    title: 'Tomas Žukovskij - People',
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
