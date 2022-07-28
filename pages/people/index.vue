<template>
  <page-single :page-title="'Peoples'" />
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
export default {
  name: 'PeoplesIndex',
  components: {
    PageSingle
  },
  head: {
    title: 'Tomas Zukovskij - People',
    meta: [
      {
        content: 'Tomas Zukovskij people photography. Tomas Zukovskij fotografija.'
      }
    ],
  }
}
</script>

<style scoped>

</style>
