
import { useStore } from "../../src/data/store.js"
import Footer from "../../src/components/Footer.jsx"

describe("Footer component", () => {
    it("Should show the day", () => {
        const weekday = "Lördag" 
        cy.mount(< Footer /> )
        useStore.setState({todayName: weekday })
        cy.get('[data-cy="today-name"]').contains(weekday).should("be.visible")
    })
});