describe('Handling_MouseOperations', () => {

    it('TC1_HandlingMouseEvent', () => {
        cy.visit("https://practice.expandtesting.com/hovers");
        cy.get("#examples-dropdown").trigger('mouseover').click();
        cy.xpath("//a[.='Apps']").click();
        cy.wait(2000);
    })

    it('TC2_handlingRightclick', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        //There are 2 approaches to do right click:
        //cy.xpath("//span[.='right click me']").rightclick(); //approach-1
        cy.xpath("//span[.='right click me']").trigger('contextmenu'); //approach-2
        cy.wait(2000);
        //Assertion applied -
        cy.xpath("//li[.='Copy']").should('be.visible');
        cy.xpath("//a").should('have.length.above', 12);
        cy.xpath("//a").should('have.length.at.least', 12);
        cy.xpath("//a").should('have.length.greaterThan', 12);
        cy.xpath("//a").should('have.length.below', 100);
    })

    it('TC3_DoubleClick', () => {
        cy.visit("https://qa-practice.netlify.app/double-click");

        // approach -1
        //cy.get(".btn.btn-primary").dblclick();

        // approach -2
        cy.get(".btn.btn-primary").trigger('dblclick');
        cy.xpath("//div[.='Congrats, you double clicked!']").should('contain.text', 'Congrats, you double clicked!');
    })

    it.only('TC4_DragDrop', () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box1").drag("#box106", { force: true });
    })

})