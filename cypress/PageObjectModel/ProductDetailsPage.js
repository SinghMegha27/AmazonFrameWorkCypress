const selectors = {
    label : {
        matchingProductText : "#productTitle",
    },
    button : {
        addToCartButton : "#add-to-cart-button",
        cartButton : "#attach-sidesheet-view-cart-button>span>input",
    }

}
class ProductDetailsPage{

    verifyMatchingProduct(expectedResult){
        cy.get(selectors.label.matchingProductText).then((x) => {
            let productText = x.text();
            let actualproductText = productText.trim();
            expect(actualproductText).to.equal(expectedResult);
        }
        )
    }
    clickAddToCartButton(){
        cy.reload();
        let addtoCartBtn = cy.get(selectors.button.addToCartButton);
        addtoCartBtn.scrollIntoView();
        if(addtoCartBtn.should("be.enabled")){
            cy.wait(1000);
            addtoCartBtn.click({force:true});
        }
        else{
            cy.log("The Product is Out of Stock");
        }
        
    }
    clickOnCartButton(){
        cy.get(selectors.button.cartButton).should("be.enabled").click({ force: true });
    }
}

export default ProductDetailsPage