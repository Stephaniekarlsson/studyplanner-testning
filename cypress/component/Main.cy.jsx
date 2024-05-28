// cypress/e2e/main.cy.js

import Main from '../../src/components/Main.jsx';
import { useStore } from '../../src/data/store.js';
import { splitTodosIntoDays } from '../../src/utils/list.js';

describe('Main component', () => {
    const testTodos = [
      { id: 1, text: 'Todo 1', day: 'Monday' },
      { id: 2, text: 'Todo 2', day: 'Tuesday' },
      { id: 3, text: 'Todo 3', day: 'Wednesday' },
      { id: 4, text: 'Todo 4', day: 'Thursday' },
      { id: 5, text: 'Todo 5', day: 'Friday' },
      { id: 6, text: 'Todo 6', day: 'Saturday' },
      { id: 7, text: 'Todo 7', day: 'Sunday' }
    ];
  beforeEach(() => {
    useStore.setState({ todos: testTodos });
    cy.mount(<Main />);
  });

  it('should display all week days', () => {
    const days = splitTodosIntoDays(testTodos);
    days.forEach((day) => {
      cy.get('[data-cy="day-view"]')
        .should('contain', day);
    });
  });
});
