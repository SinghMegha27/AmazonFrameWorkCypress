// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///  <reference types="Cypress" />

import HomePage from "../PageObjectModel/HomePage";
import SignInPage from "../PageObjectModel/SiginInPage";

const homep = new HomePage();
const signp = new SignInPage();

Cypress.Commands.add('loginToAmazon', () => {
    cy.fixture("constants").then((data) =>{
        cy.visit(data.url);
        homep.clickOnSignInButton();
        signp.verifySignInPageDisplayed();
        signp.enterEmailInToEmailTextBox(data.email);
        signp.clickOnContinueButton();
        signp.enterPasswordInToPasswordTextBox(data.password);
        signp.clickOnSignInButton();
    })
});

Cypress.Commands.add('logoutFromAmazom', () => {
    homep.clickOnSignInUsingMouseHover();
    homep.clickOnSignOutButton();
});