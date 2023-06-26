describe('Pruebas de UI', () => {

    beforeEach(() => {
        cy.visit('https://www.the-internet.herokuapp.com')

    })

    /* 
    it('Ejemplo de clicks', () => {
        cy.contains("Add/Remove Elements").click()
        cy.get('button').click()
        cy.get('.added-manually').click()
        //cy.contains("Delete").click()
    })
    */

    /* 
    it('Ejemplo de escritura', () => {
        cy.contains("Form Authentication").click()
        cy.get('#username').type("Tomsmith")
        cy.get('#password').type("Tomsmith")
        //Para borrar texto e el campo
        //cy.get('#password').clear()
        cy.get('.fa').click()
    })
    */

    /* 
    it('Ejemplo de checkboxes', () => {
        cy.contains("Checkboxes").click()
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('#checkboxes > :nth-child(1)').uncheck()
    })
    */

    /* 
    it('Elegir de un dropdown', () => {
        cy.contains("Dropdown").click()
        cy.get('#dropdown').select("Option 2")
        //Posicion
        //cy.get('#dropdown').select(2)
    })
    */

    /* 
    it('Hover sobre un elemento', () => {
        cy.contains("Hovers").click()
        //Fuerza el click aunque el elemento esté oculto
        cy.get('#contains > div > div:nth-child(4) > div > a').click({force: true})
        //Fuerzas a que se muestre
        //cy.get('#contains > div > div:nth-child(4) > div > a').invoke("show")
    })
    */

    /* 
    it('Click derecho', () => {
        cy.contains("Context Menu").click()
        cy.get('#hot-spot').rightclick()
        //Fuerza a ese click derecho
        //cy.get('#hot-spot').invoke("trigger", "contextmenu")
        //Verificamos el texto de la alerta
        cy.on("windows:alert", (alert)=> {
            expect(alert).to.equal("You selected a context menu")
        })
    })
    */


})