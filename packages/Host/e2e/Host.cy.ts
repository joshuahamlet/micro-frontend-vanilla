/// <reference types="cypress" />

describe('Host', () => {
  beforeEach(() => {
    cy.visit('localhost:3003');
  });

  it('exists', () => {
    cy.contains(/adventures/i);
    cy.findAllByText(/adventures/i).should('have.length', 4);
  });
});
