<template>
  <section>
    <div id="portfolio-list">
      <portraits-list-card
        v-for="item in list"
        :key="item.id"
        :item="item"
        :post-type="postType"
      />
    </div>
  </section>
</template>

<script>
import t from 'vue-types';
import PortraitsListCard from '~/components/PortfolioComponents/PortraitsListCard';
export default {
  name: 'PortfolioList',
  components: {
    PortraitsListCard,
  },
  props: {
    list: t.any,
    postType: t.string,
  }
}
</script>

<style scoped lang="scss">
#portfolio-list {
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  align-content: flex-start;
  justify-content: center;

  @media all and (max-width: 576px) {
    gap: 60px;
  }
}
</style>
