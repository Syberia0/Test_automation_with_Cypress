class AutoStore_HoirCare_PO {
    addHairCareProductToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element).then(() => {
                //debugger//click at relevant element and the trigger debugger, we can freeze our test, inspect HTML code , network tabs etc
            })
        })
        cy.get('.dropdown-toggle > .fa').click() //.debug() can also add here
      }
    }
       
export const onAutoStore_HoirCare_PO = new AutoStore_HoirCare_PO()