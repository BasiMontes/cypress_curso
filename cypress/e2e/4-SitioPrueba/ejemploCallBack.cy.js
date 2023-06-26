//Ejemplo de una función Callback

ejemploCallback(){
    cy.get("boton1").click().then(() => {
        //Primero pasa el click en el botón 2
        cy.get("boton2").click()
    })
}

// Define la acción que se pasará como callback
action = () => {
   cy.get('button').click();
}

// Define la función que recibirá el callback
performActionWithCallback = (callback) => {
   cy.visit('https://example. com');
   callback(); 

// Llamada a la función con el callback
performActionWithCallback(action);
}