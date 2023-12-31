const selectors = {
    input : {
        searchTextBox : "#twotabsearchtextbox",
    },
    button : {
        signInButton  : "#nav-search-submit-button",
        languagesBox : "#p_n_feature_three_browse-bin-title+ul>span>li>span>a>div+span",
        languagesCheckboxes : "#p_n_feature_three_browse-bin-title+ul>span>span>li>span>a>div>label>input+i"
    },
    label : {
        searchResultText : ".a-spacing-top-small>span.a-text-bold",
        matchingResultText : ".s-line-clamp-2>a",
        languageNameText : ".a-color-secondary>div>span.a-color-secondary:first-of-type",
        productsearchresults : "a>span.a-text-normal",
        languagesOptionName : "#p_n_feature_three_browse-bin-title+ul>span>span>li>span>a>span"
    },
    link : {
        sigin : "#nav-link-accountList",
        primemembership : "a[href$='nav_AccountFlyout_prime']",
        amazonpay : "a[href$='nav_cs_apay']",
        productlink : "h2>a.a-text-normal",
        signout : "#nav-item-signout",
    }

}
class HomePage{

    clickOnSignInButton(){
        cy.get(selectors.link.sigin).click();
    }
    enterProductDetailsInSearchBox(product){
        cy.get(selectors.input.searchTextBox).type(product);
    }
    clickOnSearchButton(){
        cy.get(selectors.button.signInButton).click();
    }
    verifySearchResultDisplayed(expectedResult){
        cy.get(selectors.label.searchResultText).then((x) => {
            let resultText = x.text();
            let actualresult = resultText.slice(1,-1);
            expect(actualresult).to.equal(expectedResult);
        })
    }
    findAndClickOnMatchingProduct(expectedResult){
        cy.get(selectors.label.productsearchresults).each(($el, index, $list)=>{
            if(expectedResult.includes($el.text())){
                cy.get(selectors.link.productlink).eq(index).invoke("removeAttr", "target").click();
            }
        })
    }
    checkBoxElements(value){
        cy.get(selectors.label.languagesOptionName).each(($el, index, $arr)=>{
            if($el.text()==value){
                cy.get(selectors.button.languagesCheckboxes).eq(index).click();
            }
        })
    }
    matchingLanguageBooks(expectedName){
            cy.get(selectors.label.languageNameText).each(($el,index, $list)=>{
                expect($el.text()).to.equal(expectedName);
            })
    }
    clickOnSignInUsingMouseHover(){
        cy.get(selectors.link.sigin).trigger("mouseover")
    }
    clickOnYourPrimeMembershipLink(){
        cy.get(selectors.link.primemembership).click();
    }
    clickOnAmazonPayLink(){
        cy.get(selectors.link.amazonpay).click();
    }
    clickOnSignOutButton(){
        cy.get(selectors.link.signout).click({force:true});
    }
}

export default HomePage