describe("Dashboard", () => {
    it("should display the dashboard", () => {
        cy.visit("http://localhost:5174")
        cy.get('[data-cy="title"]').should("be.visible")
    });

    it("should contain graph", () => {
        cy.visit("http://localhost:5174");
        cy.get('[data-cy="bar-graph"]').should("be.visible");
    });
    
    it("mock data test", () => {
       cy.intercept("GET","/api/data",{
            statusCode : 200,
            labels :["A","B"],
            values : [3,5],
       });
       cy.visit("http://localhost:5174");
       cy.get('[data-cy="bar-graph"]').should("be.visible");
    });
});