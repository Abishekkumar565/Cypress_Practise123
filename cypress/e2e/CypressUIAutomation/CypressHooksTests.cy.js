describe('cypressHooks Implementation', () => {

    before('Iam in Before block', () => {
        cy.log("I'm executing before block");
    })

    beforeEach('I am in before Each block', () => {
        cy.log("I'm executing Before Each block..!");
    })

    it('TC_01', () => {
        cy.log("This Is TC_01");
    })

    it('TC_02', () => {
        cy.log("This Is TC_02");
    })

    it('TC_01', () => {
        cy.log("This Is TC_03");
    })

    after('Iam in After Block', () => {
        cy.log("I'm executing the After block")
    })
    afterEach('Iam in afterEach block', () => {
        cy.log("I'm executing afterEach block")
    })

})

describe.only('CypressHooks Implementation Example', () => {
    let url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

    before('Iam in Before block', () => {
        cy.log("I'm executing before block");
    })
    beforeEach('loginToApp', () => {
        cy.visit(url);
        cy.get("input[name ='username']").type("Admin");
        cy.xpath("//input[@name='password']").type("admin123");
        cy.xpath("//button[text()=' Login ']").click();
    })

    it('TC_01', () => {
        cy.log("This Is TC_01");
        cy.xpath("//span[.='PIM']").click();
    })

    it('TC_02', () => {
        cy.log("This Is TC_02");
        cy.xpath("//span[.='Leave']").click();
    })

    it('TC_03', () => {
        cy.log("This Is TC_03");
        cy.xpath("//input[@placeholder='Search']").click();
    })
    after('Iam in After Block', () => {
        cy.log("I'm executing the After block")
    })
    afterEach('Iam in afterEach block', () => {
        cy.log("I'm executing afterEach block");

    })

})