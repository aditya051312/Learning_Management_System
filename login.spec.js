describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('/login'); // visit the login page before each test
    });

    it('logs in with valid credentials', () => {
        cy.get('input[name=username]').type('validUsername');
        cy.get('input[name=password]').type('validPassword');
        cy.get('button[type=submit]').click();

        // check if the user is redirected to the dashboard after successful login
        cy.url().should('include', '/dashboard');
    });

    it('shows an error message with invalid credentials', () => {
        cy.get('input[name=username]').type('invalidUsername');
        cy.get('input[name=password]').type('invalidPassword');
        cy.get('button[type=submit]').click();

        // check if an error message is displayed
        cy.get('.error-message').should('be.visible');
    });
});