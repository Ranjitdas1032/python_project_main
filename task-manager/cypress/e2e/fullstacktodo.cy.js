describe("Todos",() => {
    beforeEach(()=>{
        cy.visit("http://localhost:5173/")
    })
    it('shows the title', () => {
        cy.visit("http://localhost:5173/");
        cy.contains("Todos").should("be.visible");
    });
    it('adding,upadting and deleting',()=> {
         cy.visit("http://localhost:5173/");
         //Post
         cy.get('[data-cy="input"]').type("This is for testing of cypress");
         cy.contains("Add").click();
         cy.contains("This is for testing of cypress").should("be.visible");
        
         //Update
         cy.contains("This is for testing of cypress")
         .parent()
         .find('button')
         .contains("Edit")
         .click();


         cy.get('[data-cy="input"]').clear()
         .type("New Data for test");

         cy.contains("Upadate").click()

          cy.contains("This is for testing of cypress").should("not.exist");
          cy.contains("New Data for test").should("be.visible");

        //Delete
        cy.contains("New Data for test")
         .parent()
         .find('button')
         .contains("Delete")
         .click();

        cy.contains("New Data for test").should("not.exist");

    })
})