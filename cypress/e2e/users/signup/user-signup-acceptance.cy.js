import landingPageSelectors from '../../../selectors/landing-page-selectors.json'

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
  const userCredentials={
    username: `new_user${random}`,
    password:'demo@testing123'
  }
  beforeEach('signup a new user', ()=>{
    cy.userSignup(userCredentials.username, userCredentials.password)
  })

  it('signup on the website',()=> {
    cy.userLogin(userCredentials.username, userCredentials.password)
    // asserting on welcome user message
    cy.get(landingPageSelectors.userWelcome).should('have.text', `Welcome ${userCredentials.username}`)
  })
})