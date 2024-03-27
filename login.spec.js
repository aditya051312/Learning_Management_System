describe('Login Test', function() {
  it('validLoginTest', function() {
    cy.visit('/login')
    cy.get('input[name=username]').type('valid_username')
    cy.get('input[name=password]').type('valid_password')
    cy.get('input[type=submit]').click()
    cy.url().should('include', '/dashboard')
  })

  it('invalidLoginTest', function() {
    cy.visit('/login')
    cy.get('input[name=username]').type('invalid_username')
    cy.get('input[name=password]').type('invalid_password')
    cy.get('input[type=submit]').click()
    cy.contains('Invalid credentials')
  })
})