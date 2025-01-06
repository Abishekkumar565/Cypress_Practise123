describe("ViewPort_Example01", () => {

    it("ipad-mini", () => {
        cy.viewport('ipad-mini');
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })


    it('ipad-2', () => {

        cy.viewport('ipad-2');
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })


    it("344 by 882", () => {
        cy.viewport(344, 882);
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })
})