/// <reference types="Cypress" />

context('To Do List', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-testid=new-todo]').as('new-todo')
    cy.get('[data-testid=btn-add-todo]').as('btn-add-todo')
  })

  it('Can add a new to-do with button', () => {
    cy.get('@new-todo').type('A new to-do with button')
    cy.get('@btn-add-todo').click()
    
    cy.contains('li', 'A new to-do with button').should('be.visible')
  })

  it('Can add {abc}', () => {
    cy.get('@new-todo').type('{abc}', { parseSpecialCharSequences: false })
    cy.get('@btn-add-todo').click()
    
    cy.contains('li', '{abc}').should('be.visible')
  })

  it('Can add {xyz}', () => {
    cy.get('@new-todo').type('{{}xyz}{enter}')
    
    cy.contains('li', '{xyz}').should('be.visible')
  })

  it('Can add a new to-do with enter', () => {
    cy.get('@new-todo').type('A new to-do with enter{enter}')

    cy.contains('li', 'A new to-do with enter').should('be.visible')
  })

  it('Can add a new to-do in steps', () => {
    cy.get('@new-todo')
      .type('A ')
      .type('to-do ')
      .type('in ')
      .type('steps')
      cy.get('@btn-add-todo').click()

    cy.contains('li', 'A to-do in steps').should('be.visible')
  })
})
