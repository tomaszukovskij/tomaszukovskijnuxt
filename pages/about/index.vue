<template>
  <div class="wrapper">
    <page-single :page-title="'About me'" />
  </div>
</template>

<script>
import PageSingle from '@/components/PageComponents/PageSingle';
export default {
  name: 'AboutIndex',
  components: {
    PageSingle
  },
  head: {
    title: 'Tomas Žukovskij - about me',
    meta: [
      {
        content: 'Tomas Žukovskij about photography. Tomas Žukovskij apie fotografija.'
      }
    ],
  }
}
</script>

<style scoped>

</style>
