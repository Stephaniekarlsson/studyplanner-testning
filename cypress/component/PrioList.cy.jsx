import { useStore } from '../../src/data/store.js';
import PrioList from '../../src/components/prio-list/PrioList.jsx';

const testTodos = [
  { id: 1, text: 'Todo 1', done: false },
  { id: 2, text: 'Todo 2', done: false },
  { id: 3, text: 'Todo 3', done: true },
  { id: 4, text: 'Todo 4', done: false },
  { id: 5, text: 'Example todo 5', done: false }
];

describe('PrioList component', () => {
  beforeEach(() => {
    useStore.setState({
      todos: testTodos,
    });
    cy.mount(<PrioList />);
  });

  it('should display the correct heading', () => {
    cy.get('h2').contains('Vad ska jag göra nu?').should('be.visible');
  });

  it('should display all todos that are not done', () => {
    cy.contains('Todo 1').should('be.visible');
    cy.contains('Todo 2').should('be.visible');
    cy.contains('Todo 4').should('be.visible');
    cy.contains('Example todo 5').should('be.visible');
  });

  it('should not display todos that are done', () => {
    cy.contains('Todo 3').should('not.exist');
  });

  it('should filter todos based on search term', () => {
    cy.get('input[type="search"]').type('Ex');
    cy.contains('Example todo 5').should('be.visible');
    
    cy.get('input[type="search"]').clear();
  });

});
