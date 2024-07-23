class SignUp{
    SignUp(){
        return ('.sc-e856919c-1.hasTnq')
    }
    
    
    BusinessNameData(data){
        cy.get(this.SignUp).type(data).click();
    
    }
    }export default SignUp;