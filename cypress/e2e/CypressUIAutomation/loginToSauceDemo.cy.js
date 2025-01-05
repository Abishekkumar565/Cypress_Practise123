describe('TestScenarios_SauceDemo', () => {

    // let Url = "https://www.saucedemo.com/v1/";

    it('login_TC', () => {
        cy.visit(Cypress.env('baseUrl'));
        //cy.visit(Url);
        cy.xpath("//input[@name='user-name']").type("standard_user");
        cy.xpath("//input[@name='password']").type("secret_sauce");
        cy.get("#login-button").click();
        cy.wait(3000);

    })



})