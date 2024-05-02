describe('header tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Checks that header appears after loading', () => {
    cy.get('[data-cy="header"]').should('exist')
  })

  it('Checks that header modal appears empty after click', () => {
    cy.get('[data-cy="header"] main button').click()

    cy.contains('Seu carrinho está vazio.').should('not.be.hidden')
  })

  it('Checks that header modal closes after click on close button', () => {
    cy.get('[data-cy="header"] main button').click()
    cy.get('[data-cy="modal"] button').first().click()

    cy.contains('Seu carrinho está vazio.').should('be.hidden')
  })

  it('Checks that header modal closes after click on cancel button', () => {
    cy.get('[data-cy="header"] main button').click()
    cy.get('[data-cy="modal"] button').contains('Cancelar').click()

    cy.contains('Seu carrinho está vazio.').should('be.hidden')
  })

  it('Checks that header modal shows success message after click on success button', () => {
    cy.get('[data-cy="header"] main button').click()
    cy.get('[data-cy="modal"] button').contains('Concluir compras').click()

    cy.on('window:alert', str => {
      expect(str).to.equal('Compras concluidas com sucesso!')
    })
  })
})
