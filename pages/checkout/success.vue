<template>
  <div>
    <div class="message">
      <h1>{{ $t('payment.successTitle') }}</h1>
      <p>{{ $t('payment.successThankYou') }}</p>
    </div>
    <div class="order-list">
      <h2>{{ $t('payment.orderOnTheWay') }}</h2>
      <checkout-list :is-success-page="true" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CheckoutList from '~/components/checkout/CheckoutList';
import { GET_CHECKOUT_FROM_LOCAL_STORAGE } from '~/store/actionTypes';

export default {
  name: 'SuccessPayment',
  components: {
    CheckoutList,
  },
  created() {
    localStorage.removeItem("proceedToPaymentWBS");
    localStorage.removeItem("checkoutListItems");
  },
  mounted() {
    this[GET_CHECKOUT_FROM_LOCAL_STORAGE]();
  },
  methods: {
    ...mapActions('checkoutStore', [GET_CHECKOUT_FROM_LOCAL_STORAGE]),
  },
  // beforeRouteLeave(to, from) {
  //
  // }
}
</script>

<style scoped lang="scss">
.message {
  color: #2a5844;
  margin-bottom: 70px;
  font-size: 1.5em;

  @media all and (max-width: 800px) {
    font-size: 1em;
    margin-bottom: 40px;
  }
}
.order-list {
  margin: 0 auto;
  h2 {
    @media all and (max-width: 576px) {
      font-size: 1.2em;
    }
  }
}
</style>
