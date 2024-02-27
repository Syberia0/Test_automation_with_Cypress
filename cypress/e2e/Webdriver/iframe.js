///<reference types="Cypress" />

describe("Handaling IFrame& Modals ", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    });
  
    it("Handle webdriveruni iframe and modal", () => {
        cy.get("#frame").then($iframe => {
            const body = $iframe.contents().find('body') // we look for body of this iframe in HTML code
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include("Welcome to webdriveruniversity.com");

        })
        cy.get('@modal').contains('Close').click()
    });
  
  
  });
  