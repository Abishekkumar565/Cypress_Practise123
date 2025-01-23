describe('DropDownDemo_Scenarios', () => {

    it('TC-DropDownElement_WithoutSelectTag', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('[title="Visa application"]').click()
        cy.get('.select2-search__field').type("Visa extension").trigger('{enter}')

    })
}) 