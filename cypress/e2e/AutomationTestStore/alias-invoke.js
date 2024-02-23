///<reference types="Cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product ", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });
  it("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });


  it("Calculate of normal and sale product", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail").find('.oneprice').each(($el, index, $list) => {
    //    cy.log($el.text()) //logging all product price

    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

    var itemsTotal = 0;
    cy.get('@itemPrice').then($linkText => {
        var itemsPriceTotal = 0;
        var itemPrice = $linkText.split('$') // so whenever there is dollar mark it will split the price form normal and sale 
        var i;
        for(i = 0; i < itemPrice.length; i++) { //LOOP
            cy.log(itemPrice[i]) //Non sale items
            itemsPriceTotal += Number(itemPrice[i]) //it converts it to a number 

        }
        itemsTotal += itemsPriceTotal;
        cy.log("Non sale price items total: " + itemsPriceTotal)
    
    });
    
    cy.get('@saleItemPrice').then($linkText => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkText.split('$');  
        var i;
        for(i = 0; i < saleItemPrice.length; i++) { 
            cy.log(saleItemPrice[i]) 
            saleItemsPrice += Number(saleItemPrice[i])
            
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale price items total: " + saleItemsPrice)
    
    })
    .then( () => {
        cy.log("The total price of all products: " + itemsTotal)
        expect(itemsTotal).to.equal(660.5)
    })
  });
});
