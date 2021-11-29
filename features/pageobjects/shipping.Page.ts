class ShippingPage {
    get shippingHeaderText() { return $('//h1') }
    get checkBoxText() { return $('//p[text()="Terms of service"]') }
    get selectingCheckBox() { return $('#cgv') }
    get proceedToCheckOutButton() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
}
export default new ShippingPage()