import landingPageSelectors from '../selectors/landing-page-selectors.json'
import loginSelectors from '../selectors/login-selectors.json'
import classSelectors from '../selectors/classSelectors.json'
import label from '../fixtures/label.json'

/**
 * @description
 * This command is used to signup a new user
 * 
 * @assertions
 * To verify link visit is successful 
 */


Cypress.Commands.add('userLogin', (username, password) => {
  Cypress.log({
    name: 'userLogin'
  })

  cy.visit(Cypress.config('baseUrl'))
  cy.get(landingPageSelectors.loginButton).click()
  cy.wait(2000)
  cy.get(loginSelectors.usernameField).click().clear().type(username)
  cy.get(loginSelectors.passwordField).click().type(password)
  cy.get(classSelectors.btn).contains(label.login).click()
  cy.log('Login Success')
})