///<reference types="Cypress" />

describe("Validate webdriveruni homepage lins ", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
   
    });
  
    it("Confirm links redirest to correct pages ", () => {
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()
        cy.url().should('include', "/")
       // cy.reload(true)    //reload without cashe

       cy.go('forward')
       cy.url().should('include', 'contactus')

       cy.go('back')
       cy.get("#login-portal").invoke("removeAttr", "target").click({ force: true });
       cy.url().should('include', 'Login-Portal')
       cy.go('back')

       cy.get('#to-do-list').invoke("removeAttr", "target").click({ force: true });
       cy.url().should('include', 'To-Do-List')

    });
  
    
    
  });
  