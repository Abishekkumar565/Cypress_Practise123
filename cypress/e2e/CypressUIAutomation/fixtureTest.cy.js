describe('FixtureTest_Example01', () => {
    let username1;
    let password1;
    it('TC1_taking data from fixture file', () => {

        cy.fixture('profile').then((dataValue) => {
            //cy.log(dataValue.username);
            username1 = dataValue.username;
            //cy.log(dataValue.password);
            password1 = dataValue.password;

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("input[name ='username']").type(username1);
            cy.xpath("//input[@name='password']").type(password1);
            cy.xpath("//button[text()=' Login ']").click();
            cy.xpath("//span[.='PIM']").click();
        })
    })
    it('TC2_Repeat_taking data from fixture file', () => {
        cy.log("Validating varible...");
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name ='username']").type(username1);
        cy.xpath("//input[@name='password']").type(password1);
        cy.xpath("//button[text()=' Login ']").click();
        cy.xpath("//span[.='PIM']").click();
    })

})