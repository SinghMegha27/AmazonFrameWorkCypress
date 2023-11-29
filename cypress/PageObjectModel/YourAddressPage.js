const selectors = {
    label : {
        yourAdressText : "h1.a-spacing-medium",
        addressSavedText : ".a-alert-heading",
        fullnameaftersavingaddress : "#address-ui-widgets-FullName",
        phonenumberaftersavingaddress : "#address-ui-widgets-PhoneNumber",
    },
    button : {
        addAddress : ".a-color-tertiary",
        submitbutton : "#address-ui-widgets-form-submit-button>span>input.a-button-input",
    },
    input : {
        fullname : "#address-ui-widgets-enterAddressFullName",
        mobilenumber : "#address-ui-widgets-enterAddressPhoneNumber",
        pincode : "#address-ui-widgets-enterAddressPostalCode",
        flatnumber : "#address-ui-widgets-enterAddressLine1",
        streetname : "#address-ui-widgets-enterAddressLine2",
        landmark : "#address-ui-widgets-landmark",
        towncity : "#address-ui-widgets-enterAddressCity",
    }

}
class YourAddressPage{
    verifyYourAddressPage(expectedName){
        cy.get(selectors.label.yourAdressText).then((x) => {
            let displayedText = x.text();
            let actualText = displayedText.trim();
            expect(actualText).to.equal(expectedName);
        }
        )
    }

    clickOnAddAdress(expectedName){
        cy.get(selectors.button.addAddress).each(($x, index, $list)=>{
            let x = $x.text();
            if(x.trim()==expectedName){
                cy.wrap($x).click();
            }
        })
    }
    enteralladressdetails(name, number, pin, flatnum, streetname, landmark){
        cy.wait(1000);
        cy.get(selectors.input.fullname).type(name);
        cy.wait(1000);
        cy.get(selectors.input.mobilenumber).type(number);
        cy.wait(1000);
        cy.get(selectors.input.pincode).clear();
        cy.get(selectors.input.pincode).type(pin);
        cy.wait(1000);
        cy.get(selectors.input.flatnumber).type(flatnum);
        cy.wait(1000);
        cy.get(selectors.input.streetname).type(streetname);
        cy.wait(1000);
        cy.get(selectors.input.landmark).type(landmark);
    }
    verifyTownCityIsNotNull(){
        cy.get(selectors.input.towncity).then((x) => {
            let resultText = x.text();
            expect(resultText).to.not.equal(null);
        })
    }
    clickOnSubmitButton(){
        cy.get(selectors.button.submitbutton).click();
    }
    verifyAdressSavedMessage(expectedName){
        cy.get(selectors.label.addressSavedText).then((x) => {
            let displayedText = x.text();
            let actualText = displayedText.trim();
            expect(actualText).to.equal(expectedName);
        }
        )
    }
    verifyNameAfterAddingAddressSaved(expectedName){
        cy.get(selectors.label.fullnameaftersavingaddress).each(($el, index, $list)=>{
            let item = $el.text();
            expect(expectedName).to.contains(item.trim());
        })
    }
    verifyPhoneNumberAfterAddingAddressSaved(expectedName){
        cy.get(selectors.label.phonenumberaftersavingaddress).each(($el, index, $list)=>{
            let item = $el.text();
            expect(item.trim()).to.contains(expectedName);
        })
    }
}

export default YourAddressPage