class HomePage_PO {
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000})// it will fail if page is down , so it has to lead in 60 sec

    
    }
    clickOn_ContactUs_Button() {
        cy.visit(Cypress.env("webdriveruni_homepage"))
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true }, {timeout: 8000});
    }

}
export const onHomePage_PO = new HomePage_PO()