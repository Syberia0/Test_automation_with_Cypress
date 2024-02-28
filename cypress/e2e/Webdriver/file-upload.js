describe('Test File Upload via webdriveruni', () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
      })
      
    it('Upload a file', () => {
        cy.get('#myFile').selectFile("cypress/fixtures/Scrum+Values.png")
        cy.get('#submit-button').click()
        
    });
    it('Upload a no file', () => {
        cy.get('#submit-button').click()
        
    });
});
