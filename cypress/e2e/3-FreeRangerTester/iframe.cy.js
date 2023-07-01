describe('Trabajando con iFrames', () => {

    it('Valido texto dentro de un iFrame', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame')
            .iframe('body #button-find-out-more > b')
            .should('include.text', 'Find Out More!')

    })

})
