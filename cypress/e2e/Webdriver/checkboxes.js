///<reference types="Cypress" />

describe("Verify checkboxes ", () => {
    beforeEach(() => {
      cy.navigateTo_WebdriverUni_Homepage_Checkbox_Page()
    })
  
    it("Check and validate checkboxes ", () => {
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked') //or not.be.checked, depends
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')

        
    });
    it("UnCheck and validate checkboxes ", () => {
       
        cy.get(' :nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')

        
    });
    it("Check and validate mutiple checkboxes ", () => {
       
        cy.get(' input[type="checkbox"]').check("option-1", "option-2", "option-3", "option-4")
          
    });
  
  });
  