describe('Assertion_Examples', () => {
    it('HomePage_AssertionExample', () => {
        cy.visit(Cypress.env("baseUrl"));
        cy.xpath("//input[@name='user-name']").type("standard_user");
        cy.xpath("//input[@name='password']").type("secret_sauce");
        cy.get("#login-button").click();
        cy.wait(3000);
        cy.xpath("//div[text()='Sauce Labs Backpack']").click();

        //Assertion statements applied on webelement -
        cy.xpath("//div[text()='Swag Labs']").should('have.text', 'Swag Labs');
        cy.xpath("//div[text()='Swag Labs']").should('contain', 'Swag Labs');
        cy.xpath("//div[text()='Swag Labs']").should('contain.text', 'Swag Labs');

        //Negative Assertion statements applied on webelement -
        cy.xpath("//div[text()='Swag Labs']").should('not.contain.text', 'SwagLabs2');
        cy.xpath("//div[text()='Swag Labs']").should('not.contain', 'SwagLabs');
        //cy.xpath("//div[text()='Swag Labs']").should('eq', 'Swag Labs');
    })

})