describe('Pruebas en APIs con Cypress',() => {

    it('El endpoint "Posts" responde con un status de 200', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts/'
        }).then((respuesta) =>{
            //Espera un 200 en este endpoint
            expect(respuesta.status).to.eq(200)
        })
    })

    it('El endpoint "Posts" tiene 100 entradas', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('/posts')
            .its('body')
            .should('have.length', 100)
    })

    
    it('Validar el título del primer post', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts/1')
            .its('body')
            .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

})