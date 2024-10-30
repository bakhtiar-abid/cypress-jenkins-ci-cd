export default class RegisterPage{

    registerWebLocator ={
       name : "//input[@placeholder='Name']",
       emailAddress: "//input[@data-qa='signup-email']",
       clicksignUpLoginButton: "//a[normalize-space()='Signup / Login']",
       signUpButton: "//button[normalize-space()='Signup']",
       existedEmailAddress: "//p[normalize-space()='Email Address already exist!']"
    }




    visitWebsiteUrl(){
    cy.visit("http://automationexercise.com");
    cy.title().should('eq', 'Automation Exercise');
    }

    clickSignUpPage(){
        cy.xpath(this.registerWebLocator.clicksignUpLoginButton, { timeout: 10000 }).should('be.visible');
        cy.xpath(this.registerWebLocator.clicksignUpLoginButton).click();
    }

    enterUserRegistrationInfo(name, email){
        cy.xpath(this.registerWebLocator.name).type(name);
        cy.xpath(this.registerWebLocator.emailAddress).type(email);
        cy.xpath(this.registerWebLocator.signUpButton).click();
    }

    verifyTheExistedUserEmail(){
        return cy.xpath(this.registerWebLocator.existedEmailAddress)
    }


}