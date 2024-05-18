/// <reference types="cypress" />

Cypress._.times(8, (k) => {
  describe(`example to-do app ${k+1}/13`, () => {
    beforeEach(() => {
      cy.visit('/')
      cy.clearLocalStorage()
    })

    it.only('Test click p with click here', () => {
      cy.wait(1000)
      cy.get('.App-link').contains('Click here!').click()
      //cy.get('[data-testid="intendedCredit"]').type('5000')
      //cy.get('[data-testid="email"]').type(`reinaldo.nan+124578${k+1}@google.com`)
      //cy.get('[data-testid="fullName"]').type('Reinaldo Nani Test Cypress')
      //cy.get('[data-testid="submit"]').click()
      //cy.wait(4000)
    })
  })
})
