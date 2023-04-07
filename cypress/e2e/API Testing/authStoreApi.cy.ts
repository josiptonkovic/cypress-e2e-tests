describe("Test and validation of Authorization API endpoints", () =>{
    
    it("Login with correct credentials", () => {
        cy.request("POST", `${Cypress.env("storeApi")}/auth/login`, {
            email: "marklyan@gmail.com",
            password: "simple_password",
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.statusText).to.be.equal("OK");
            expect(response.body.data.access_token).to.exist;
        });
    });
});