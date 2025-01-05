describe('login to Application', () => {
    let url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

    it('loginToApp', () => {

        cy.visit(url);
        cy.wait(3000);
        cy.url().should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[name ='username']").type("Admin");
        cy.xpath("//input[@name='password']").type("admin123");
        cy.xpath("//button[text()=' Login ']").click();
    })


})