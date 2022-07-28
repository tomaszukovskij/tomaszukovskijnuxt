<template>
  <div>
    Personal photoshoot
    <portfolio-list :list="portraitsList"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { SET_PORTRAITS_LIST } from '../../store/portraits/actionTypes';
import PortfolioList from '~/components/PortfolioComponents/PortfolioList';
export default {
  name: 'PortraitsPage',
  components: {
    PortfolioList,
  },
  mounted() {
    this.fetch();
  },
  computed: {
    ...mapState('portraits', ['portraitsList']),
  },
  methods: {
    ...mapActions('portraits', [SET_PORTRAITS_LIST]),
    fetch() {
      console.info('here', this.portraitsList);
      this[SET_PORTRAITS_LIST]();
    }
  }
}
</script>

<style scoped>

</style>
