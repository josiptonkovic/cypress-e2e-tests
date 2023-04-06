describe("Test and validation of Product API endpoints", () => {
    
    it("Validate /products endpoint", () => {
      cy.request("GET", `${Cypress.env("storeApi")}/products`).then(
        (response) => {
            expect(response.status).to.be.equal(200);
            expect(response.statusText).to.be.equal("OK");
            expect(response.body.data).to.have.lengthOf(20);
            expect(response.body.data[0].title).to.contain("special cotton shirt for men");
            expect(response.body.data[0].price).to.equal(15);
        }
      );
    });

    it("Validate /products/{productName} endpoint", () => {
        cy.request("GET", `${Cypress.env("storeApi")}/products/running-sneaker`).then(
            (response) => {
                expect(response.status).to.be.equal(200);
                expect(response.statusText).to.be.equal("OK");
                expect(response.body.data.title).to.contain("running sneaker");
                expect(response.body.data.price).to.equal(200);
            }
        );
    });

    it("Validate pagination results for 10 products per page and view page 1", () => {
        cy.request("GET", `${Cypress.env("storeApi")}/products?limit=10&page=1`).then(
            (response) => {
                expect(response.status).to.be.equal(200);
                expect(response.statusText).to.be.equal("OK");
                expect(response.body.data).to.have.lengthOf(10);
                expect(response.body.metadata.currentPage).to.equal(1);
                expect(response.body.metadata.nextPage).to.equal(2);
                expect(response.body.metadata.totalPages).to.equal(3);
                expect(response.body.metadata.totalProducts).to.equal(20);
            }
        );
    });

    it("Validate product creation", () => {
        cy.request("POST", `${Cypress.env("storeApi")}/products`, {
            title: "Hiking boots",
            price: 999,
            description: "best hiking boots on the market",
            category: "612e42d755b07f20de9ec6a5",
        }).then((response) => {
            expect(response.status).to.be.equal(201);
            expect(response.statusText).to.be.equal("Created");
            expect(response.body.data.title).to.be.equal("Hiking boots")
            expect(response.body.data.price).to.be.equal(999);
            expect(response.body.data.description).to.be.equal("best hiking boots on the market");
            expect(response.body.data.category).to.be.equal("612e42d755b07f20de9ec6a5");
        });
    });

    it("Update product validation", () => {
        cy.request("PUT", `${Cypress.env("storeApi")}/products/running-sneaker`, {
            title: "Men Boxer Sneakers For Men  (Black)",
            price: 799,
            description: "Lorem Ipsum is simply dummy text of the printing",
            category: "612e42d755b07f20de9ec6a5"
        }).then((response) => {
            expect(response.status).to.be.equal(201);
        });
    });
});