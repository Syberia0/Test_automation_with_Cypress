///<reference types="Cypress" />

describe("Test Contact Us Form via Webdriver ", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  });

  it("Should be able to submit a successful sumission via contact form us form ", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");

    cy.get('[name="first_name"]').type("Anduin");
    cy.get('[name="last_name"]').type("Wrynn");
    cy.get('[name="email"]').type("anduin.wrynn@azeroth.com");
    cy.get("textarea.feedback-input").type("May be light be with u");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should be able to submit a successful sumission via contact form us form ", () => {
    cy.get('[name="first_name"]').type("Anduin");
    cy.get('[name="last_name"]');
    cy.get('[name="email"]').type("anduin.wrynn@azeroth.com");
    cy.get("textarea.feedback-input").type("May be light be with u");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
