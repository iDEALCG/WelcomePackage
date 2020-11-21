
// start using cypress without intellisense. after writing describe and it block, then explain intellisense and 3 slash directive
/*

            You need a triple slash reference
            When you are referencing JavaScript type definitions e.g. definitions for node, jQuery, etc.

            /// <reference types="Cypress" />
    
*/

describe('How to click a link', () => {
    it('click a link', () => {
        cy.viewport(1920, 1080);
        cy.visit('');
        cy.get('a:contains("Sign in")').click()
    });
});