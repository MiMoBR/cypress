/// <reference types="cypress" />

describe('Entitlement', () => {
  beforeEach(() => {
    cy.visit('http://www.google.com')
  })

  Cypress._.times(10, (k) => {
    it.only('First test', () => {
      cy.get('[aria-current="page"]').click()
    })
  })

})