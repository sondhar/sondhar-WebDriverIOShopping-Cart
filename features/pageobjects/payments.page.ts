class PaymentsPage {
    get choosePaymentMethodText() { return $('.page-heading') }
    get choosePaymentType() { return $('.bankwire') }
    get clickOnConfirmOrder() { return $('//span[text()="I confirm my order"]') }
}
export default new PaymentsPage()