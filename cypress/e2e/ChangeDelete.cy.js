/*
userstory
2. Som student vill jag kunna ta bort ett todo item, eftersom att saker kan ändras
 
3. Som en student vill jag kunna ändra texten för en todo item, så att jag kan uppdatera den om något nytt händer.
*/

describe('Delete and edit', () => {
  beforeEach(() => {
   
    const testTodos = [
      { id: 1, text: 'Todo 1', done: false },
      { id: 2, text: 'Todo 2', done: false },
      { id: 3, text: 'Todo 3', done: true },
      { id: 4, text: 'Todo 4', done: false },
      { id: 5, text: 'Example todo 5', done: false }
    ];
    cy.visit('/');
  });

  it('should have a delete icon for each todo and be able to delete', () => {
    cy.get('[data-cy="delete-icon"]').contains('🗑️')
    cy.get('[data-cy="delete-icon"]').should('have.length', 5);
    cy.get('[data-cy="delete-icon"]').first().click();
    cy.get('[data-cy="delete-icon"]').should('have.length', 4);
    cy.contains('Todo 1').should('not.exist');
  });

  it('should have a edit icon for each todo and be able to edit the todo', () => {
    cy.get('[data-cy="edit-icon"]').contains('✍️')
    cy.get('[data-cy="edit-icon"]').should('have.length', 5);
    cy.get('[data-cy="edit-icon"]').first().click();
    cy.get('[data-cy="input-field"]').clear().type('Updated Todo{enter}');
    cy.contains('Updated Todo').should('exist');
  });
});
