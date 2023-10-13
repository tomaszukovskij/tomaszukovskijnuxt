<template>
  <div>
<!--    <LoaderLine v-if="isLoaded"/>-->
    <div
      class="prints-list">
      <print-item
        v-for="item in prints"
        :key="item.id"
        :item="item"
      >
      </print-item>
    </div>
  </div>
</template>
<script>
import t from 'vue-types';
import PrintItem from "./PrintItem.vue";
// import LoaderLine from '~/components/common/LoaderLine'

export default {
  name: 'PrintsList',
  components: {
    PrintItem,
    // LoaderLine,
  },
  props: {
    prints: t.array,
  },
};
</script>
<style lang="scss" scoped>
.prints-list {
  display: flex;
  gap: 50px;
  flex-flow: row wrap;
  justify-content: space-between;

  @media all and (max-width: 800px) {
    gap: 30px;
  }

  @media all and (max-width: 576px) {
    gap: 20px;
  }
}
</style>
