describe('App', () => {
  it('adds multiple todos with default status of non-done', () => {
    cy.visit('/');
    cy.get('input').type('wash dishes');
    cy.get('[aria-label="add-icon"]').click();
    cy.contains('wash dishes');
    cy.get('input').type('sweep the floor {enter}');
    cy.contains('sweep the floor');
    cy.get('#done').click();
    cy.contains('This is an empty list.');
  });

  it("changes todo's status", () => {
    cy.visit('/');
    cy.get('input').type('wash dishes {enter}');
    cy.get('[aria-label="circle-button"]').click();
    cy.get('#non-done').click();
    cy.contains('This is an empty list.');
  });

  it('deletes an existing todo', () => {
    cy.visit('/');
    cy.get('input').type('wash dishes {enter}');
    cy.get('[aria-label="delete-icon"]').click();
    cy.contains('This is an empty list.');
  });
});

export {};
