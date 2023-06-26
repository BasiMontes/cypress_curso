describe('Validaciones implícitas y explícitas', () => {

    beforeEach(() => {
        cy.visit('https://www.the-internet.herokuapp.com')

    })

    /* 
    it('Validaciones implícitas', () => {
        cy.contains("Inputs").click()
        cy.get('h3).should('have.text', 'Inputs')
        cy.get('h3).should('have.class', 'example').and('be.visible')
    })
    */

    /* 
    it('Validaciones explícitas', () => {
        cy.contains("Inputs").click()
        cy.get('h3)
        expect('Inputs').to.equals('Inputs')
    })
    */

    //Manejo de Promesas

    it('Validaciones explícitas', () => {

        let waited = false

        function waitOneSecond() {
            // Devuelve una promesa que se da por resuelta al pasar 1 segundo
            return new Cypress.Promise((resolve, reject) => {
             setTimeout(() => {
               // Ponemos el waited en true
               waited = true
               // resuelve con el string 'foo'
               resolve('foo')
              }, 1000)
            })
          }

        cy.wrap(mull).then(() => {
        // Devuelve una pronesa a су. then que es esperada (waited) hasta que resuelve.
        return waitOneSecond().then((str) => {
            expect(str).to.eg('foo')
            expect(waited).to.be.true
            })
        })
    })
})