/// <reference types="cypress" />

Cypress._.times(25, (k) => {
  describe(`example to-do app ${k+1}/1`, () => {
    beforeEach(() => {
      cy.visit('/')
      cy.clearLocalStorage()
    })

    it.only('AE - LF step 1', () => {
      cy.wait(2000)
      cy.get('[data-testid="intendedCredit"]').type('5000')
      cy.get('[data-testid="email"]').type(`reinaldo.nan+124578${k+1}@google.com`)
      cy.get('[data-testid="fullName"]').type('Reinaldo Nani Test Cypress')
      cy.get('[data-testid="submit"]').click()
      cy.wait(4000)
    })
  })
})
