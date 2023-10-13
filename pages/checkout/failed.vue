<template>
  <div>
    <div class="message">
      <h1>{{ $t('payment.failedTitle') }}</h1>
      <p>{{ $t('payment.failed') }}</p>
    </div>
    <div class="order-list">
      <h2>{{ $t('payment.unpaid') }}</h2>
      <a-button
        type="link"
        width="auto"
        :title="$t('common.viewToCart')"
        to="/checkout"
      />
    </div>
  </div>
</template>

<script>
import AButton from '~/components/common/AButton';
export default {
  name: 'FailedPayment',
  components: {
    AButton,
  },
  // middleware: ['beforeEnter'],
  mounted() {
    localStorage.removeItem("proceedToPaymentWBS");
  },
}
</script>

<style scoped lang="scss">
.message {
  color: #f96363;
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
      font-size: 1em;
    }
  }
}
</style>
