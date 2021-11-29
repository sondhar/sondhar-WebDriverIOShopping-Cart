class AddressPage {
    get addressText() { return $('.page-heading') }
    get chooseDeliveryOption() { return $('//label[@for="id_address_delivery"]') }
    get addressDropDownList() { return $('#id_address_delivery') }
    get clickOnCheckOutButton() { return $('//span[text()="Proceed to checkout"]') }
}
export default new AddressPage()