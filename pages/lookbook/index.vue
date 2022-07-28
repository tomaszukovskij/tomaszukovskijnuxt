<template>
  <page-single :page-title="'Lookbook'" />
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
export default {
  name: 'LookbookIndex',
  components: {
    PageSingle
  },
  head: {
    title: 'Tomas Zukovskij - Lookbook',
    meta: [
      {
        content: 'Tomas Zukovskij lookbook photography. Tomas Zukovskij lookbook fotografija.'
      }
    ],
  }
}
</script>

<style scoped>

</style>
