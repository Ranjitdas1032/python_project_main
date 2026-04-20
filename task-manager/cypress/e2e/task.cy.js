describe("Task App", () => {
    beforeEach(() => {
    cy.visit("http://localhost:5174");
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });
  it("loads successfully", () => {
    cy.visit("http://localhost:5174");
    cy.get('[data-cy="all-items"]').should("be.visible");
  });
  it('shows items successfully', () => {
    cy.visit("http://localhost:5174");
      cy.get('[data-cy ="input-task"]').type("Learn Cypress");
      cy.contains("Submit").click();

      cy.get('[data-cy ="task-1"]').should("exist");
  });
    it("deletes items successfully", () => {
    // Add task
    cy.get('[data-cy="input-task"]').type("Delete Me");
    cy.contains("Submit").click();

    // Verify exists
    cy.contains("Delete Me").should("exist");

    // Delete it
    cy.contains("Delete Me")
      .parent()
      .find('[data-cy="Delete-btn"]')
      .click();

    // Verify removed
    cy.contains("Delete Me").should("not.exist");
  });

    it('Task not be empty', () => {
        cy.visit("http://localhost:5174");
        cy.contains("Submit").click();

        cy.get('[data-cy="error"]').should("have.text","Task can't be empty");
    });

});