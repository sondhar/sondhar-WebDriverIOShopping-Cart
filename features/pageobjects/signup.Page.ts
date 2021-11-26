class SignUpPage {



        get pageHeading() { return $("//*[@id='account-creation_form']/div[1]/h3") }
    
        get radioButton() { return $("#id_gender1"); }
    
        get firstnameText() { return $("//label[@for='customer_firstname']"); }
    
        get firstName() { return $("//input[@id='customer_firstname']") }
    
        get lastnameText() { return $("//label[@for='customer_lastname']"); }
    
        get lastname() { return $("//input[@id='customer_lastname']") }
    
        get passwordText() { return $("//label[@for='passwd']"); }
    
        get password() { return $("//input[@id='passwd']") }
    
        get dateOfBirthText() { return $('//div[@class="form-group"]/label'); }
    
        get dobDay() { return $('//select[@id="days"]') }
    
        get dobMonth() { return $('#months') }
    
        get dobYear() { return $('//select[@id="years"]') }
    
        get yourAddressText() { return $('//h3[text()="Your address"]'); }
    
        get addressFirstNameText() { return $('//label[@for="firstname"]'); }
    
        get addressFirstName() { return $('//input[@id="firstname"]') }
    
        get addressLastnameText() { return $('//label[@for="lastname"]'); }
    
        get addressLastName() { return $('//input[@id="lastname"]') }
    
        get addressText() { return $('//label[@for="address1"]') }
    
        get address() { return $('#address1') }
    
        get cityText() { return $('//label[@for="city"]'); }
    
        get city() { return $('//input[@name="city"]') }
    
        get stateText() { return $('//label[@for="id_state"]'); }
    
        get state() { return $('#id_state') }
    
        get zipPostalCodeText() { return $('//label[@for="postcode"]') }
    
        get zipCode() { return $('#postcode') }
    
        get countryText() { return $('//label[@for="id_country"]') }
    
        get country() { return $('#id_country') }
    
        get mobileNumberText() { return $('//label[@for="phone_mobile"]'); }
    
        get mobileNumber() { return $('#phone_mobile') }
    
        get aliasAddressText() { return $('//label[@for="alias"]'); }
    
        get aliasAddress() { return $('#alias') }
    
        get registerButton() { return $('#submitAccount') }
    
    }
    
    export default new SignUpPage()