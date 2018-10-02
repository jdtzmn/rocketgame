describe('Welcome page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('finds the Welcome "div"', () => {
    cy.get('div[data-cy=welcome]')
      .should('exist');
  });
});
