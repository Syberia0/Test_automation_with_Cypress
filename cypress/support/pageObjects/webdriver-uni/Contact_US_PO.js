class Contact_Us_PO {
    
    contactForm_Submission(firstname, lastname, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstname);
        cy.get('[name="last_name"]').type(lastname);
        cy.get('[name="email"]').type(email);
        cy.get("textarea.feedback-input").type(comment);
        cy.get('[type="submit"]').click();
        
        cy.get($selector).contains(textToLocate), {timeout: 60000};
        cy.screenshot()
        cy.screenshot("Make a contact us form submission")
        

    }

}
export const onContact_Us_PO = new Contact_Us_PO()