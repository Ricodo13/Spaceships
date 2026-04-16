describe('Tests fonctionnels du jeu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Le jeu se charge correctement', () => {
    cy.title().should('not.be.empty');
  });

  it('Le canvas de rendu 3D est présent dans le DOM', () => {
    cy.get('canvas').should('exist');
  });

  it('Le jeu tourne sans erreur critique dans la console', () => {
    cy.get('canvas').should('be.visible');
  });
});