import HomePage from "../PageObjectModel/HomePage";
import ProductDetailsPage from "../PageObjectModel/ProductDetailsPage";
import ShoppingCartPage from "../PageObjectModel/ShoppingCartPage";

const homep = new HomePage();
const productdetailp = new ProductDetailsPage();
const shoppingCartp = new ShoppingCartPage();

describe("Verification of adding product to cart", () => {
    beforeEach(() => {
        cy.loginToAmazon();
    });
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Modify the behavior here
            return false; // This will prevent the test from failing
        });
    });
    afterEach(()=>{
        cy.logoutFromAmazom();
    });
    it("add product to cart", () => {
        //AddCartTestData
        cy.fixture("TestData").then((data) => {
            homep.enterProductDetailsInSearchBox(data.productname);
            homep.clickOnSearchButton();
            homep.verifySearchResultDisplayed(data.productname);
            homep.findAndClickOnMatchingProduct(data.productname);
            productdetailp.verifyMatchingProduct(data.productname);
            productdetailp.clickAddToCartButton();
            productdetailp.clickOnCartButton();
            shoppingCartp.verifyShoppingCartText("Shopping Cart");
            shoppingCartp.checkProductDisplayedAndChecked(data.productname);
        })
    })
})