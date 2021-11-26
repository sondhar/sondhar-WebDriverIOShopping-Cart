Feature: Create Account in AutomationPractice



    Scenario: Testing SignUP Page of the AutomationPractice

        Given This is the Home Page of MyStore

        When I Click on Sign in

        Then I should see the Text as "CREATE AN ACCOUNT"

        When I enter email address it should create account

        When I click on create an account button

        Then I should navigate and see the heading as "YOUR PERSONAL INFORMATION"

        When I enter the data in all fields as




        When I click on the Register Button

        Then I should be navigated to another page and can see the text as "MY ACCOUNT"