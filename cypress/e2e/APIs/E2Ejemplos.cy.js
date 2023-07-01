describe('Loguear - Basic Auth y Auth con Forms',() => {

    beforeEach(()=> {
        //Arranca la Base de datos de cero. Seeding
        cy.task('db:teardown')
        cy.task('db:seeding')
    })

    it('Sin loguear', () => {
        cy.visit('https://www.the-internet.herokuapp.com/basic-auth')
        //Va a fallar porque no estamos logueados
        cy.get('p').should('include.text', 'Congratulations')
    })

    it('Loguea usando Auth de Cypress', () => {
        cy.visit('https://www.the-internet.herokuapp.com/basic-auth', {
            auth:{
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get('p').should('include.text', 'Congratulations')
    })

    it('Loguea con credenciales en la URL del visit', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic-auth')
        cy.get('p').should('include.text', 'Congratulations')
    })

    it('Hago login en un form, usando un request del tipo POST', () => {
        cy.visit('https://www.the-internet.herokuapp.com')
        cy.request({
            method:'POST',
            url:'/authenticate',
            form:true,
            body:{
                username:'tomsmith',
                password: 'SuperSecretPassword!'
            }

        })
        //Comprueba que la cookie existe
        cy.getCookie('rack.session').should('exist')
        cy.visit('https://www.the-internet.herokuapp.com/secure')
        cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')
    })

    it('Mismo test de arriba pero con el login como comando personalizado en support/command.js', () => {
        cy.login()
        cy.get('.subheader').should('include.text', 'Welcome to the Secure Area')
    })


})