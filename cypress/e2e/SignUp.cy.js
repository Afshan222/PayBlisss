import SignUp from "../support/POM/SignUpPO";

const SignUpData = new SignUp()
describe('Payblisss', function() {
    before(() => {
        cy.visit('https://business.payblisss.com/signup', { failOnStatusCode: false });
        cy.fixture(Cypress.env('datafile')).then((data) => {
            this.data = data;
        })
    });
    it('SignUp', function() {
        SignUpData.BusinessNameData(this.data) 
    });
});
