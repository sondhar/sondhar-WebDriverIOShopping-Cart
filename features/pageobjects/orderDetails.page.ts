class OrderConformationPage {
    get orderConfirmationText() { return $('//h1') }
    get orderConfirmDetailsText() { return $('.cheque-indent') }
}
export default new OrderConformationPage()