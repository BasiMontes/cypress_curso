describe('Pruebas de UI', () => {

    beforeEach(() => {
        cy.visit('https://www.the-internet.herokuapp.com')

    })

    /* 
    it('Ejemplo de esperas', () => {
        cy.wait(2000)
        cy.contains("Challenging DOM").click()
    })
    */

    /* 
    it('Nueva pestaña', () => {
        //Así se puede resolver el problema de las pestañas en Cypress
        cy.contains("Multiple Windows").click()
        //Eliminas el atributo Target del elemento
        cy.contains("Click Here").invoke('removeAttr','target').click()
        cy.contains("New Window").click().should('have.text', 'New Window')
    })
    */

    /*
    it('Shadow DOM', () => {
        cy.contains("Shadow DOM").click()
        cy.get('#content > :nth-child(3)').shadow().should('have.text', 'In a list!')
    })
    */

    /*
    it('Primer y último elemento. Elementos dinámicos', () => {
        cy.contains("Dynamic Content").click()
        //Itera con todos
        cy.get('img').should('be.visible')
        //Itera con el primero
        cy.get('img').first().should('be.visible')
        //Itera con el ultimo
        cy.get('img').last().should('be.visible')
        //Itera con el elemento en la posición 2. (0, 1, 2)
        cy.get('img').eq(2).should('be.visible')
    })
    */

    /*
    it('Padres e hijos', () => {
        cy.contains("Dynamic Content").click()
        //Nos devuelve el padre del elemento
        cy.get(':nth-child(4) > .large-2 > img').parent()
        //Nos devuelve el hijo del elemento
        cy.get('.example > :nth-child(7)').children()
    })
    */

    
    it('Invoke', () => {
        //Forzar un que un elemento oculto se vea
        cy.contains("Dynamic Content")
            .should('be.hidden')
            .invoke('show')
            .invoke('be.visible')
    })


})