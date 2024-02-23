///<reference types="Cypress" />
///<reference types="cypress-xpath" />

describe("Test Contact Us Form via Automation Test Store ", () => {
    
  it("Should be able to submit a successful sumission via contact form us form ", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer > li > a").contains('Contact Us').click().then(function(linkText) {
        cy.log("Clicked on link using text : " + linkText.text())
    })
    cy.get("#ContactUsFrm_first_name").type("Arthas");
    cy.get("#ContactUsFrm_email").type("arthas.menethil@azeroth.com");
    cy.get("#ContactUsFrm_email").should('have.attr', 'name', 'email')
    cy.get("#ContactUsFrm_enquiry").type("Frostmourne sword");
    cy.get('.col-md-6 > .btn').click();
    cy.get(".mb40 > p:nth-of-type(2)").should(
      'have.text', "Your enquiry has been successfully sent to the store owner!")
    cy.log("Test has been completed")
    
    // cy.get(".mb40 > .btn").click();
  });
});
