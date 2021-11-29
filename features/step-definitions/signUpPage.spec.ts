import { Given, When, Then } from "@wdio/cucumber-framework";
import addressPage from "../pageobjects/address.Page";
import myAccountPage from "../pageobjects/myAccount.Page";
import orderConfirmationPage from "../pageobjects/orderDetails.page";
import paymentsPage from "../pageobjects/payments.Page";
import shippingPage from "../pageobjects/shipping.Page";
import shoppingCartSummaryPage from "../pageobjects/shoppingCart.Page";
import signInPage from "../pageobjects/signIn.Page";
import signUpPage from "../pageobjects/signUp.Page";
import signup from "../testData/myStore.json"
import randomData from "faker"
import womenSectionPage from "../pageobjects/womenWardrobe.Page";

Given(/^We are in the Home Page of AutomationPractice$/, async () => {
    await signInPage.homePageLink()
});
When(/^I Click on Sign in$/, async () => {
    await signInPage.clickOnSignIn.click();
});
When(/^I enter email address it should create account$/, async () => {
    await signInPage.enterEmailAddress.setValue(randomData.internet.email())
});
When(/^I click on create an account button$/, async () => {
    await signInPage.clickOnCreateAccountButton.click();
});
Then(/^I should navigate and see text as Your Personal Information$/, async () => {
    await expect(signUpPage.pageHeading).toHaveText("YOUR PERSONAL INFORMATION");
});
When(/^I enter the data in all fields as$/, async () => {
    await signUpPage.radioButton.isSelected();
    await signUpPage.firstName.setValue(signup.firstName);
    await signUpPage.lastname.setValue(signup.lastName);
    await signUpPage.password.setValue(signup.password);
    await signUpPage.dobDay.selectByAttribute('value', signup.DOB.day);
    await signUpPage.dobMonth.selectByAttribute('value', signup.DOB.month);
    await signUpPage.dobYear.selectByAttribute('value', signup.DOB.year);
    await signUpPage.addressFirstName.setValue(signup.Address.addressFirstName);
    await signUpPage.addressLastName.setValue(signup.Address.addressLastName);
    await signUpPage.companyName.setValue(signup.Address.company)
    await signUpPage.address.setValue(signup.Address.address);
    await signUpPage.city.setValue(signup.Address.city);
    await signUpPage.state.selectByAttribute('value', signup.Address.state);
    await signUpPage.zipCode.setValue(signup.Address.zipcode);
    await signUpPage.country.selectByVisibleText(signup.Address.country);
    await signUpPage.mobileNumber.setValue(signup.Address.mobileNumber);
    await signUpPage.aliasAddress.setValue(signup.Address.aliasAddress);
});
When(/^I click on the Register Button$/, async () => {
    await signUpPage.registerButton.click();
});
When(/^I perform the actions to add the product into the cart$/, async () =>{
    await myAccountPage.clickOnWomenSection.click();
    await womenSectionPage.hoverOnProduct.scrollIntoView();
    await womenSectionPage.addToCartButton.click();
});
Then(/^I should see a popup message of product being successfully added$/, async () => {
    await expect(womenSectionPage.addToCartMessage).toHaveText("Product successfully added to your shopping cart");
});
When(/^I click on Proceed to Checkout Button$/, async () => {
    await womenSectionPage.clickOnProceedToCartButton.click();
});
Then(/^I navigate and validate the Shopping Cart Page details$/, async () => {
    await expect(shoppingCartSummaryPage.shoppingCartSummaryText).toHaveTextContaining("SHOPPING-CART SUMMARY");
});
When(/^I click on Proceed to checkout button for shopping cart$/, async () => {
    await shoppingCartSummaryPage.productProceedToCheckOut.click();
});
Then(/^I navigate to Addresses Page and validate the details$/, async () => {
    await expect(addressPage.addressText).toHaveText('ADDRESSES');
    await expect(addressPage.chooseDeliveryOption).toHaveText('Choose a delivery address:');
});
When(/^I choose address from list and click on Checkout button$/, async () => {
    await addressPage.addressDropDownList.selectByVisibleText("Homecoming");
    await addressPage.clickOnCheckOutButton.click();
});
Then(/^I navigate to next page and validate shipping details$/, async () => {
    await expect(shippingPage.shippingHeaderText).toHaveText("SHIPPING");
    await expect(shippingPage.checkBoxText).toHaveText("Terms of service")
});
When(/^I select the check box and proceed to check out$/, async () => {
    await shippingPage.selectingCheckBox.click();
    await shippingPage.proceedToCheckOutButton.click();
});
Then(/^I should be navigated and validate payments page$/, async () => {
    await expect(paymentsPage.choosePaymentMethodText).toHaveText("PLEASE CHOOSE YOUR PAYMENT METHOD");
});
When(/^I click on the payment type button and order Button$/, async () => {
    await paymentsPage.choosePaymentType.click();
    await paymentsPage.clickOnConfirmOrder.click();
});
Then(/^I navigate and validate the order confirmation page$/, async () => {
    await expect(orderConfirmationPage.orderConfirmationText).toHaveText("ORDER CONFIRMATION");
    await expect(orderConfirmationPage.orderConfirmDetailsText).toHaveText("Your order on My Store is complete.")
});