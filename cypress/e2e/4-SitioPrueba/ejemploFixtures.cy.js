//Usar variables con Fixtures (Guarda Testdata)
describe('Ejemplos con Fixtures', () => {

    beforeEach(() => {
        cy.visit('https://www.the-internet.herokuapp.com/login')
        //Con esto lee el json que está en la carpeta Fixtures
        cy.fixture('credenciales').then(function(testdata){
            this.testdata = testdata
        })

    })

    it('Validate sucessfull login', () => {
        cy.get('#username').type(this.testdata.username)
        cy.get('#password').type(this.testdata.password)
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
    })

})