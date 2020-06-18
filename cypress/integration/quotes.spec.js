context('Friends Form Inputs', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:1234')
    cy.url().should('include', 'localhost')
  })

  it('button is disabled', () => {
    cy.get('button.submit')
      .should('be.disabled')
  })

  it('can type a username', () => {
    cy.get('input[name="username"]')
      .type('Lady Gaga')
      .should('have.value', 'Lady Gaga')
  })

  it('can type an email', () => {
    cy.get('input[name="email"]')
      .type('lady@gaga.com')
      .should('have.value', 'lady@gaga.com')
  })

  it('can select a role', () => {
    cy.get('select[name="role"]')
      .select('Instructor')
      .should('have.value', 'Instructor')
  })

  it('button is not disabled any more', () => {
    cy.get('button.submit')
      .should('not.be.disabled')
  })
})

context('Username Validation Errors', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:1234')
  })

  it('should not show validation errors from the get-go', () => {
    cy.contains('Username required').should('not.exist')
  })

  it('shows validation error for less than 3 chars', () => {
    cy.get('input[name="username"]').type('a')
    cy.contains('Username required')

    cy.get('input[name="username"]').type('b')
    cy.contains('Username required')
  })

  it('validation error goes away for three chars', () => {
    cy.get('input[name="username"]').type('c')
    cy.contains('Username required').should('not.exist')
  })
})

context('Creating and deleting a new friend', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:1234')
  })

  it('can create a new friend', () => {
    cy.get('input[name="username"]')
      .type('Lady Gaga')

    cy.get('input[name="email"]')
      .type('lady@gaga.com')

    cy.get('select[name="role"]')
      .select('Instructor')
    
    cy.get('button.submit').click()

    cy.get('.friend h2').contains('Lady Gaga')
    cy.get('.friend p').contains('Email: lady@gaga.com')
    cy.get('.friend p').contains('Role: Instructor')
  })

  it('can delete the new Friend', () => {
    cy.get('.friend p').contains('Email: lady@gaga.com').next().next().click()
    cy.get('.friend h2').contains('Lady Gaga').should('not.exist')
    cy.get('.friend p').contains('Email: lady@gaga.com').should('not.exist')
  })

  it('can delete the existing Friend', () => {
    cy.get('.friend h2').contains('Michael').next().next().next().click()
    cy.contains('Michael').should('not.exist')
  })
})
