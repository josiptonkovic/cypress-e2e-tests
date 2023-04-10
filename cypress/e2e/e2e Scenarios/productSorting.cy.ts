import { InventoryPage } from "../pages/Inventory";
import { LoginPage } from "../pages/Login";

describe("Validate product ordering feature", () => {

    it("Visit Store page and Log in", () => {
        cy.visit("/");
        LoginPage.usernameElement.type("standard_user");
        LoginPage.passwordElement.type("secret_sauce");
        LoginPage.loginElement.click();
        cy.url().should("contain", "inventory.html");
        cy.get(".title").should("have.text", "Products");
    });

    it("Select Name (Z to A) in ordering dropdown", () => {
        InventoryPage.orderingDropdownElement.select("za");
    });

    it("Validate product ordering Z to A", () => {
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]").should("contain.text", "Test.allTheThings() T-Shirt (Red)");
        
    });

});