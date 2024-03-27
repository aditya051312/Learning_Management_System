describe('Login Test', () => {
  it('successfully logs in', () => {
    cy.visit('/');
    cy.get('input[type=text]').type('test');
    cy.get('input[type=password]').type('test');
    cy.get('input[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });
});