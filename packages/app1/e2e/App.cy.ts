/// <reference types="cypress" />

describe('App1', () => {
  beforeEach(() => {
    cy.visit('localhost:3001');
  });

  it('exists', () => {
    cy.contains(/app/i)
  })
});
