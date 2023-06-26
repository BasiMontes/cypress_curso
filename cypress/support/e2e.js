// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

//RUTA PROYECTO:
// cd C:\Users\basi_\Desktop\Testing\automation\CypressUdemy

//ABRIR CYPRESS:
// npx cypress open

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands') 

//Para controlar los porpios errores de la página a testear
Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
   // failing the test
   return false

})

// Se ha instalado un plugin para tomar los XPATH en lugar de los CSS Selectors
require('cypress-xpath')
