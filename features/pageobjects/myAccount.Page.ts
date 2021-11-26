class MyAccountPage {

    get myAccountText() { return $('//h1[text()="My account"]'); }

}

export default new MyAccountPage()