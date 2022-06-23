<template>
  <div v-if="$apollo.loading">Loading...</div>
  <portfolio-list v-else :list="allPeoples.nodes"/>
</template>

<script>
import { peoples } from '@/graphql/works';
import PortfolioList from '~/components/PortfolioComponents/PortfolioList';
export default {
  name: 'PeoplesList',
  apollo: {
    allPeoples: {
      query: peoples,
      variables () {
        return {
          search: this.searchItem,
        }
      },
    },
  },
  components: {
    PortfolioList,
  },
  methods: {
    filterPeople() {
      this.arrayOF = this.arrayOF.filter(v => {
        console.info(v.title === this.searchItem);
        return v.title === this.searchItem;
      })
    }
  }
}
</script>

<style scoped>

</style>
