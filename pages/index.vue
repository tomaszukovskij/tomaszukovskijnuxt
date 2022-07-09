<template>
  <div class="page-text">
    <page-single :page-title="'Selected works'"/>
  </div>
</template>

<script>

import PageSingle from '@/components/PageComponents/PageSingle';

export default {
  name: 'IndexPage',
  components: {
    PageSingle,
  },
}
</script>
