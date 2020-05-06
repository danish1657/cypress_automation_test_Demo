/// <reference types="cypress" />
 
describe('Registration Form Validation', function()
{
   it('Verify Hobbies check boxes', function()
   {

    cy.visit("http://demo.automationtesting.in/Register.html")
    cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
    cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
    cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

    cy.get('#checkbox1').uncheck().should('not.be.checked')
    cy.get('#checkbox2').uncheck().should('not.be.checked')
    cy.get('#checkbox3').uncheck().should('not.be.checked')

    cy.get('input[type=checkbox]').check(['Cricket','Hockey'])

   })

   it('Skills Dropdown', function()
   {

    cy.get('#Skills').select('Android').should('have.value','Android')

   })

   it('Multiselect Dropdown', function()
   {

    cy.get('#msdd').click()
    cy.get('.ui-corner-all').contains('English').click()
    cy.get('.ui-corner-all').contains('Japanese').click()
    
   })

   it('Combo-box Dropdown', function()
   {

    cy.get('[role=combobox]').click({force:true})
    cy.get('.select2-search__field').type('Den')
    cy.get('.select2-search__field').type('{enter}')
    
   })

})