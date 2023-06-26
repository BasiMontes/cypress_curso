describe('Jquery y Cypress', function() {

    /*
    it('Haciendo una operación con JQuery', function(){
        //Método Jquery. Llamada síncrono, no espera tiempos. No hay esperas dinámicas

        const elemento = $('elemento')
        elemento.click();
    })

    it('JQuery VS Cypress', function (){
        //Jquery
        const elemento = $('selector')

        if(elemento. length) {
            hacemosAlgo (elemento)
        }
        
        //Cypress
        cy.get('selector').then((elemento) => {
        hacemosAlgo(elemento)
        })
    })
    */

    it('Haciendo una operación con JQuery', function(){
        $.each[1,2,3], (arrayIndex, arrayValue) => {
            expect(arrayValue).to.eq(arrayValue)
        }
    })

    //OR Jquery

    $$.each([1,2,3], (arrayIndex, arrayValue) => {
        expect(arrayValue).to.eq(arrayValue)
    })

})