const selectors = {
    label : {
        yourAccountText : ".a-spacing-base>h1",
    },
    links: {
        yourAddress : ".a-text-normal",
    }

}
class YourAccountPage{
    verifyYourAccountPage(expectedName){
        cy.get(selectors.label.yourAccountText).then((x) => {
            let displayedText = x.text();
            let actualText = displayedText.trim();
            expect(actualText).to.equal(expectedName);
        }
        )
    }
    clickOnYourAdress(expectedName){
        cy.get(selectors.links.yourAddress).each(($x, index, $list)=>{
            let x = $x.text();
            if(x.trim()==expectedName){
                cy.wrap($x).click();
            }
        })
    }
    
    
}

export default YourAccountPage