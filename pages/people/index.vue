<template>
  <div class="wrapper">
    <page-single :page-title="'Portraits'" />
  </div>
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
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
  }
}
</script>

<style scoped>

</style>
