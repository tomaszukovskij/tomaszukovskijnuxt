<template>
  <div class="wrapper">
    <page-single :page-title="'Coincidences'" />
  </div>
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
import { backToTop } from '@/services/helpers';

export default {
  name: 'CoincidencesIndex',
  components: {
    PageSingle
  },
  head: {
    title: 'Tomas Žukovskij - street',
    meta: [
      {
        content: 'Tomas Žukovskij street photography. Tomas Žukovskij gatvės fotografija.'
      }
    ],
  },
  mounted() {
    backToTop();
    this.$store.dispatch('updateMenuOpen', false)
  },
}
</script>
