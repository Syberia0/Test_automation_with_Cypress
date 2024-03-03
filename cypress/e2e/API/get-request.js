/// <reference types="cypress" />

describe("Get Request", () => {
    var result
    it("validate status code of the  acess website", () => {
        result = cy.request("http://www.webdriveruniversity.com")
        result.its("status").should("equal", 200)

    })
    it("validate key and values ", () => {
        cy.request( {
            method: "GET",
            url: "http://www.webdriveruniversity.com",
            headers: {
                accept: "example "
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)

            expect(body).contains("text", "WebDriverUniversity.com (New Approach To Learning")
        })
    })
})