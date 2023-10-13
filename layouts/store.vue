<template>
  <div>
    <PageHeader />
    <main>
      <div class="wrapper">
        <Nuxt />
      </div>
    </main>
    <PageFooter />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import PageHeader from '~/components/common/PageHeader';
import PageFooter from '~/components/common/PageFooter';
import { GET_CHECKOUT_FROM_LOCAL_STORAGE } from '~/store/actionTypes';
export default {
  name: 'StorePage',
  components: {
    PageHeader,
    PageFooter
  },
  mounted() {
    this[GET_CHECKOUT_FROM_LOCAL_STORAGE]();
  },
  methods: {
    ...mapActions('checkoutStore', [GET_CHECKOUT_FROM_LOCAL_STORAGE]),
  },
}
</script>
<style lang="scss">
@import "assets/styles/common.scss";
</style>
