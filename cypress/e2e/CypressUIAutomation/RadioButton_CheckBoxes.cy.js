
describe('RadioButtons_CheckBoxes_validations', () => {
    let Url = 'https://testautomationpractice.blogspot.com/';

    //it.skip('RadioButton_Testing_TC01', () => {
    it('RadioButton_Testing_TC01', () => {

        cy.visit(Url);
        // clicking on radio button 1: 
        cy.get("#male").click();
        //Assertion applied
        cy.get("#male").should('be.checked');
        //clicking on 2nd radio button & Assertion applied
        cy.get("#female").click().wait(1000).should('be.checked');
        //Assertion applied
        (cy.get("#male").should('not.be.checked'));
    })

    // it.only('checkBox_Testing_TC2', () => {
    it('checkBox_Testing_TC2', () => {
        cy.visit(Url);
        cy.get("#sunday").check().wait(1000).should('be.checked');
        cy.get("#monday").click().wait(1000).should('be.checked');
    })

})