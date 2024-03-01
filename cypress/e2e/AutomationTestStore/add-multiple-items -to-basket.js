import { onAutoStore_HomePage_PO } from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import { onAutoStore_HoirCare_PO } from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";


///<reference types="Cypress" />

describe("Add multiple items to basket ", () => {
  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    onAutoStore_HomePage_PO.visitHomepage()
    onAutoStore_HomePage_PO.clickOn_HairCare_Link()
  });

  it("Add specific items to basket", () => {
  onAutoStore_HoirCare_PO.addHairCareProductToBasket()
});
})
