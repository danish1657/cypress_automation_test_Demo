/// <reference types="cypress" />
 
 describe('Locate Elements', function()
 {
    it('Verify types of Locators', function()
    {

        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-Inch")
        cy.get('#small-search-box-form > .button-1').click()
       cy.get('.product-box-add-to-cart-button').click()

       cy.get('#addtocart_4_EnteredQuantity').clear().type('2')
       //cy.wait(5000)
        cy.get('#add-to-cart-button-4').click()
        cy.wait(5000)
        cy.get('.cart-label').click()
        //cy.wait(5000)
        cy.get('.product-unit-price').contains('$1,800.00')

    }
    )

})