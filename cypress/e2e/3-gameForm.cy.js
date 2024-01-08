/* eslint-disable no-undef */
describe('Game form', () => {
  beforeEach(() => {
    cy.register();
  });

  it('should show alert with odd number', () => {
    cy.get('#cards-number').type('3');
    cy.get('#game-form').submit();
    cy.on('window:alert', (text) => expect(text).to.not.be.empty);
  });

  it('should start the game', () => {
    cy.get('#cards-number').type('4');
    cy.get('#game-form').submit();
    cy.get('#game-board').should('be.visible');
  });
});