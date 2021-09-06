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

  it('Change the country to NL', () => {
    cy.get('#result').should('contain.value', '"country": "US"')

    cy.get('#country').select('Netherlands')

    cy.get('#result').should('contain.value', '"country": "NL"')
  })

  it('Change the happiness to 95%', () => {
    cy.get('#result').should('contain.value', '"happiness": 80')

    cy.get('#happiness').invoke('val', 95).trigger('input')

    cy.get('#result').should('contain.value', '"happiness": 95')
  })
})