import landingPageSelectors from '../selectors/landingPageSelectors.json'

/**
 * @description
 * This command is used to visit the webpage
 * 
 * @assertions
 * To verify link visit is successful
 */


Cypress.Commands.add('VisitPage', (serverDetails) => {
    Cypress.log({
      name: 'VisitPage'
    })

    cy.visit('https://www.demoblaze.com/')
    cy.get(landingPageSelectors.logo).should('be.visible')
})