describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display the login form', () => {
    cy.get('form').should('be.visible');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should allow a user to log in with valid credentials', () => {
    cy.get('input[type="text"]').type('validusername');
    cy.get('input[type="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('should not allow a user to log in with invalid credentials', () => {
    cy.get('input[type="text"]').type('invalidusername');
    cy.get('input[type="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('not.include', '/dashboard');
  });

  it('should display an error message for invalid credentials', () => {
    cy.get('input[type="text"]').type('invalidusername');
    cy.get('input[type="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
  });

  it('should handle long usernames gracefully', () => {
    cy.get('input[type="text"]').type('a'.repeat(51));
    cy.get('input[type="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
  });

  it('should handle long passwords gracefully', () => {
    cy.get('input[type="text"]').type('validusername');
    cy.get('input[type="password"]').type('a'.repeat(51));
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
  });
});
