describe('Danish Test Suite First Test', () => {
    it('Verify Title of the page', () => {
      cy.visit('https://demo.nopcommerce.com/')
      cy.title().should('eq','nopCommerce demo store')
    })

   

  })