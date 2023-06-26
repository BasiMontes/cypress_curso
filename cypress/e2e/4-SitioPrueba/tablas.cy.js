describe('Tablas estáticas y dinámicas', function() {

    it('Validamos texto en una tabla estática', function(){
        //Navegar a la web con tabla
        cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/')
        //Ubicamos toda la primera colunma
        cy.get('#table1 > tbody > tr > td:nth:child(1)').each(($element, index, $list)=> {
            //Nos trae el texto de cada elemento en la columna 1
            const t = $element.text();
            //Le ponemos que estamos buscando que incluya
            if (t.includes('Ranorex')){
                //Encuentra el valor 'Ranorex' y devuelveme el siguiente valor
                cy.get('#table1 > tbody > tr > td:nth:child(1)').eq(index).next().then(function(p){
                    //Tomamos el texto del elemento próximo
                    const r = $p.text();
                    //Validación de texto sobre este elemento
                    expect(r).to.contains('Commercial')
                })
            }
        })
    })

    it('Validamos texto en una tabla dinamica', function(){
        //Navegar a la web con tabla
        cy.visit('https://chercher.tech/practice/dynamic-table/')
        //La columna que contenga 'facebook.com'
        cy.contains('td', 'facebook.com')
            //Que coja el elemento previo
            .prev()
            //Encuentra el elemento check y lo marca
            .find('input')
            .check()

    })

    it('Validamos texto en una tabla dinamica. EJEMPLO 2', function(){
        //Navegar a la web con tabla
        cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/')
        //La columna que contenga 'Ranorex'
        cy.contains('td', 'Ranorex')
            //Que coja el siguiente elemento
            .next()
            .should('have.text', 'Commercial')
            .check()

    }) 


})