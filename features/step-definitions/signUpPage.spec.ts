import { Given, Then, When } from "@wdio/cucumber-framework";

import myAccountPage from "../pageobjects/myAccount.Page";

import signInPage from "../pageobjects/signIn.Page";

import signUpPage from "../pageobjects/signup.Page";

import signup from "../testdata/signUp.json";

import randomData from "faker"



Given(/^This is the Home Page of MyStore$/, async () => {

    await signInPage.homePageLink()

});

When(/^I Click on Sign in$/, async () => {

    await signInPage.clickOnSIgnIn.click();

});

Then(/^I should see the Text as \"([^\"]*)\"$/, async (createanaccount) => {

    await expect(signInPage.createAccountText).toHaveText(createanaccount);

});

When(/^I enter email address it should create account$/, async () => {

    await signInPage.enteringEmailAddress.setValue(randomData.internet.email())

});

When(/^I click on create an account button$/, async () => {

    await signInPage.ClickOnCreateAccountButton.click();

});

Then(/^I should navigate and see the heading as \"([^\"]*)\"$/, async (yourpersonalinformation) => {

    await expect(signUpPage.pageHeading).toHaveText(yourpersonalinformation);

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

Then(/^I should be navigated to another page and can see the text as \"([^\"]*)\"$/, async (myaccount) => {

    await expect(myAccountPage.myAccountText).toHaveText(myaccount);

});