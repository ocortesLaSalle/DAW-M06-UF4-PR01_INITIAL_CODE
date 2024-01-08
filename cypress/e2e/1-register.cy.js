/* eslint-disable no-undef */
describe('User form', () => {
  beforeEach(() => {
    cy.visitURL();
  });

  it('should submit form with correct data', () => {
    cy.register();
  });

  it('should show alert with incorrect name', () => {
    const nameInput = cy.get('#name');
    nameInput.type('123');
    nameInput.should('have.class', 'invalid-input');
    cy.get('#user-form-btn').should('be.disabled');
    cy.window().should('have.property', 'sessionStorage')
      .and('not.have.property', 'user');
  });

  it('should show alert with incorrect email', () => {
    const emailInput = cy.get('#email');
    emailInput.type('johndoeexample.com');
    emailInput.should('have.class', 'invalid-input');
    cy.get('#user-form-btn').should('be.disabled');
    cy.window().should('have.property', 'sessionStorage')
      .and('not.have.property', 'user');
  });

  it('should show alert with incorrect age (>100)', () => {
    const ageInput = cy.get('#age');
    ageInput.type('150');
    ageInput.should('have.class', 'invalid-input');
    cy.get('#user-form-btn').should('be.disabled');
    cy.window().should('have.property', 'sessionStorage')
      .and('not.have.property', 'user');
  });

  it('should show alert with incorrect age (<0)', () => {
    const ageInput = cy.get('#age');
    ageInput.type('-1');
    ageInput.should('have.class', 'invalid-input');
    cy.get('#user-form-btn').should('be.disabled');
    cy.window().should('have.property', 'sessionStorage')
      .and('not.have.property', 'user');
  });
});