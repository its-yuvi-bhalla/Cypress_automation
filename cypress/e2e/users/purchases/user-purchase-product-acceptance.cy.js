import label from '../../../fixtures/label.json'
import classSelectors from '../../../selectors/classSelectors.json'
import htmlSelectors from '../../../selectors/htmlSelectors.json'

/**
 * @description
 * This spec file contains test to verify that user can purchase a single device
 *
 * @breadcrumb
 * login > cart
 *
 * @assertions
 * To verify that admin can sign up on the website
 *
 */

describe('login',()=>{
  const random = new Date().getTime()
  const userInfo = {
    username: `qa_auto_user${random}`, 
    password: random 
  }
  const creditCard = {
    cardNumber: '1111 1111 1111 1111',
    month: '03',
    year: '2025' 
  }
  
  const deviceName = label.phones.iphoneSix

  beforeEach('login',()=>{
    cy.userSignup(userInfo.username, userInfo.password)
    cy.userLogin(userInfo.username, userInfo.password)
  })
  
  it('signup on the website',()=> {
    cy.get(classSelectors.productTitle).contains(deviceName).scrollIntoView().should('be.visible').click()
    cy.get(classSelectors.btn).contains(label.buttonLabels.addToCart).click()
    // alert message cannot be seen in testing env
    cy.on('window:alert', (alert) => {
      expect(alert).to.equal(label.alertMessages.productAdded)
    })
    cy.get(classSelectors.navItem).contains(label.navbarLabels.cart).click()
    cy.get(`${htmlSelectors.tr}:nth-child(1)`).within(()=>{
      // assertion on device name in cart 
      cy.get(htmlSelectors.td).eq(1).should('have.text', deviceName)
      // assertion on phone price
      cy.get(htmlSelectors.td).eq(2).should('have.text', label.phonePrices.iphoneSix)
    })
    cy.get(classSelectors.btn).contains(label.buttonLabels.placeOrder).click()
    cy.makePayment(userInfo.username,creditCard )
  })
})