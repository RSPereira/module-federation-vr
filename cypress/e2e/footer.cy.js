describe('footer tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Checks that footer appears after loading', () => {
    cy.get('[data-cy="footer"]').should('exist')
  })
})
