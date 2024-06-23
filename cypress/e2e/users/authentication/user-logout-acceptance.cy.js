import htmlSelectors from '../../../selectors/htmlSelectors.json'
import label from '../../../fixtures/label.json'
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

describe('login',()=>{

  const adminData = Cypress.config('adminCredentials')
  const userInfo = {
    username: adminData.username, // Corrected to lowercase 'username'
    password: adminData.Password // Corrected to uppercase 'Password'
  }
  beforeEach('signup a new user', ()=>{
    cy.userLogin(userInfo.username, userInfo.password)
  })
  it('signup on the website',()=> {
    cy.get(htmlSelectors.a).contains(label.logOut).click()
    cy.get(htmlSelectors.a).contains(label.login).should('be.visible')
  })
})