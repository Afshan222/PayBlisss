class SignUp {
    getButton() {
        return cy.get('.sc-6344341c-0.dbLzXX');
    }
    getBusiness() {
        return cy.get('#business_name');
    }
    BusinessNameData(data) {
        this.getButton().click();
        for (var i = 0; i < data.BusinessNameData.length; i++) {
            const obj1 = data.BusinessNameData[i].Name;

            cy.log(`Current Value: "${obj1}"` )
            this.getBusiness().type(obj1).invoke('val').then(xc => {
                try {
                    try {
                        expect(xc.length).to.be.at.least(5);  //minimumlength
                    } catch (error) {
                        cy.log(`Length is less than 3`);
                    }

                    try {
                        expect(xc.length).to.be.at.most(15);   //maximumlength
                    } catch (error) {
                        cy.log(`Length is more than 15`);
                    }

                    try {
                        const onlyDigits = /^[0-9]+$|^[!@#$%^&*(),.?":{}|<>]+$/.test(xc);  //OnlyDigits
                        expect(onlyDigits).to.be.false;
                    } catch (error) {
                        cy.log(`Only Digits not allowed`);
                    }
                    try {
                        const isAlphanumeric = /^[A-Za-z0-9]+$/.test(xc);
                        expect(isAlphanumeric).to.be.true;
                    } catch (error) {
                        cy.log('An error occurred while checking the error message: ' + error.message);
                    }

            
                } catch (error) {
                    cy.log(`Unexpected Error: ${error.message}`);
                } finally{
                    this.getBusiness().clear();
                }

            });

        }
    }

} export default SignUp;