///<reference types="Cypress" />

describe("Iterate over element ", () => {
  beforeEach(function () {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Log information of all hair care products ", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index:" + index + " : " + $el.text());
    });
  });
  it("Add specific product to basket", () => {
    //    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=> {
    //     if($el.text().includes('Curls to straight Shampoo')) {
    //         cy.wrap($el).click()
    //     }
    // })
    cy.selectProduct("Curls to straight Shampoo");
  });
  it("Add another specific product to basket2", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
  it("Add another specific product to basket3", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
