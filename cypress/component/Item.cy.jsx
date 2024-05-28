import Item from "../../src/components/day/Item.jsx";
import { useStore } from "../../src/data/store.js";

describe("<Item />", () => {
  let newText = "Uptated todo text";
  beforeEach(() => {
    useStore.setState({
      todos: [{ id: 1, text: "Example text", done: false, late: false }],
    });
    cy.mount(
      <Item item={{ id: 1, text: "Example text", done: false, late: false }} />
    );
  });

  // 1. Should be able to edit todo text
  // 1a. should contain ✍️
  // 1b. should be able to click on ✍️
  // 1c. Should be able to change text
  // 1d. should render todo text

  it("1a. Should contain ✍️", () => {
    cy.contains("✍️").should("be.visible");
  });

  it("1b. Should be able to click on ✍️", () => {
    cy.get('[data-cy="edit-icon"]').click();
  });

  it("1c. Should be able to change text", () => {
    cy.get('[data-cy="edit-icon"]').click();
    cy.get('[data-cy="input-field"]').clear().type(newText);
  });

  it("1d. Should contain ✍️", () => {
    cy.contains("Example text").should("be.visible");
  });


  // 2. Should be able to delete todos
  // 2a. should contain 🗑️
  // 2b. should be able to click on 🗑️
  // 2c. Should be able to delete todo

  it("2a. Should contain 🗑️", () => {
    cy.contains("🗑️").should("be.visible");
  });

  it("2b. Should be able to click on 🗑️", () => {
    cy.get('[data-cy="delete-icon"]').click();
  });

  it("2c. Should be able to delete todo", () => {
    cy.get('[data-cy="delete-icon"]').then(($btn) => {
      const todoId = $btn.data('todo-id');
      cy.wrap(useStore.getState().todos).should('not.include', { id: todoId });
    });
  });

  // 3. should be able to show and toggle checkboxes
  // 3a. should show a checkbox
  // 3b. should be able to click and toggle to checked
  // 3c. should be able to click and toggle to unchecked

  it("3a. Should contain a unchecked checkbox", () => {
    cy.get('[data-cy="checkbox"]').check();
  });

  it("3b. Should be able to check", () => {
    cy.get('[data-cy="checkbox"]').check();
  });

  it("3b. Should be able to uncheck", () => {
    cy.get('[data-cy="checkbox"]').uncheck();
  });

});




