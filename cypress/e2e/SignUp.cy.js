import SignUp from "../support/POM/SignUpPO";

const SignUpData = new SignUp()
let Name;
describe('Payblisss', function() {
    beforeEach(function (){
        cy.visit('https://business.payblisss.com/signup', { failOnStatusCode: false });
        cy.fixture(Cypress.env('DataFile')).then((data) => {
            Name = data;
       })
    });
    it('SignUp', function() {
        SignUpData.BusinessNameData(Name) 
    });
});
