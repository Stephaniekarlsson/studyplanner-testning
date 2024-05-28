import Header from '../../src/components/Header.jsx';

describe('Header component', () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });

  it('should display the correct heading', () => {
    cy.get('h1').contains('Min vecka').should('be.visible');
  });

  it('should display the restart week button', () => {
    cy.get('button.restart-week').contains('Starta om vecka').should('be.visible');
  });
});
