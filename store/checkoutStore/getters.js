export default {
  lineItems: (state) => state.checkoutList.map(el => ({
    price: el.stripePrice,
    quantity: el.quantity,
  })),
  checkoutItemsLength: (state) => state.checkoutList.length,
  currentLocale: (state) => state.currentLocale,
}
