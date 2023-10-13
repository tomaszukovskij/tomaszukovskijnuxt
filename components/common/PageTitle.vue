<template>
  <div class="page-title">
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
import t from "vue-types";

export default {
  props: {
    title: t.string,
  },
};
</script>
<style scoped lang="scss">
.page-title {
  text-align: center;
  margin-bottom: 70px;
  h1 {
    margin: 0;
    font-size: 2.9em;
    font-weight: 400;
    @media all and (max-width: 576px) {
      font-size: 2.2em;
    }
  }
}
</style>
