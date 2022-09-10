/// <reference types="cypress" />

describe('App2', () => {
  beforeEach(() => {
    cy.visit('localhost:3002');
  });

  it('exists', () => {
    cy.contains(/app/i)
  })
});
