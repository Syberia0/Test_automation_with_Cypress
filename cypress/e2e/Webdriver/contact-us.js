///<reference types="Cypress" />

describe("Test Contact Us Form via Webdriver ", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  });
  it("Should be able to submit a successful submission via contact form us form ", () => {
    cy.fixture("user-data").then((data) => {
      const { firstname, lastname, email, comment } = data.customer1;

      cy.document().should("have.property", "charset").and("eq", "UTF-8");
      cy.title().should("include", "WebDriver | Contact Us");
      cy.url().should("include", "contactus");
      cy.webdriveruni_ContactForm_Submission(firstname, lastname, email, comment, 'h1', 'Thank You for your Message!');
    });
  });

  it("Should be able to submit a successful sumission via contact form us form ", () => {
    cy.fixture("user-data").then((data) => {
      const { firstname, lastname, email, comment } = data.customer2;
      cy.webdriveruni_ContactForm_Submission(firstname, lastname, " ", comment, 'body', 'Error: Invalid email address');
    });
  });
});
