/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.creditas.com/emprestimo-online?utm_source=cypress&utm_medium=rnco')
  })

  it('displays two todo items by default', () => {
    //cy.get('[data-testid="product-card-button"]').click()
    cy.get('[data-testid="product-card-button"]').click()
  })
})
