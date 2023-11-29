const selectors = {
    label : {
        selectPaymentMethodText : "h1.a-spacing-base",
    }

}
class PaymentMethodPage{
    verifyPaymentMethodTextDisplayed(expectedName){
        cy.get(selectors.label.selectPaymentMethodText).each(($el, index, $list)=>{
            let item = $el.text();
            expect(item.trim()).to.contains(expectedName);
        })
    }
}

export default PaymentMethodPage