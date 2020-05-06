
 /// <reference types="cypress" />
 
 describe('Handling UI Elements', function()
 {
    it('Checking Inputbox & radio buttons', function()
    {
        cy.visit("http://newtours.demoaut.com/") // visit URL
        cy.url().should('include', 'newtours') //url should contain this text
        cy.get('[name="userName"]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('[name="password"]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('[name="login"]').should('be.visible').click()
        cy.wait(8000)
        cy.title().should('eq',"Find a Flight: Mercury Tours:")
        cy.get('[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('[value=oneway]').should('be.visible').should('not.be.checked').click()
        cy.get('td > input').should('be.visible').click()
        cy.wait(8000)
        cy.title().should('eq','Select a Flight: Mercury Tours')

  
    }
    )   
  
 })