import Day from "../../src/components/day/Day.jsx"

describe("<Day/>", () => {
    
    let weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag ", "Lördag", "Söndag"]
    
    let testData = [ { id: 1, day: 'måndag', done: true, late: false, text: 'Exempel text' },
    ]

    beforeEach(() => {
        cy.mount(<Day day={testData} dayIndex={0} /> )
      });

    // 1. should show a daycard with Day, task and a button
    // 1a. should show the day
    // 1b. should show a checkbox
    // 1c. should show the task
    // 1d. should show a btn

    it("1a. should show the day", () => {
        cy.get('[data-cy="day"]').contains(weekdays[0]).should("be.visible")
    })

    it("1b. should show a checkbox", () => {
        cy.get('[data-cy="checkbox"]').should("be.visible")
    })

    it("1c. should show the task", () => {
        cy.get("label").contains('Exempel text').should("be.visible")
    })

    it("1d. should show a btn", () => {
        cy.get('[data-cy="btn"]').contains("Ny uppgift").should("be.visible")
    })
});