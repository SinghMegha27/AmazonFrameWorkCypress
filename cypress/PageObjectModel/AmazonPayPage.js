const selectors = {
    label : {
        amazonpayimage : "#apay-sticker>a>img",
    },
    link : {
        mobilerecharge : "#MobileRecharge>span>a",
    }

}
class AmazonPayPage{
    verifyAmazonPayImageDisplayed(){
        cy.get(selectors.label.amazonpayimage).should("be.visible");
    }
    clickOnMobileRecharge(){
        cy.get(selectors.link.mobilerecharge).click();
    }
    
}

export default AmazonPayPage