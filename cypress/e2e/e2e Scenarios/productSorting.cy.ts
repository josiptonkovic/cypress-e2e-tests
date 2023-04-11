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

    it("Validate product ordering Name: Z to A", () => {
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]").should(
            "contain.text", "Test.allTheThings() T-Shirt (Red)"
        );
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]").should(
            "contain.text", "Sauce Labs Backpack"
        );
    });

    it("Select Name (A to Z) in ordering dropdown", () => {
        InventoryPage.orderingDropdownElement.select("az");
    });

    it("Validate product ordering Name: A to Z", () => {
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]").should(
            "contain.text", "Sauce Labs Backpack"
        );
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]").should(
            "contain.text", "Test.allTheThings() T-Shirt (Red)"
        );
    });

    it("Select Price (Low to High) in ordering dropdown", () => {
        InventoryPage.orderingDropdownElement.select("lohi");
    });

    it("Validate product ordering Price: Low to High", () => {
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]").should(
            "contain.text", "$7.99"
        );
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]").should(
            "contain.text", "$49.99"
        );
    });

    it("Select Price (High to Low) in ordering dropdown", () => {
        InventoryPage.orderingDropdownElement.select("hilo");
    });

    it("Validate product ordering Price: High to Low", () => {
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]").should(
            "contain.text", "$49.99"
        );
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]").should(
            "contain.text", "$7.99"
        );
    })

});