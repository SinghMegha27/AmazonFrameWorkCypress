import HomePage from "../PageObjectModel/HomePage";

const homep = new HomePage();
describe("Verification of book results after applying filter on language", () => {
    beforeEach(() => {
        cy.loginToAmazon();
    });
    afterEach(()=>{
        cy.logoutFromAmazom();
    });
    it("Filter Books on Basis of Language", () => {
        //BookNameTestData
        cy.fixture("TestData").then((data) => {
            homep.enterProductDetailsInSearchBox(data.bookname);
            homep.clickOnSearchButton();
            homep.verifySearchResultDisplayed(data.bookname);
            homep.checkBoxElements(data.language);
            homep.matchingLanguageBooks(data.edition);
        })
    })
})