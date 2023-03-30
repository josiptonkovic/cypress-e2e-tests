import { InventoryPage } from "./pages/Inventory";
import { LoginPage } from "./pages/Login";
import { ShoppingCartPage } from "./pages/Cart";
import { CheckoutPage } from "./pages/Checkout";

describe("Orderig products flow", () => {
  
    it("Visit Store page and Log in", () => {
            cy.visit("/");
            LoginPage.usernameElement.type("standard_user");
            LoginPage.passwordElement.type("secret_sauce");
            LoginPage.loginElement.click();
            cy.url().should("contain", "inventory.html");
            cy.get(".title").should("have.text", "Products");
    });
  
    it("Add Jacket and Bike Lights to cart", () => {
        InventoryPage.buttonJacketElement.click();
        InventoryPage.buttonBikeLightElement.click();
    });
    
    it("Click on Shopping Cart", () => {
        InventoryPage.buttonShoppingCartElement.click();
    });

    it("Verify that correct items are in the Shopping Cart", () => {
        ShoppingCartPage.firstItemElement.should(
            "contain",
            "Sauce Labs Fleece Jacket"
        );
        ShoppingCartPage.secondItemElement.should(
            "contain",
            "Sauce Labs Bike Light"
        );
    });

    it("Click on Checkout button", () => {
        ShoppingCartPage.checkoutButtonElement.click();
    });

    it("Fill out Personal and Shipping Information", () => {
        CheckoutPage.firstNameElement.type("Name");
        CheckoutPage.lastNameElement.type("Eman");
        CheckoutPage.zipCodeElement.type("12345");
    });

    it("Click on Continue button", () => {
        CheckoutPage.continueButtonElement.click();
    });



});