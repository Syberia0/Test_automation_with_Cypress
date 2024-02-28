describe("Test Date Picker via webdriver uni ", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
  });

  it("Select date from date picker ", () => {
    cy.get('#datepicker').click()
    //   // Get current day
    //   let currentDate = new Date();
    //   currentDate.setDate(currentDate.getDate());
    //   cy.log(currentDate.getDate());

    //   // Add extra days (in this case, 5 days)
    //   let futureDate = new Date();
    //   futureDate.setDate(futureDate.getDate() + 5);
    //   cy.log(futureDate.getDate());
    var currentdate = new Date();
    currentdate.setDate(currentdate.getDate() + 70); // we adding days at current date

    var futureYear = currentdate.getFullYear();
    var futureMonth = currentdate.toLocaleString("default", { month: "long" });
    var futureDay = currentdate.getDate();
    cy.log("Future year to select: " + futureYear);
    cy.log("Future year to select: " + futureMonth);
    cy.log("Future year to select: " + futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            //!if the current date does not include future year
            cy.get(".next").first().click(); //this function will click till it reach next year
            selectMonthAndYear();
          }
        }).then(() => {
            cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click(); 
                selectMonthAndYear();
              }
            })

        })
    }
    function selectFutureDay() {
        cy.get('[class="day"]').contains(futureDay).click()
    }
    selectMonthAndYear() // we want to always first select month and year
    selectFutureDay()
  });
});
