/// <reference types="Cypress" />

context('Settings', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#view #settings').click()
  })

  it('Change the name to Jack Sparrow', () => {
    cy.get('#firstName').clear().type('Jack')
    cy.get('#lastName').type('{selectAll}Sparrow')
    cy.get('#email').type('captain@black-pearl.ship')

    cy.get('#result')
      .should('contain.value', '"firstName": "Jack",')
      .should('contain.value', '"lastName": "Sparrow",')
      .should('contain.value', '"email": "captain@black-pearl.ship",')
  })

  it('Change the gender to female', () => {
    cy.get('#result').should('contain.value', '"gender": ""')

    cy.get('#female').check()

    cy.get('#result').should('contain.value', '"gender": "female"')
  })

  it('Select the newsletter', () => {
    cy.get('#result').should('contain.value', '"newsletter": false')
    
    cy.get('#newsletter').check()
    cy.get('#result').should('contain.value', '"newsletter": true')
    
    cy.get('#newsletter').uncheck()
    cy.get('#result').should('contain.value', '"newsletter": false')
  })
})