import { mount } from '@cypress/react';
import LoginPage from '../components/LoginPage';

describe('LoginPage', () => {
  beforeEach(() => {
    mount(<LoginPage />);
  });

  it('renders successfully', () => {
    cy.get('form').should('exist');
  });

  it('handles input change', () => {
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password');
    cy.get('input[name="username"]').should('have.value', 'testuser');
    cy.get('input[name="password"]').should('have.value', 'password');
  });

  it('handles form submission', () => {
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('handles incorrect username or password', () => {
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Incorrect username or password');
  });

  it('handles server errors', () => {
    cy.intercept('POST', '/api/login', { statusCode: 500 });
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Server error, please try again later');
  });
});