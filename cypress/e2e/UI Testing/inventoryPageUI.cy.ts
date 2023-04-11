import { LoginPage } from "../pages/Login";
import { InventoryPage } from "../pages/Inventory";

let img: HTMLImageElement;

describe("Inventory page UI tests", () => {

    it("Visit Store page and Log in", () => {
        cy.visit("/");
        LoginPage.usernameElement.type("standard_user");
        LoginPage.passwordElement.type("secret_sauce");
        LoginPage.loginElement.click();
        cy.url().should("contain", "inventory.html");
        cy.get(".title").should("have.text", "Products");
    });
    
    it("Check that Images are displayed correctly", () => {

        cy.get('[alt="Sauce Labs Backpack"]')
        .should("be.visible")
        .and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0);
        });

        cy.get('[alt="Sauce Labs Bike Light"]')
        .should("be.visible")
        .and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0);
        });

        cy.get('[alt="Sauce Labs Bolt T-Shirt"]')
        .should("be.visible")
        .and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0);
        });

        cy.get('[alt="Sauce Labs Fleece Jacket"]')
        .should("be.visible")
        .and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0);
        });

        cy.get('[alt="Sauce Labs Onesie"]')
        .should("be.visible")
        .and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0);
        });

        cy.get('[alt="Test.allTheThings() T-Shirt (Red)"]')
        .should("be.visible")
        .and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0);
        });
    });



});