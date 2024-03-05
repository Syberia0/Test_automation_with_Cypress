///<reference types="Cypress" />
import {onHomePage_PO} from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import {onContact_Us_PO} from "../../support/pageObjects/webdriver-uni/Contact_US_PO"
describe("Test Contact Us Form via Webdriver ", () => {

  Cypress.config('defaultCommandTimeout', 20000)// overwrite Timeout which was set somewhere else 
  beforeEach(() => {
 
    onHomePage_PO.visitHomepage()
    onHomePage_PO.clickOn_ContactUs_Button()
    // cy.pause() //stops at certain moment where we want to debug,inspect etc
    // cy.wait(3000) //it will allow for loading for example new page 
  
   
  });
  it("Should be able to submit a successful submission via contact form us form ", () => {
    cy.fixture("user-data").then((data) => {
      const { firstname, lastname, email, comment } = data.customer1;

      cy.document().should("have.property", "charset").and("eq", "UTF-8");
      cy.title().should("include", "WebDriver | Contact Us");
      cy.url().should("include", "contactus");
   
      onContact_Us_PO .contactForm_Submission(firstname, lastname, email, comment, 'h1', 'Thank You for your Message!');
    });
  });

  it("Should be able to submit a successful sumission via contact form us form ", () => {
    cy.fixture("user-data").then((data) => {
      const { firstname, lastname, email, comment } = data.customer2;
     onContact_Us_PO.contactForm_Submission(firstname, lastname, " ", comment, 'body', 'Error: Invalid email address');
    });
  });
  it("Should be able to submit a successful sumission via contact form us form FAILING ON PURPOSE ", () => {
    cy.fixture("user-data").then((data) => {
      const { firstname, lastname, email, comment } = data.customer2;
     onContact_Us_PO.contactForm_Submission(firstname, lastname, " ", comment, 'body', 'Error: Invalid email address2');
    });
  });
});
