Feature: Create Account and placing an order in AutomationPractice

    Scenario:  Testing SignUP and ordering product of AutomationPractice

        Given We are in the Home Page of AutomationPractice
        When I Click on Sign in
        When I enter email address it should create account
        When I click on create an account button
        Then I should navigate and see text as Your Personal Information
        When I enter the data in all fields as
        When I click on the Register Button
        When I perform the actions to add the product into the cart
        Then I should see a popup message of product being successfully added
        When I click on Proceed to Checkout Button
        Then I navigate and validate the Shopping Cart Page details
        When I click on Proceed to checkout button for shopping cart
        Then I navigate to Addresses Page and validate the details
        When I choose address from list and click on Checkout button
        Then I navigate to next page and validate shipping details
        When I select the check box and proceed to check out
        Then I should be navigated and validate payments page
        When I click on the payment type button and order Button
        Then I navigate and validate the order confirmation page