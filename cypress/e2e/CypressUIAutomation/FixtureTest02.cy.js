describe('fixtureTest2', () => {
    it('TC_01: reading data from User.json file which contains large set fo user data', () => {

        cy.fixture('users').then((dataValue) => {
            dataValue.forEach(dValue => {
                cy.log(dValue.id);
                cy.log(dValue.name);
                cy.log("address is :" + dValue.address.street);

            });

        });


    })
})
