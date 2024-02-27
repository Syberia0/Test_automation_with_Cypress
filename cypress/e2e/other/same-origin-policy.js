///<reference types="Cypress" />

describe("Cypress web security ", () => {
  // beforeEach(() => {
  //   cy.visit("/");
  //   cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

  // });

  it("Validate visiting two different domains", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/"); // this kinda works
  });

  it("Validate visiting two different domains  via user actions", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
    //this gives error , u need to add  chromeWebSecurity: false, to cypress.config.js
  });
 
  
});
