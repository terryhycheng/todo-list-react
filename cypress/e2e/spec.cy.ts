describe('My first test', () => {
  it('contains a title', () => {
    cy.visit('/');
    cy.contains('to-do');
  });
});

export {};
