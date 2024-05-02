describe('cards tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Checks that cards appears after loading', () => {
    cy.get('[data-cy="cards"]').should('exist')
  })

  describe('with api request', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://dummyjson.com/**', {
        fixture: 'products.json',
      })
    })

    it('Checks that card appears with correct data', () => {
      cy.contains('iPhone 9').should('exist')
    })

    it('Checks that alert appears after buy button clicked', () => {
      cy.contains('Comprar').click()

      cy.on('window:alert', str => {
        expect(str).to.equal('Produto adicionado no carrinho.')
      })

      cy.get('[data-cy="header"] main button').click()
      cy.contains('Compras').siblings('span').should('have.text', 1)
    })
  })
})
