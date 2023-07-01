import FreeRangeHomePOM from '../../pages/FreeRangeHome_POM'

const home = new FreeRangeHomePOM

describe('Ejemplo de POM en la web de Free Range Tester',() => {
    
    /*
    También podemos colocar el before each en el POM
    beforeEach(() => {
        home.navigateToHome()
    })
    */

    it('Comprobar que el botón "Empeza a aprender" existe', ()=> {
        home.navigateToHome()
        home.empezarButton().should('exist')
    })
})