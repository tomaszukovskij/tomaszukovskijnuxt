<template>
  <div>
    <page-title :title="$t('cart.cartTitle')" />
    <div class="checkout">
      <div
        class="checkout--side"
        :class="{ 'checkout--side__full' : !checkoutItemsLength}"
      >
        <div v-if="!checkoutItemsLength">
          <h2>
            {{ $t('cart.cartEmpty') }}
          </h2>
        </div>
        <checkout-list v-else />
      </div>
      <div
        v-if="checkoutItemsLength"
        class="checkout--side"
      >
        <div>
          <h2>
            {{ $t('cart.totalPrice') }}: {{ totalPrice }}€
          </h2>
        </div>
        <a-button
          id="proceed-to-payment"
          type="b"
          width="half"
          :title="$t('cart.proceedToPayment')"
          :disabled="!checkoutItemsLength"
          :action="onSubmit"
        />
        <p class="checkout--message">
          {{ $t('cart.checkoutProblem') }}
          <a href="mailto:zukovskijtomas@gmail.com">zukovskijtomas@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { loadStripe } from '@stripe/stripe-js';
import { mapState, mapGetters } from 'vuex';
import AButton from "~/components/common/AButton.vue";
import PageTitle from "~/components/common/PageTitle.vue";
import CheckoutList from '~/components/checkout/CheckoutList';

export default {
  name: 'CheckoutPage',
  components: {
    AButton,
    PageTitle,
    CheckoutList,
  },
  data() {
    return {
      loading: false,
      pk: "pk_live_51KFi9eD7doKdnXcGVGV9Yx9z1DUdSXgyevvi5wThhqXiXqOEPrVHt9M7NaTZCLUEKTBcByLDTwxBdRbTXibPHRhR00uOgfNwO8",
      successURL: "https://baltikrastai.lt/checkout/success",
      cancelURL: "https://baltikrastai.lt/checkout/failed",
      proceedToPayment: true,
      stripePromise: loadStripe('pk_live_51KFi9eD7doKdnXcGVGV9Yx9z1DUdSXgyevvi5wThhqXiXqOEPrVHt9M7NaTZCLUEKTBcByLDTwxBdRbTXibPHRhR00uOgfNwO8'),
    };
  },
  computed: {
    ...mapState('checkoutStore', ['checkoutList']),
    ...mapGetters('checkoutStore', ['lineItems', 'checkoutItemsLength']),
    totalPrice() {
      const sum = this.checkoutList.reduce((total, item) => +total + +item.price, '');
      return sum || 0;
    },
  },
  mounted() {
    if (typeof window.fbq === 'function') {
      if (this.checkoutItemsLength) return window.fbq('track', 'InitiateCheckout');
    }
  },
  methods: {
    async onSubmit() {
      localStorage.setItem("proceedToPaymentWBS", JSON.stringify('proceedToPayment'));
      const stripe = await this.stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: this.lineItems,
        mode: 'payment',
        successUrl: this.successURL,
        cancelUrl: this.cancelURL,
        billingAddressCollection: 'required',
      });
      if (error) {
        console.error(error.message);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.checkout {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  &--side {
    width: 50%;
    &__full {
      width: 100%;
      text-align: center;
    }
  }
  @media all and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    &--side {
      width: 100%;
    }
  }
}
.form-button {
  margin-top: 10px;
}
.checkout--message {
  margin-top: 50px;
  color: #717578;
  opacity: .8;

  a {
    text-transform: none;
    color: #0d1821;
  }
}
</style>
