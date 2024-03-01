class AutoStore_HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("automation_test_store"))
    
    }
    clickOn_HairCare_Link() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }

}
export const onAutoStore_HomePage_PO = new AutoStore_HomePage_PO()