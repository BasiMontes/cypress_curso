describe('Utilidades para debugging con Cypress',() => {

    it('cy.log', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.log('Escribe las credenciales')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.log('Click en el botón de Login')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure')
    })

    /*
    USO DEL PAUSE
    Pausamos el Test, parecido a debuguear el test

    it('cy.log', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.log('Escribe las credenciales')
    cy.get('#username').type('tomsmith').pause()
    cy.get('#password').type('SuperSecretPassword!')
    cy.log('Click en el botón de Login')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure').pause()
    })
    */

    /*
    USO DEL DEBUG

    it('cy.log', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.log('Escribe las credenciales')
    cy.get('#username').type('tomsmith').pause()

    // Nos muestra información en la consola del navegador
    
    cy.get('#password').debug().type('SuperSecretPassword!')
    cy.log('Click en el botón de Login')
    cy.get('form').contains('Login').click()
    cy.url().should('contain', '/secure').pause()
    })
    */



    })