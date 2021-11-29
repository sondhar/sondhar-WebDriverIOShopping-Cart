class ShoppingCartSummary {
    get shoppingCartSummaryText() { return $('#cart_title') }
    get productProceedToCheckOut() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
}
export default new ShoppingCartSummary()