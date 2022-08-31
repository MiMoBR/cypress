/// <reference types="cypress" />

describe('Entitlement', () => {
  beforeEach(() => {
    cy.visit('https://mimobr.com/')
  })

  Cypress._.times(10, (k) => {
    it.only('First test', () => {
      cy.get('[aria-current="page"]').click()
    })
  })

})