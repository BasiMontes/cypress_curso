const testData = require('../../fixtures/titulos.json')

testData.ForEach((testData) => {
    describe('El título es correcto para cada subpágina en Free Ranger Testers', () => {

        it('Valida que '+testData.Title+' sea el título de '+testData.Location, () => {
            cy.intercept('GET', '/users', (req)=> {
                //Hacemos algocon la respuesta
            })
            cy.visit(testData.Location)
            cy.title().should('include', testData.title)
        })
    })

})
