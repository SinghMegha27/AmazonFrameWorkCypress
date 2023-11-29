const selectors = {
    input : {
        emailTextBox : "input#ap_email",
        passwordTestBox : "input#ap_password",
    },
    button : {
        continueButton : "input#continue",
        signInButton  : "input#signInSubmit",
    },
    label : {
        signInText : "h1.a-spacing-small",
    }

}
class SignInPage{

    verifySignInPageDisplayed(){
        cy.get(selectors.label.signInText).should("be.visible");
    }
    enterEmailInToEmailTextBox(email){
        cy.get(selectors.input.emailTextBox).type(email);
    }
    clickOnContinueButton(){
        cy.get(selectors.button.continueButton).should("be.enabled").click();
    }
    enterPasswordInToPasswordTextBox(password){
        cy.get(selectors.input.passwordTestBox).type(password);
    }
    clickOnSignInButton(){
        cy.get(selectors.button.signInButton).should("be.enabled").click();
    }
}

export default SignInPage