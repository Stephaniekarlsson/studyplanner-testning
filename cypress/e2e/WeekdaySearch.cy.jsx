/*
userstory
1. Som en student vill jag att veckans alla dagar ska visas, så att jag kan välja fritt när jag vill göra mina uppgifter.

4. Som en student vill jag kunna söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan.
*/

describe("Should show all weekdays and be able to search todo.", () => {
    const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
    const searchTerm = "Övning 1";

    beforeEach(() => {
        cy.visit("/");
    })

    it('should show all weekdays', () => {
        weekdays.forEach(day => {
            cy.get("[data-cy='day-view']").contains(day).should("be.visible");
        });
    });

    it('should should be able to search todos', () => {
        cy.get('[data-cy="search-input"]').type(searchTerm);
        cy.get("[data-cy='prio-items']").each(($item) => {
            cy.wrap($item).contains(searchTerm).should("be.visible");
        });
    });
});
