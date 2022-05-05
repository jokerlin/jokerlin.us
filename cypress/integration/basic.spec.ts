context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', 'http://localhost:4000/')

    cy.contains('Posts')
      .should('exist')

    cy.contains('About')
      .should('exist')

    cy.contains('Posts')
      .click()
      .url()
      .should('eq', 'http://localhost:4000/posts')
  })
})
