import HomePage from "../PageObjectModel/HomePage";
import YourAccountPage from "../PageObjectModel/YourAccountPage";
import YourAddressPage from "../PageObjectModel/YourAddressPage";

const homep = new HomePage();
const youraccountp = new YourAccountPage();
const youraddressp = new YourAddressPage();

describe("Verification of adding new address", () => {
    beforeEach(() => {
        cy.loginToAmazon();
    });
    afterEach(()=>{
        cy.logoutFromAmazom();
    });
    it("Add New Address", () => {
        //AddressTestData
        cy.fixture("TestData").then((data) => {
            homep.clickOnSignInButton();
            youraccountp.verifyYourAccountPage("Your Account");
            youraccountp.clickOnYourAdress("Your Addresses");
            youraddressp.verifyYourAddressPage("Your Addresses");
            youraddressp.clickOnAddAdress("Add address");
            youraddressp.enteralladressdetails(data.fullname, data.mobilenumber, 
                data.pincode, data.flatnumber, data.areaname, data.landmark);
            youraddressp.verifyTownCityIsNotNull();
            youraddressp.clickOnSubmitButton();
            youraddressp.verifyAdressSavedMessage("Address saved");
            youraddressp.verifyNameAfterAddingAddressSaved(data.fullname);
            youraddressp.verifyPhoneNumberAfterAddingAddressSaved(data.mobilenumber);
        })
        
    })
    
}
)