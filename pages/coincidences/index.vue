<template>
  <div class="wrapper">
    <page-single :page-title="'Coincidences'" />
  </div>
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
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
  }
}
</script>

<style scoped>

</style>
