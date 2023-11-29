import HomePage from "../PageObjectModel/HomePage";
import AmazonPayPage from "../PageObjectModel/AmazonPayPage";
import MobileRechargePage from "../PageObjectModel/MobileRechargePage";
import PaymentMethodPage from "../PageObjectModel/PaymentMethodPage";

const homep = new HomePage();
const amazonpayp = new AmazonPayPage();
const mobilerechargep = new MobileRechargePage();
const paymentmethodp = new PaymentMethodPage();

describe("Verify Mobile Recharge", () => {
    beforeEach(() => {
        cy.loginToAmazon();
    });
    afterEach(()=>{
        cy.logoutFromAmazom();
    });
    it("Validation of Mobile Recharge Plan", () => {
        //MobileNumberTestData
        cy.fixture("TestData").then((data) => {
            homep.clickOnAmazonPayLink();
            amazonpayp.verifyAmazonPayImageDisplayed();
            amazonpayp.clickOnMobileRecharge();
            mobilerechargep.verifyMobileRechargeTextDisplayed("Mobile Recharge");
            mobilerechargep.enterMobileNumber(data.mobileNumber);
            mobilerechargep.verifyOperatorNotNull();
            mobilerechargep.clickonViewPlan();
            mobilerechargep.fetchandchooseplan(data.planprice);
            mobilerechargep.clickOnContinueButton(data.planprice);
            paymentmethodp.verifyPaymentMethodTextDisplayed("Select a payment method");
            cy.go("back");
        })

    })
    
}
)