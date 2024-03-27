describe('LMS Login Automation', () => {
  it('logs in with valid credentials', () => {
    // navigate to the login page
    cy.visit('https://lms.example.com/login')

    // fill in the email field
    cy.get('#email').type('valid@example.com')

    // fill in the password field
    cy.get('#password').type('validpassword')

    // submit the login form
    cy.get('#login-form').submit()

    // check that the login was successful
    cy.contains('Welcome back!')
  })

  it('fails to log in with invalid credentials', () => {
    // navigate to the login page
    cy.visit('https://lms.example.com/login')

    // fill in the email field
    cy.get('#email').type('invalid@example.com')

    // fill in the password field
    cy.get('#password').type('invalidpassword')

    // submit the login form
    cy.get('#login-form').submit()

    // check that an error message is displayed
    cy.contains('Invalid email or password.')
  })
})