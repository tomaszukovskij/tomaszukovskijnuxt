<template>
  <page-single :page-title="'Coincidences'" />
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
export default {
  name: 'CoincidencesIndex',
  components: {
    PageSingle
  },
  head: {
    title: 'Tomas Zukovskij - street',
    meta: [
      {
        content: 'Tomas Zukovskij street photography. Tomas Zukovskij gatvės fotografija.'
      }
    ],
  }
}
</script>

<style scoped>

</style>
