class SignInPage {

    get clickOnSignIn() { return $("//a[@class='login']"); }
    get enterEmailAddress() { return $("//input[@id='email_create']"); }
    get clickOnCreateAccountButton() { return $("//button[@id='SubmitCreate']"); }
    async homePageLink() { await browser.url("http://automationpractice.com/"); }
}
export default new SignInPage()