describe('Sesiones y Cookies',() => {

    /*
    it('Sin sesión guardada', () => {
        cy.visit('https://www.the-internet.herokuapp.com')
        cy.get('#username').type("Tomsmith")
        cy.get('#password').type("Tomsmith")
        cy.get('form').contains('Login').click()
        //Valida que viajamos al subdominio /secure
        cy.url().should('contain', '/secure')

    })
    */

    /*
    //Sesión de TOM
    it('Sin sesión guardada', () => {
        //Avisamos qué sesión sería. Cacheamos las cookies y el login para que solo se haga una vez
        cy.session('Tom', () => {
        cy.visit('https://www.the-internet.herokuapp.com')
        cy.get('#username').type("Tomsmith")
        cy.get('#password').type("Tomsmith")
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
        //Esperamos que la Cookie sea una colección con una longitud de 5 elementos
        cy.getCookies().should('have.length', 5).then((cookies) =>{
            //Esperamos que el valor del primer elemento de este array sea optimizelyPendingLogEvents
            expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents')
            })
        })
        //Limpiar cookies
        cy.clearCookies()
        //Falla porque ya hemos borrado las Cookies
        cy.getCookies().should('have.length', 5)

    })
    */
    /*
       it('Sin sesión guardada', () => {
        cy.session('Tom', () => {
        cy.visit('https://www.the-internet.herokuapp.com')
        cy.get('#username').type("Tomsmith")
        cy.get('#password').type("Tomsmith")
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
        //Vamos a una Cookie en concreto y comprobamos que exista
        cy.getCookie().should('optimizelyPendingLogEvents').should('exist')
        })
        //Borrar UNA Cookie en concreto
        cy.clearCookie('optimizelyPendingLogEvents').should('not.exist')

    })
    */
    it('Setear una Cookie', () => {
        cy.visit('https://www.the-internet.herokuapp.com')
        cy.get('#username').type("Tomsmith")
        cy.get('#password').type("Tomsmith")
        cy.get('form').contains('Login').click()
        cy.url().should('contain', '/secure')
        cy.getCookie('CookieOreo').should('not.exist')
        cy.setCookie('CookieOreo', 'Oreo')
        cy.getCookie('CookieOreo').should('have.property','value', 'Oreo')


    })



})