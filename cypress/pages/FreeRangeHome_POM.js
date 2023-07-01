//Vamos a formular el flujo que está en 3-FreeRangeTester/HomePage.cy.js con POM
class FreeRangeHomePOM{

    //Locators
    empezarButton(){
        return cy.get('#comp-krjanv4p > [data-testid="linkElement"] > ._10jd7').as('BotonEmpezar')
    }

    //Acciones sobre los elementos
    clickABotonEmpezar(){
        this.empezarButton().click
    }

    //Navegación
    navigateToHome(){
        cy.visit('https://www.freerangetesters.com')
    }

}

export default FreeRangeHomePOM
