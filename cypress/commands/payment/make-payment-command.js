import paymentSelectors from '../../selectors/payment-dialog-selectors.json'
import label from '../../fixtures/label.json'
import classSelectors from '../../selectors/classSelectors.json'
import htmlSelectors from '../../selectors/htmlSelectors.json'

/**
 * @description
 * This command is used to fill payment details and make payment
 * 
 * @assertions
 * To verify if order is placed 
 */


Cypress.Commands.add('makePayment', (username,creditCardInfo) => {
  Cypress.log({
    name: 'makePayment'
  })
  cy.wait(1000, {log:false})
  cy.get(paymentSelectors.nameField).type(username)
  cy.wait(1000, {log:false})
  cy.get(paymentSelectors.card).type(creditCardInfo.cardNumber)
  cy.get(paymentSelectors.month).type(creditCardInfo.month)
  cy.get(paymentSelectors.year).type(creditCardInfo.year)
  cy.get(classSelectors.btn).contains(label.buttonLabels.purchase).click()
  cy.get(classSelectors.purchaseMadeDialog).within(()=>{
    cy.get(htmlSelectors.h2).should('have.text', label.messages.purchaseComplete)
      .next().should('contain', `Card Number: ${creditCardInfo.cardNumber}`)
      .should('contain', `Name: ${username}`)
  })
  
})