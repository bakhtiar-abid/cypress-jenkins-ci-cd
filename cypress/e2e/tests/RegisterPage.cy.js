
import RegisterPage from './../../../pages/RegisterPage';


const registerObject = new RegisterPage()




describe('Register Test', () => { 
    


    beforeEach(()=>{
        registerObject.visitWebsiteUrl();
    })
    


    it('Click on sign up page', () => {
        registerObject.clickSignUpPage();
    });

    it('Verify that user successfully can register for an account', () => {
        registerObject.clickSignUpPage();
        registerObject.enterUserRegistrationInfo("Test User", "test@gmail.com");
    });

    it('Verify that proper validation message is displayed if user is already existed', () => {
        registerObject.clickSignUpPage();
        registerObject.enterUserRegistrationInfo("Test User", "test@gmail.com");
        registerObject.verifyTheExistedUserEmail().should("have.text", "Email Address already exist!");
    });
 })

 