class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"))
    }
    
}
export default HomePage_PO