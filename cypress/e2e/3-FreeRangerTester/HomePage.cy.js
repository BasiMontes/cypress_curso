//Grupo de Test a probar
describe('Home de www.freerangertesters.com', () => {

    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com')

    })

    it('Should have a title', () => {
        cy.title().should('include', 'Free Range Testers')
        //Búsqueda por XPATH
        cy.xpath('//*[@id="comp-l02x1m8d2label"]').click()
        //Búsqueda por texto
        cy.contains('Iniciar Sesión')
    })

    it('Hay cuatro cursos con el botón para ver más', () => {
        //Click en Cursos del Header
        cy.get('#comp-l02x1m8d2label').click()
        //El Webelement debería tener 4 elementos
        cy.get('[data-testid="linkElement"] > ._1Qjd7').should('have.length', 4)
    })

    it('El campo nombre del formulario posee la clase _1SOvY has-custom-focus', () => {
        //Validación de una clase
        cy.get('#input_comp_l1ed927d').should('have.class', '_1SOvY has-custom-focus')
    })

    it('Hay un link llamado Blog en la barra de navegación', () => {
        //Verificar que un elemento tiene un texto dado
        cy.get('#comp-l02x1m8d1label').should('have.text', 'Blog')
        //Verificar que un elemento tiene un valor dado
        cy.get('#comp-l02x1m8d1label').should('have.value', '')
    })

    it('Existe un botón de empezá a aprender visible', () => {
        //Mala práctica que espera XX segundos
        cy.wait(4000)
        //Verificar que un elemento está visible + ALIAS(Más mostrarlo como un log cuando llegue a ese paso)
        cy.get('#comp-krjanv4p > [data-testid="linkElement"] > ._10jd7').as('BotonEmpezar')
        cy.get('BotonEmpezar', log).should('be.visible')
        //Verificar que un elemento existe
        cy.get('#comp-krjanv4p > [data-testid="linkElement"] > ._10jd7').should('exist')
    })

    it('Existe un botón de empezá a aprender NO visible', () => {
        //Verificar que un elemento NO está visible
        cy.get('#comp-krjanv4p > [data-testid=linkElement"] > ._10jd7').should('not.be.visible')
        //Verificar que un elemento NO existe
        //cy.get('#comp-krjanv4p > [data-testid=" linkElement"] > ._10jd7').should('not.exist')
    })

    it('El elemento está Checked', () => {
        //Verificar que un elemento está chequeado
        cy.get('').should('be.checked')
        //cy.get('').should('not.be.checked')
    })

    it('El elemento está deshabilitado', () => {
        //Verificar que un elemento está deshabilitado
        cy.get('').should('be.disabled')
        //cy.get('').should('not.be.disabled')

    })

    it('Probando el comando .FIND()', () => {
        cy.get('').should('be.checked')
        //Find() siempre un WebElement NO ALIAS
        cy.get('#form').find('[type="checkbox"]').should('be.checked')


    })


})
