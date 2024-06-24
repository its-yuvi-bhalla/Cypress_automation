import landingPageSelectors from '../../selectors/landing-page-selectors.json'
import signUpSelectors from '../../selectors/signup-selectors.json'
import classSelectors from '../../selectors/classSelectors.json'
import label from '../../fixtures/label.json'

/**
 * @description
 * This command is used to signup a new user
 * 
 * @assertions
 * To verify link visit is successful 
 */


Cypress.Commands.add('userSignup', (username, password) => {
  Cypress.log({
    name: 'userSignup'
  })

  cy.visit(Cypress.config('baseUrl'))
  cy.get(landingPageSelectors.logo).should('be.visible')
  cy.get(landingPageSelectors.signUpButton).click()
  cy.wait(2000)
  cy.get(signUpSelectors.usernameField).click().clear().type(username)
  cy.get(signUpSelectors.passwordField).click().type(password)
  cy.get(classSelectors.btn).contains(label.buttonLabels.signUp).click()
  cy.log('signup Success')
})