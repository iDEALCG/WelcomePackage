/// <reference types="Cypress" />
const userLastName = chance.last({ nationality: 'it' });
const userEmail = chance.email({ domain: 'example.com' })
const passWord = chance.sentence({ words: 5 });



before('visit registration page', () => {
    cy.visit('register');
})

describe('Registration Page Displays Properly', () => {

    it('display the username, email, password input fields', () => {
        cy.get('a:contains("Sign in")').click();
        cy.get('a:contains("Need an account?")').click();
        cy.get('input').eq(0).should('be.visible').type("A" + userLastName);
        cy.get('input').eq(1).should('be.visible').type(userEmail);
        cy.get('input').eq(2).should('be.visible').type(passWord);
    });

// use string interpolation as an example of cleaner more readable code. (reads more like a sentance rather than 2 separate arguments)
// cy.get('input:eq(0)').should('be.visible').type(`A${userLastName}`);
// cy.get('input:eq(0)').should('be.visible').type("A" + userLastName);

});