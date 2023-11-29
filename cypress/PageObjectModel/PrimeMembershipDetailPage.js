const selectors = {
    label : {
        primesubscriptionText : ".mcx-profile__info",
        joinnowtext : ".subheadline",
    },
    link : {
        joinprime : "a[href$='pc_promo_nonprime']",
    }

}
class PrimeMembershipDetailPage{
    verifyPrimeMemberShip(expectedResult){
        cy.get(selectors.label.primesubscriptionText).then((x) => {
            let resultText = x.text();
            let actualresult = resultText.trim();
            if(actualresult==expectedResult){
                cy.get(selectors.link.joinprime).click();
                cy.get(selectors.label.joinnowtext).should("be.visible");
            }
            else{
                cy.log("You are already a prime member!!");
            }
        })
    }
}

export default PrimeMembershipDetailPage