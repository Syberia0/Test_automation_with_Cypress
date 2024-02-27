///<reference types="Cypress" />

describe("Verify radio buttons via webdriveruniversity ", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('#dropdown-checkboxes-radiobuttons').invoke("removeAttr", "target").click({ force: true });
    });
  
    it("Check specific radio buttons ", () => {
        cy.get('#radio-buttons').find('[type="radio"]').first().check() //locate first radio button
        cy.get('#radio-buttons').find('[type="radio"]').eq(2).check()  // we could also create allias
    });
    it("Validate the state of specific radio button ", () => {

        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')

        
        cy.get('[value="lettuce"]').check()
        cy.get('[value="lettuce"]').should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')

        cy.get('[value="pumpkin"]').should('be.disabled')
    });
   
  
   
  });
  