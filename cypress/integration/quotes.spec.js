describe('Quotes Form Inputs', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:1234')
    cy.url().should('include', 'localhost')
  })

  it('submit button is disabled', () => {
    cy.get('button#submitBtn')
      .should('be.disabled')
  })

  it('can type a text for a new quote', () => {
    cy.get('input[name="text"]')
      .type('Have fun!')
      .should('have.value', 'Have fun!')
  })

  it('can type an author for a new quote', () => {
    cy.get('input[name="author"]')
      .type('Gabe')
      .should('have.value', 'Gabe')
  })

  it('button is not disabled any more', () => {
    cy.get('button#submitBtn')
      .should('not.be.disabled')
  })

  it('can cancel the new quote', () => {
    cy.get('button#cancelBtn').click()
  })

  it('text input is back to blank', () => {
    cy.get('input[name="text"]')
      .should('have.value', '')
  })

  it('author input is back to blank', () => {
    cy.get('input[name="author"]')
      .should('have.value', '')
  })

  it('button is back to being disabled', () => {
    cy.get('button#submitBtn')
      .should('be.disabled')
  })
})

// context('Creating and deleting a new friend', () => {
//   it('can navigate to the site', () => {
//     cy.visit('http://localhost:1234')
//   })

//   it('can create a new friend', () => {
//     cy.get('input[name="username"]')
//       .type('Lady Gaga')

//     cy.get('input[name="email"]')
//       .type('lady@gaga.com')

//     cy.get('select[name="role"]')
//       .select('Instructor')

//     cy.get('button.submit').click()

//     cy.get('.friend h2').contains('Lady Gaga')
//     cy.get('.friend p').contains('Email: lady@gaga.com')
//     cy.get('.friend p').contains('Role: Instructor')
//   })

//   it('can delete the new Friend', () => {
//     cy.get('.friend p').contains('Email: lady@gaga.com').next().next().click()
//     cy.get('.friend h2').contains('Lady Gaga').should('not.exist')
//     cy.get('.friend p').contains('Email: lady@gaga.com').should('not.exist')
//   })

//   it('can delete the existing Friend', () => {
//     cy.get('.friend h2').contains('Michael').next().next().next().click()
//     cy.contains('Michael').should('not.exist')
//   })
// })
