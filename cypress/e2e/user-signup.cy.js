import landingPageSelectors from '../selectors/landing-page-selectors.json'
import signUpSelectors from '../selectors/signup-selectors.json'
import loginSelectors from '../selectors/login-selectors.json'
import classSelectors from '../selectors/classSelectors.json'
import label from '../fixtures/label.json'

/**
 * @description
 * This spec file contains test to verify that user can signup and login on the website
 *
 * @breadcrumb
 * login > click on signup >
 *
 * @assertions
 * To verify that admin can sign up on the website
 *
 */

describe('create new user and signup',()=>{

   const random = new Date().getTime()
   const username = `new_user${random}`
   const password = 'demo@testing123'
 beforeEach('visit the webpage',()=>{
   cy.visit('https://www.demoblaze.com/')
   cy.get(landingPageSelectors.logo).should('be.visible')

 })
    it('signup on the website',()=> {
      cy.get(landingPageSelectors.signUpButton).click()
      cy.wait(2000)
      cy.get(signUpSelectors.usernameField).click().clear().type(username)
      cy.get(signUpSelectors.passwordField).click().type(password)
      cy.get(classSelectors.btn).contains(label.signUp).click()

      cy.get(landingPageSelectors.loginButton).click()
      cy.wait(2000)
      cy.get(loginSelectors.usernameField).click().clear().type(username)
      cy.get(loginSelectors.passwordField).click().type(password)
      cy.get(classSelectors.btn).contains(label.login).click()

    })
})