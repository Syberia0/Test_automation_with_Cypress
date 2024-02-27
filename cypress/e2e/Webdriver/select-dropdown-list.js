///<reference types="Cypress" />

describe("Interact with dropdown list via webdriveruni ", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr", "target").click({ force: true });
    });
  
    it("Select specific values via select dropdownlist", () => {
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery')

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    
    
    });
    
   
  
   
  });